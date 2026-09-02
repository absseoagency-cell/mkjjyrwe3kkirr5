import { Coins } from "lucide-react";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Koin TikTok",
    links: [
      { label: "Harga Koin", href: "#harga" },
      { label: "Paket Koin", href: "#paket" },
      { label: "Cara Beli", href: "#cara-beli" },
      { label: "Top Up", href: "#top-up" },
      { label: "TikTok Gift", href: "#gift" },
    ],
  },
  {
    title: "Panduan",
    links: [
      { label: "Semua Panduan", href: "#panduan" },
      { label: "Artikel Terbaru", href: "#artikel" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Website",
    links: [
      { label: "Tentang Kami", href: "#tentang" },
      { label: "Hubungi Kami", href: "#tentang" },
      { label: "Kebijakan Privasi", href: "#transparansi" },
      { label: "Disclaimer", href: "#transparansi" },
    ],
  },
  {
    title: "Penting",
    links: [
      { label: "Referral Disclosure", href: "#referral" },
      { label: "Syarat & Ketentuan", href: "#transparansi" },
      { label: "Tips Aman", href: "#keamanan" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="tentang" className="border-t border-border bg-card">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="bg-gradient-brand grid size-9 place-items-center rounded-xl">
              <Coins className="size-5 text-primary-foreground" aria-hidden />
            </span>
            <span className="text-base font-extrabold tracking-tight">
              Koin<span className="text-gradient-brand">Panduan</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Pusat informasi koin TikTok berbahasa Indonesia: harga, paket, cara beli, top up, dan
            panduan penggunaan gift. Kami menyediakan informasi dan mengarahkan pengguna ke opsi
            pembelian yang relevan.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Website ini tidak berafiliasi dengan, tidak dimiliki oleh, dan tidak didukung secara
            resmi oleh TikTok. Seluruh merek dagang adalah milik pemiliknya masing-masing.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KoinPanduan Indonesia. Seluruh hak cipta dilindungi.</p>
          <p>Informasi dapat berubah sewaktu-waktu. Periksa harga resmi sebelum membeli.</p>
        </div>
      </div>
    </footer>
  );
}
