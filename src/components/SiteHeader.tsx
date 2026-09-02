import { useEffect, useState } from "react";
import { Menu, X, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Beranda", href: "#beranda" },
  { label: "Koin TikTok", href: "#koin-tiktok" },
  { label: "Harga", href: "#harga" },
  { label: "Cara Beli", href: "#cara-beli" },
  { label: "Panduan", href: "#panduan" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-brand text-primary-foreground">
        <p className="shell py-2 text-center text-xs sm:text-sm">
          Informasi Koin TikTok, Harga, Paket &amp; Panduan Pembelian dalam Satu Tempat
        </p>
      </div>

      <div
        className={cn(
          "border-b border-border bg-card transition-shadow",
          scrolled && "shadow-soft",
        )}
      >
        <nav
          aria-label="Navigasi utama"
          className="shell flex h-16 items-center justify-between gap-4"
        >
          <a href="#beranda" className="flex items-center gap-2.5">
            <span className="bg-gradient-brand grid size-9 place-items-center rounded-xl">
              <Coins className="size-5 text-primary-foreground" aria-hidden />
            </span>
            <span className="text-base leading-tight font-extrabold tracking-tight">
              Koin<span className="text-gradient-brand">Panduan</span>
              <span className="block text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                Indonesia
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#paket"
              className="bg-gradient-brand hidden min-h-11 items-center rounded-xl px-5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Lihat Pilihan Koin
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="grid size-11 place-items-center rounded-xl border border-border lg:hidden"
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-nav" className="border-t border-border bg-card lg:hidden">
            <ul className="shell flex flex-col py-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-sm font-medium hover:bg-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#paket"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-brand flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-primary-foreground"
                >
                  Lihat Pilihan Koin
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
