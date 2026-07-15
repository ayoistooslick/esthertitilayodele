export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/60 py-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-primary mb-1">AET.</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Esther Titilayo Ayodele,  Sales, Business Development & Marketing, based in Nigeria.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/esther-titilayo-ayodele-229323291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Titiayodele6@gmail.com"
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-semibold tracking-widest uppercase"
            >
              Email
            </a>
          </div>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} Esther Titilayo Ayodele. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
