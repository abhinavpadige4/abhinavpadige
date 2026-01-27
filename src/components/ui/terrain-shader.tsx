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
  precision highp float;
  
  uniform float iTime;
  uniform vec2 iResolution;
  
  #define EPS 0.001
  #define PI 3.14159265359
  #define RADIAN 180.0 / PI
  #define SPEED 25.0
  
  float hash(in float n) { return fract(sin(n)*43758.5453123); }
  
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
    return .5000 * noise(p)
         + .2500 * noise(p * 2.)
         + .1250 * noise(p * 4.)
         + .0625 * noise(p * 8.);
  }
  
  float dst(vec3 p) {
    return dot(vec3(p.x, p.y
                    + 0.45 * fbm(p.zx) 
                    + 2.55 * noise(.1 * p.xz) 
                    + 0.83 * noise(.4 * p.xz)
                    + 3.33 * noise(.001 * p.xz)
                    + 3.59 * noise(.0005 * (p.xz + 132.453)) 
                    , p.z),  vec3(0.,1.,0.));	
  }
  
  vec3 nrm(vec3 p, float d) {
    return normalize(
        vec3(dst(vec3(p.x + EPS, p.y, p.z)),
             dst(vec3(p.x, p.y + EPS, p.z)),
             dst(vec3(p.x, p.y, p.z + EPS))) - d);
  }
  
  bool rmarch(vec3 ro, vec3 rd, out vec3 p, out vec3 n) {
    p = ro;
    vec3 pos = p;
    float d = 1.;
    for (int i = 0; i < 64; i++) {
      d = dst(pos);
      if (d < EPS) {
        p = pos;
        break;
      }
      pos += d * rd;
    }
    n = nrm(p, d);
    return d < EPS;
  }
  
  vec4 render(vec2 uv) {
    float t = iTime;
    vec2 uvn = (uv) * vec2(iResolution.x / iResolution.y, 1.);
    float vel = SPEED * t;
    
    vec3 cu = vec3(2. * noise(vec2(.3 * t)) - 1.,1., 1. * fbm(vec2(.8 * t)));
    vec3 cp = vec3(0, 3.1 + noise(vec2(t)) * 3.1, vel);
    vec3 ct = vec3(1.5 * sin(t), 
           -2. + cos(t) + fbm(cp.xz) * .4, 13. + vel);
      
    vec3 ro = cp,
       rd = normalize(vec3(uvn, 1. / tan(60. * RADIAN)));
    
    vec3 cd = ct - cp,
       rz = normalize(cd),
       rx = normalize(cross(rz, cu)),
       ry = normalize(cross(rx, rz));
    rd = normalize(mat3(rx, ry, rz) * rd);
    
    vec3 sp, sn;
    vec3 col = (rmarch(ro, rd, sp, sn) ?
        vec3(.6) * dot(sn, normalize(vec3(cp.x, cp.y + .5, cp.z) - sp))
      : vec3(0.));
    
    return vec4(col, length(ro-sp));
  }
  
  void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = fragCoord.xy / iResolution.xy * 2. - 1.;
    
    if (abs(EPS + uv.y) >= .7) { 
      gl_FragColor = vec4(0,0,0,1);
      return;
    }
    
    vec4 res = render(uv);
    vec3 col = res.xyz;
    
    col *= 1.75 * smoothstep(length(uv) * .35, .75, .4);
    float n = hash((hash2(uv) + uv.y) * iTime) * .15;
    col += n;
    col *= smoothstep(EPS, 3.5, iTime);
    gl_FragColor = vec4(col, 1);
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
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: false
    });
    
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Compile shaders
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

    // Create program
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

    // Create fullscreen quad
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Get uniform locations
    const timeLocation = gl.getUniformLocation(program, "iTime");
    const resolutionLocation = gl.getUniformLocation(program, "iResolution");

    // Handle resize
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      
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

    // Animation loop
    const render = () => {
      const currentTime = (performance.now() - startTimeRef.current) / 1000;
      
      gl.uniform1f(timeLocation, currentTime);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
      style={{ display: "block" }}
    />
  );
};

export default TerrainShader;
