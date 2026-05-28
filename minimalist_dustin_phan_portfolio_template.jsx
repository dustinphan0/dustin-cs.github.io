export default function DustinPhanTemplate() {
  const sections = [
    "About",
    "Equipment",
    "Goals",
    "Notes",
    "Workflow",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-sm tracking-[0.35em] uppercase text-white/80">
            Dustin Phan
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-white/60 tracking-wide">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="hover:text-white transition-colors duration-300"
              >
                {section}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-6">
            Minimal Portfolio Template
          </p>

          <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] uppercase">
            Dustin Phan
          </h1>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="border border-white/15 px-5 py-2 rounded-full text-sm text-white/70 hover:bg-white hover:text-black transition-all duration-300"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <main className="max-w-5xl mx-auto px-6 pb-32 space-y-32">
        {sections.map((section) => (
          <section
            key={section}
            id={section.toLowerCase()}
            className="border border-white/10 rounded-3xl p-10 md:p-14 bg-white/[0.02] backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/30 mb-3">
                  Section
                </p>

                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  {section}
                </h2>
              </div>

              <div className="max-w-2xl text-white/60 leading-8 text-base">
                <p>
                  This is a placeholder area for your {section.toLowerCase()}.
                  You can replace this text with personal information,
                  projects, systems, ideas, or anything else you want to
                  showcase.
                </p>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/30 text-sm tracking-wide">
        © 2026 Dustin Phan
      </footer>
    </div>
  );
}
