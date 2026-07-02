import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/interactive/ThemeToggle";
import { AppleLogo } from "@/components/ui/AppleLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#hero"
          className="group inline-flex items-center gap-3"
          aria-label={`${siteConfig.name} - về đầu trang`}
        >
          <span className="grid size-10 place-items-center rounded-2xl bg-foreground text-sm font-black tracking-tight text-background shadow-lg shadow-black/10 transition group-hover:-translate-y-0.5">
            <AppleLogo className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.24em] text-muted-foreground">
              IPHONE  17
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-border bg-surface-elevated p-1 shadow-sm backdrop-blur md:flex"
          aria-label="Điều hướng chính"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#newsletter"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
          >
            Đăng ký nhận tin
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <details className="group relative">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-center rounded-full border border-border bg-surface px-4 text-sm font-semibold text-foreground marker:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-3xl border border-border bg-surface-elevated p-2 shadow-2xl shadow-black/15 backdrop-blur-xl">
              {mainNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#newsletter"
                className="mt-2 flex min-h-11 items-center justify-center rounded-2xl bg-accent px-4 text-sm font-semibold text-accent-foreground"
              >
                Đăng ký nhận tin
              </a>
            </div>
          </details>
        </div>
      </div>
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
