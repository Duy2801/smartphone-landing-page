import { footerNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { AppleLogo } from "@/components/ui/AppleLogo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/70">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <a
            href="#hero"
            className="inline-flex items-center gap-3"
            aria-label={`${siteConfig.name} - về đầu trang`}
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-foreground text-sm font-black tracking-tight text-background">
              <AppleLogo className="size-5" />
            </span>
            <span>
              <span className="block text-lg font-semibold tracking-[-0.04em]">
                {siteConfig.name}
              </span>
              <span className="text-sm text-muted">
                Mượt mà. Mạnh mẽ. Đầy sắc màu.
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
            Khám phá iPhone 17 với ProMotion 120Hz, camera 48MP Dual Fusion,
            chip A19 và nhiều tính năng hữu ích cho mỗi ngày.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-foreground">
              Khám phá
            </h2>
            <nav className="mt-4 grid gap-3" aria-label="Điều hướng footer">
              {mainNavigation.slice(0, 4).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Hỗ trợ</h2>
            <nav className="mt-4 grid gap-3" aria-label="Điều hướng hỗ trợ">
              {footerNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 {siteConfig.publisher}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript và Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
