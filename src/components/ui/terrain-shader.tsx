"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerrainShaderProps {
  className?: string;
}

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  
  uniform float iTime;
  uniform vec2 iResolution;
  
  #define EPS 0.002
  #define SPEED 15.0
  
  float hash2(vec2 p) {
    return fract(sin(dot(p,vec2(127.1,311.7))) * 43758.5453123);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); 
    f *= f*(3.-2.*f);
    vec2 c = vec2(0,1);
    return mix(mix(hash2(i + c.xx), 
                   hash2(i + c.yx), f.x),
               mix(hash2(i + c.xy), 
                   hash2(i + c.yy), f.x), f.y);
  }
  
  float fbm(in vec2 p) {
    return .5 * noise(p) + .25 * noise(p * 2.) + .125 * noise(p * 4.);
  }
  
  float dst(vec3 p) {
    return p.y + 0.5 * fbm(p.zx * 0.5) 
              + 2.0 * noise(0.1 * p.xz) 
              + 0.8 * noise(0.4 * p.xz)
              + 3.0 * noise(0.001 * p.xz);
  }
  
  vec3 nrm(vec3 p, float d) {
    return normalize(
        vec3(dst(vec3(p.x + EPS, p.y, p.z)),
             dst(vec3(p.x, p.y + EPS, p.z)),
             dst(vec3(p.x, p.y, p.z + EPS))) - d);
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy * 2.0 - 1.0;
    
    // Letterbox effect
    if (abs(uv.y) >= 0.7) { 
      gl_FragColor = vec4(0,0,0,1);
      return;
    }
    
    float t = iTime * 0.3;
    vec2 uvn = uv * vec2(iResolution.x / iResolution.y, 1.0);
    float vel = SPEED * t;
    
    vec3 cp = vec3(0.0, 4.0 + noise(vec2(t)) * 2.0, vel);
    vec3 ct = vec3(sin(t) * 0.5, -1.0, 10.0 + vel);
    
    vec3 ro = cp;
    vec3 rd = normalize(vec3(uvn, 1.5));
    
    vec3 cd = ct - cp;
    vec3 rz = normalize(cd);
    vec3 rx = normalize(cross(rz, vec3(0.0, 1.0, 0.0)));
    vec3 ry = normalize(cross(rx, rz));
    rd = normalize(mat3(rx, ry, rz) * rd);
    
    // Simple raymarching with fewer iterations
    vec3 pos = ro;
    float d = 1.0;
    for (int i = 0; i < 32; i++) {
      d = dst(pos);
      if (d < EPS) break;
      pos += d * rd * 1.2;
    }
    
    vec3 col = vec3(0.0);
    if (d < EPS) {
      vec3 n = nrm(pos, d);
      vec3 lightDir = normalize(vec3(cp.x, cp.y + 2.0, cp.z) - pos);
      col = vec3(0.6) * max(0.0, dot(n, lightDir));
    }
    
    // Vignette
    col *= 1.5 * smoothstep(length(uv) * 0.4, 0.8, 0.5);
    
    // Film grain
    float grain = hash2(uv + fract(iTime)) * 0.1;
    col += grain;
    
    // Fade in
    col *= smoothstep(0.0, 2.0, iTime);
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

export const TerrainShader: React.FC<TerrainShaderProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { 
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance"
    });
    
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const compileShader = (source: string, type: number) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "iTime");
    const resolutionLocation = gl.getUniformLocation(program, "iResolution");

    const resize = () => {
      // Lower resolution for better performance
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const scale = 0.5; // Render at half resolution
      const width = Math.floor(canvas.clientWidth * dpr * scale);
      const height = Math.floor(canvas.clientHeight * dpr * scale);
      
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    startTimeRef.current = performance.now();
    let lastTime = 0;

    const render = (currentTime: number) => {
      // Throttle to ~30fps for smoother experience
      if (currentTime - lastTime < 33) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }
      lastTime = currentTime;
      
      const time = (performance.now() - startTimeRef.current) / 1000;
      
      gl.uniform1f(timeLocation, time);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{ display: "block", imageRendering: "auto" }}
    />
  );
};

export default TerrainShader;
