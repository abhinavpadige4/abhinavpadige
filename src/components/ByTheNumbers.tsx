import MacWindow from '@/components/MacWindow';

const stats = [
  { value: '8000+', label: 'hours shipped', sub: 'across products & systems' },
  { value: '40+', label: 'projects delivered', sub: 'web, backend & AI' },
  { value: '15+', label: 'happy clients', sub: 'startups to enterprises' },
  { value: '99.9%', label: 'uptime maintained', sub: 'production-grade systems' },
];

const ByTheNumbers = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <MacWindow title="dashboard.app" bodyClassName="p-8 sm:p-12">
        <div className="space-y-10">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
              system dashboard
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl italic text-foreground leading-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              By the numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-5 sm:p-6 flex flex-col gap-2 hover:border-foreground/30 transition-colors"
              >
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.value}
                </span>
                <span className="text-sm font-medium text-foreground/90">
                  {s.label}
                </span>
                <span className="text-xs text-muted-foreground">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </MacWindow>
    </section>
  );
};

export default ByTheNumbers;