import logo from "@/assets/nb-logo.jpg";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Newsbureau Nepal logo"
            width={140}
            height={48}
            className="h-10 w-auto object-contain md:h-12"
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="https://enewsbureau.com" className="hover:text-foreground">Home</a>
          <a href="#check" className="hover:text-foreground">Check Result</a>
          <a href="https://enewsbureau.com" className="hover:text-foreground">News</a>
        </nav>
        <a
          href="#check"
          className="rounded-full bg-gradient-to-r from-[color:var(--brand-red)] to-[oklch(0.62_0.2_30)] px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
        >
          Check Result
        </a>
      </div>
    </header>
  );
}
