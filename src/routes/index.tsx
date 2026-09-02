import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import heroCoins from "@/assets/hero-coins.jpg";
import artTopup from "@/assets/art-topup.jpg";
import artPrice from "@/assets/art-price.jpg";
import artGift from "@/assets/art-gift.jpg";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  Coins,
  CreditCard,
  Gift,
  Info,
  LineChart,
  Lock,
  Map,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tag,
  Wallet,
} from "lucide-react";

const TITLE = "Koin TikTok — Harga, Paket & Panduan Pembelian | KoinPanduan";
const DESCRIPTION =
  "Informasi lengkap koin TikTok: harga, pilihan paket, cara beli, cara top up, dan panduan penggunaan koin untuk gift. Panduan berbahasa Indonesia yang jelas dan transparan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

/* ---------------------------------- data --------------------------------- */

const QUICK_COINS = [
  { amount: "70 Koin", desc: "Cocok untuk mencoba gift kecil pertama kali." },
  { amount: "350 Koin", desc: "Pilihan ringan untuk menonton LIVE sesekali." },
  { amount: "700 Koin", desc: "Sering dipilih pengguna aktif harian." },
  { amount: "1.400 Koin", desc: "Untuk kebutuhan gift yang lebih rutin." },
  { amount: "3.500 Koin", desc: "Alternatif isi ulang dalam jumlah besar." },
  { amount: "7.000 Koin", desc: "Paket besar untuk penggunaan jangka panjang." },
];

const PACKAGES = [
  {
    size: "70 Koin",
    note: "Paket pemula",
    value: "Nilai kecil untuk mengenal sistem gift TikTok.",
    badge: null as string | null,
  },
  {
    size: "350 Koin",
    note: "Paket ringan",
    value: "Fleksibel untuk beberapa gift bernilai rendah.",
    badge: null,
  },
  {
    size: "700 Koin",
    note: "Paket harian",
    value: "Sering digunakan penonton LIVE reguler.",
    badge: "Populer",
  },
  {
    size: "1.400 Koin",
    note: "Paket menengah",
    value: "Menghemat langkah isi ulang berulang.",
    badge: null,
  },
  {
    size: "3.500 Koin",
    note: "Paket besar",
    value: "Untuk pengguna yang aktif mendukung creator.",
    badge: null,
  },
  {
    size: "7.000 Koin",
    note: "Paket maksimal",
    value: "Jumlah terbesar yang umum tersedia.",
    badge: null,
  },
];

const BUY_STEPS = [
  { n: "01", title: "Pilih jumlah koin", text: "Tentukan paket yang sesuai kebutuhan Anda.", icon: Coins },
  { n: "02", title: "Periksa informasi harga", text: "Bandingkan nilai paket sebelum melanjutkan.", icon: Tag },
  { n: "03", title: "Klik opsi pembelian", text: "Gunakan tombol menuju halaman pembelian yang relevan.", icon: ArrowRight },
  { n: "04", title: "Ikuti proses pada halaman tujuan", text: "Pastikan alamat tujuan benar sebelum mengisi data.", icon: ScanSearch },
  { n: "05", title: "Selesaikan pembelian", text: "Ikuti instruksi resmi hingga transaksi selesai.", icon: BadgeCheck },
];

const WHY = [
  { title: "Informasi mudah dipahami", text: "Penjelasan singkat, rapi, dan bebas istilah membingungkan.", icon: BookOpen },
  { title: "Panduan langkah demi langkah", text: "Setiap proses dijelaskan berurutan dari awal sampai selesai.", icon: Map },
  { title: "Informasi harga yang transparan", text: "Kami menjelaskan faktor yang memengaruhi harga, bukan menjanjikan angka tetap.", icon: LineChart },
  { title: "Fokus pada pengalaman pengguna", text: "Tampilan ringan, cepat, dan nyaman dibaca di ponsel.", icon: Smartphone },
  { title: "Navigasi sederhana", text: "Semua topik utama dapat diakses hanya dalam satu halaman.", icon: Sparkles },
  { title: "Link yang jelas", text: "Setiap tombol menjelaskan ke mana Anda akan diarahkan.", icon: ArrowRight },
];

const GUIDE_STEPS = [
  {
    n: "1",
    title: "Pahami apa itu koin TikTok",
    text: "Koin adalah saldo digital di dalam aplikasi TikTok yang dapat ditukar menjadi gift.",
    sub: "Koin tidak sama dengan uang tunai dan mengikuti ketentuan platform.",
  },
  {
    n: "2",
    title: "Tentukan jumlah koin",
    text: "Sesuaikan jumlah koin dengan kebiasaan menonton LIVE dan gift yang ingin dikirim.",
    sub: "Mulai dari paket kecil bila baru pertama kali.",
  },
  {
    n: "3",
    title: "Periksa harga terkini",
    text: "Harga dapat berbeda antar perangkat, platform, dan wilayah.",
    sub: "Selalu cek harga pada halaman pembelian sebelum konfirmasi.",
  },
  {
    n: "4",
    title: "Lakukan pembelian pada jalur resmi",
    text: "Gunakan aplikasi TikTok atau halaman pembelian resmi yang berlaku di wilayah Anda.",
    sub: "Periksa alamat situs tujuan sebelum memasukkan data apa pun.",
  },
  {
    n: "5",
    title: "Pastikan koin masuk",
    text: "Setelah transaksi selesai, saldo koin akan terlihat pada profil akun Anda.",
    sub: "Bila belum masuk, tunggu beberapa saat lalu periksa riwayat transaksi.",
  },
];

const SAFETY = [
  "Periksa alamat URL halaman tujuan sebelum melanjutkan.",
  "Hindari situs mencurigakan yang menjanjikan koin gratis.",
  "Jangan pernah membagikan kata sandi akun Anda.",
  "Jangan pernah membagikan kode verifikasi kepada siapa pun.",
  "Tinjau kembali detail transaksi sebelum konfirmasi.",
  "Gunakan jalur pembelian resmi bila tersedia di wilayah Anda.",
];

const HUB = [
  { title: "Harga Koin", text: "Faktor yang memengaruhi harga dan cara mengeceknya.", href: "#harga", icon: Tag },
  { title: "Cara Membeli", text: "Langkah pembelian koin dari awal sampai selesai.", href: "#cara-beli", icon: CreditCard },
  { title: "Top Up", text: "Panduan isi ulang koin dan hal yang perlu diperiksa.", href: "#top-up", icon: Wallet },
  { title: "TikTok Gift", text: "Hubungan koin, gift, dan dukungan untuk creator.", href: "#gift", icon: Gift },
  { title: "Tips & Panduan", text: "Kumpulan tutorial praktis seputar koin TikTok.", href: "#panduan", icon: BookOpen },
];

const ARTICLES = [
  {
    cat: "Dasar",
    title: "Koin TikTok: Apa Itu dan Bagaimana Cara Kerjanya?",
    excerpt: "Penjelasan sederhana tentang saldo koin, fungsinya di aplikasi, dan batasannya.",
    time: "6 menit",
    img: artGift,
  },
  {
    cat: "Harga",
    title: "Harga Koin TikTok dan Cara Mengeceknya dengan Benar",
    excerpt: "Mengapa harga bisa berbeda antar perangkat dan bagaimana memeriksanya sendiri.",
    time: "5 menit",
    img: artPrice,
  },
  {
    cat: "Pembelian",
    title: "Cara Beli Koin TikTok dengan Mudah untuk Pemula",
    excerpt: "Urutan langkah pembelian, hal yang perlu disiapkan, dan kesalahan umum.",
    time: "7 menit",
    img: artTopup,
  },
  {
    cat: "Top Up",
    title: "Cara Top Up Koin TikTok Tanpa Salah Langkah",
    excerpt: "Perbedaan isi ulang lewat aplikasi dan halaman pembelian resmi.",
    time: "6 menit",
    img: artTopup,
  },
  {
    cat: "Gift",
    title: "Apa Fungsi Koin TikTok untuk Gift saat LIVE?",
    excerpt: "Alur dari koin menjadi gift dan bagaimana creator menerimanya.",
    time: "5 menit",
    img: artGift,
  },
  {
    cat: "Keamanan",
    title: "Tips Aman Membeli Koin TikTok agar Akun Tetap Terlindungi",
    excerpt: "Tanda situs mencurigakan dan kebiasaan aman saat bertransaksi.",
    time: "8 menit",
    img: artPrice,
  },
];

const FAQ_ITEMS = [
  {
    q: "Apa itu koin TikTok?",
    a: "Koin TikTok adalah saldo digital di dalam aplikasi TikTok yang dapat digunakan untuk membeli gift dan fitur tertentu sesuai ketentuan platform.",
  },
  {
    q: "Berapa harga koin TikTok?",
    a: "Harga koin tidak selalu sama. Nilainya dapat berbeda tergantung platform, perangkat, metode pembayaran, dan wilayah. Periksa harga terbaru pada halaman pembelian resmi sebelum bertransaksi.",
  },
  {
    q: "Bagaimana cara membeli koin TikTok?",
    a: "Umumnya Anda memilih jumlah koin, memeriksa harga, lalu menyelesaikan pembayaran melalui aplikasi TikTok atau halaman pembelian resmi yang berlaku di wilayah Anda.",
  },
  {
    q: "Bagaimana cara top up koin TikTok?",
    a: "Top up berarti menambah saldo koin pada akun Anda. Prosesnya mengikuti alur pembelian: pilih paket, periksa harga, lalu selesaikan pembayaran sesuai instruksi pada halaman tujuan.",
  },
  {
    q: "Apakah harga koin TikTok selalu sama?",
    a: "Tidak. Harga dapat berubah sewaktu-waktu dan berbeda antar wilayah maupun perangkat, sehingga sebaiknya selalu diperiksa sebelum membeli.",
  },
  {
    q: "Koin TikTok digunakan untuk apa?",
    a: "Koin umumnya digunakan untuk membeli gift yang dikirim kepada creator saat siaran LIVE, serta beberapa fitur lain sesuai kebijakan TikTok.",
  },
  {
    q: "Apakah koin TikTok bisa digunakan untuk mengirim gift?",
    a: "Ya. Koin ditukar menjadi gift di dalam aplikasi, kemudian gift dikirim kepada creator sesuai sistem yang berlaku di TikTok.",
  },
  {
    q: "Apakah website ini resmi milik TikTok?",
    a: "Tidak. Website ini adalah situs informasi independen dan tidak berafiliasi dengan TikTok. Kami menyediakan panduan serta mengarahkan pengguna ke opsi pembelian yang relevan, dan sebagian tautan dapat berupa tautan referral.",
  },
];

/* -------------------------------- building ------------------------------- */

function SectionHead({
  eyebrow,
  title,
  text,
  center = true,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="bg-gradient-brand inline-flex min-h-11 items-center gap-2 rounded-xl px-6 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-primary/30 bg-card px-6 text-sm font-semibold text-primary transition-colors hover:bg-accent"
    >
      {children}
    </a>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="beranda">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-32 size-[38rem] rounded-full bg-pink/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-52 -left-40 size-[34rem] rounded-full bg-brand/10 blur-3xl"
          />
          <div className="shell grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
                <Sparkles className="size-3.5" aria-hidden /> Koin TikTok Indonesia
              </span>
              <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Koin TikTok — <span className="text-gradient-brand">Harga, Paket</span> &amp;
                Panduan Pembelian
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Temukan informasi lengkap tentang koin TikTok, pilihan paket, harga, cara membeli,
                dan cara melakukan isi ulang dengan mudah.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryLink href="#paket">Lihat Pilihan Koin</PrimaryLink>
                <SecondaryLink href="#cara-beli">Cara Membeli Koin</SecondaryLink>
              </div>
              <p className="mt-6 flex max-w-md items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Kami menyediakan informasi dan mengarahkan pengguna ke opsi pembelian yang relevan.
              </p>

              <dl className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  ["17", "Bagian panduan"],
                  ["6", "Paket koin dibahas"],
                  ["100%", "Informasi transparan"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="text-2xl font-extrabold text-primary">{v}</dt>
                    <dd className="text-xs text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="float-slow relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-glow">
                <img
                  src={heroCoins}
                  alt="Ilustrasi 3D koin digital dan kartu antarmuka pembelian koin TikTok"
                  width={1200}
                  height={1200}
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-4 left-2 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
                <p className="text-[11px] text-muted-foreground">Paket populer</p>
                <p className="text-sm font-bold">700 Koin</p>
              </div>
              <div className="absolute -top-3 right-2 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:block">
                <p className="text-[11px] text-muted-foreground">Status harga</p>
                <p className="text-sm font-bold text-success">Cek harga terbaru</p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK COIN OPTIONS */}
        <section id="paket" className="shell py-16">
          <Reveal>
            <SectionHead
              eyebrow="Pilihan cepat"
              title="Pilih Paket Koin TikTok"
              text="Lihat jumlah koin yang umum tersedia, lalu periksa harga terbaru pada halaman pembelian resmi."
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_COINS.map((c, i) => (
              <li key={c.amount}>
                <Reveal delay={i * 60}>
                  <div className="card-premium h-full p-6">
                    <span className="bg-gradient-brand grid size-11 place-items-center rounded-2xl">
                      <Coins className="size-5 text-primary-foreground" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-bold">{c.amount}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-semibold text-primary">Lihat Harga</span>
                      <a
                        href="#harga"
                        className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-accent px-3 text-sm font-semibold text-accent-foreground"
                      >
                        Lihat Opsi <ArrowRight className="size-3.5" aria-hidden />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* POPULAR PACKAGES */}
        <section id="koin-tiktok" className="bg-card py-16">
          <div className="shell">
            <Reveal>
              <SectionHead
                eyebrow="Katalog"
                title="Paket Koin TikTok Populer"
                text="Gambaran paket yang biasa dipilih pengguna Indonesia. Harga aktual selalu mengikuti halaman pembelian resmi."
              />
            </Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PACKAGES.map((p, i) => (
                <li key={p.size}>
                  <Reveal delay={i * 50}>
                    <div
                      className={`card-premium relative h-full p-6 ${p.badge ? "border-primary/40" : ""}`}
                    >
                      {p.badge && (
                        <span className="bg-gradient-brand absolute -top-3 right-5 rounded-full px-3 py-1 text-[11px] font-bold text-primary-foreground">
                          {p.badge}
                        </span>
                      )}
                      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {p.note}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold">{p.size}</h3>
                      <div className="mt-4 rounded-xl bg-background p-4">
                        <p className="text-xs text-muted-foreground">Perkiraan harga</p>
                        <p className="text-sm font-bold text-primary">Lihat Harga</p>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.value}</p>
                      <a
                        href="#cara-beli"
                        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-primary/30 text-sm font-semibold text-primary transition-colors hover:bg-accent"
                      >
                        Lihat Opsi Pembelian
                      </a>
                      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                        Kami tidak menampilkan harga tetap karena nilainya dapat berubah.
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PRICE INFO */}
        <section id="harga" className="shell py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHead
                center={false}
                eyebrow="Informasi harga"
                title="Harga Koin TikTok"
                text="Harga koin bukan angka tunggal. Nilainya dipengaruhi beberapa faktor, sehingga penting untuk memeriksa harga terbaru sebelum menyelesaikan pembelian."
              />
              <ul className="mt-6 space-y-3">
                {[
                  "Harga dapat berbeda antara aplikasi iOS, Android, dan halaman web.",
                  "Wilayah, mata uang, dan pajak lokal dapat memengaruhi total pembayaran.",
                  "Metode pembayaran tertentu dapat menambah biaya layanan.",
                  "Jumlah koin per paket dapat berubah mengikuti kebijakan platform.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryLink href="#cara-beli">Cek Opsi Pembelian</PrimaryLink>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-premium overflow-hidden">
                <img
                  src={artPrice}
                  alt="Ilustrasi tumpukan koin digital di samping kartu label harga"
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-sm font-bold">Perbandingan sederhana</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Beli lewat aplikasi", "Praktis, harga mengikuti toko aplikasi"],
                      ["Beli lewat halaman web resmi", "Kadang berbeda, periksa dulu"],
                      ["Sumber tidak resmi", "Berisiko, sebaiknya dihindari"],
                    ].map(([a, b]) => (
                      <div
                        key={a}
                        className="flex items-center justify-between gap-4 rounded-xl bg-background px-4 py-3"
                      >
                        <span className="text-sm font-semibold">{a}</span>
                        <span className="text-right text-xs text-muted-foreground">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW TO BUY */}
        <section id="cara-beli" className="bg-card py-16">
          <div className="shell">
            <Reveal>
              <SectionHead
                eyebrow="Langkah pembelian"
                title="Cara Beli Koin TikTok"
                text="Lima langkah sederhana untuk membeli koin dengan aman dan tanpa kebingungan."
              />
            </Reveal>
            <ol className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {BUY_STEPS.map((s, i) => (
                <li key={s.n}>
                  <Reveal delay={i * 70}>
                    <div className="card-premium h-full p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gradient-brand text-2xl font-extrabold">{s.n}</span>
                        <s.icon className="size-5 text-primary" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-base font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TOP UP */}
        <section id="top-up" className="shell py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="card-premium overflow-hidden">
                <img
                  src={artTopup}
                  alt="Ilustrasi ponsel menampilkan antarmuka isi ulang koin digital"
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <SectionHead
                center={false}
                eyebrow="Isi ulang"
                title="Cara Top Up dan Isi Ulang Koin TikTok"
                text="Top up koin TikTok berarti menambah saldo koin pada akun Anda. Prosesnya sama dengan pembelian biasa, hanya saja dilakukan berulang saat saldo menipis."
              />
              <ol className="mt-6 space-y-3">
                {[
                  "Buka opsi pembelian koin melalui aplikasi atau halaman resmi.",
                  "Pilih jumlah koin yang ingin diisi ulang.",
                  "Periksa kembali alamat tujuan dan detail pembayaran.",
                  "Selesaikan pembayaran, lalu pastikan saldo koin bertambah.",
                ].map((t, i) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Selalu verifikasi halaman tujuan sebelum melakukan pembayaran. Situs yang menjanjikan
                harga jauh di bawah normal patut dicurigai.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#panduan">Lihat Panduan Lengkap</PrimaryLink>
              </div>
            </Reveal>
          </div>
        </section>

        {/* COINS & GIFTS */}
        <section id="gift" className="bg-card py-16">
          <div className="shell">
            <Reveal>
              <SectionHead
                eyebrow="Fungsi koin"
                title="Koin TikTok Digunakan untuk Apa?"
                text="Koin adalah saldo di dalam aplikasi yang dapat ditukar menjadi gift untuk mendukung creator saat siaran LIVE."
              />
            </Reveal>
            <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <ol className="space-y-3">
                  {[
                    { t: "Koin TikTok", d: "Saldo digital pada akun Anda.", icon: Coins },
                    { t: "Pilih Gift", d: "Koin ditukar dengan gift yang tersedia.", icon: Gift },
                    { t: "Kirim Gift saat LIVE", d: "Gift dikirim ke creator yang sedang siaran.", icon: Sparkles },
                    {
                      t: "Creator menerima nilai sesuai sistem TikTok",
                      d: "Perhitungan dan pencairan mengikuti kebijakan platform.",
                      icon: BadgeCheck,
                    },
                  ].map((s, i, arr) => (
                    <li key={s.t}>
                      <div className="card-premium flex items-start gap-4 p-5">
                        <span className="bg-gradient-brand grid size-10 shrink-0 place-items-center rounded-xl">
                          <s.icon className="size-5 text-primary-foreground" aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-base font-bold">{s.t}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div aria-hidden className="mx-auto my-1 h-4 w-px bg-border" />
                      )}
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal delay={80}>
                <div className="card-premium overflow-hidden">
                  <img
                    src={artGift}
                    alt="Ilustrasi kotak hadiah bercahaya dikelilingi koin digital"
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full"
                  />
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Nilai yang diterima creator ditentukan oleh sistem TikTok dan dapat berubah.
                      Kami tidak menyatakan angka pasti karena informasi tersebut di luar kendali
                      kami.
                    </p>
                    <div className="mt-5">
                      <SecondaryLink href="#panduan">Pelajari TikTok Gift</SecondaryLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="shell py-16">
          <Reveal>
            <SectionHead
              eyebrow="Alasan"
              title="Mengapa Menggunakan Panduan Koin TikTok Ini?"
              text="Kami fokus pada informasi yang jelas, jujur, dan mudah diikuti — tanpa klaim berlebihan."
            />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 50}>
                  <div className="card-premium h-full p-6">
                    <span className="grid size-11 place-items-center rounded-2xl bg-accent">
                      <w.icon className="size-5 text-primary" aria-hidden />
                    </span>
                    <h3 className="mt-4 text-base font-bold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* VISUAL BUYING GUIDE */}
        <section id="panduan" className="bg-card py-16">
          <div className="shell">
            <Reveal>
              <SectionHead
                eyebrow="Tutorial"
                title="Panduan Membeli Koin TikTok Langkah demi Langkah"
                text="Ikuti alur berikut agar proses pembelian berjalan lancar dari awal hingga koin masuk ke akun."
              />
            </Reveal>
            <div className="mt-10 space-y-4">
              {GUIDE_STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 60}>
                  <div className="card-premium flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
                    <span className="bg-gradient-brand grid size-14 shrink-0 place-items-center rounded-2xl text-xl font-extrabold text-primary-foreground">
                      {s.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY */}
        <section id="keamanan" className="shell py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHead
                center={false}
                eyebrow="Keamanan"
                title="Tips Aman Saat Membeli Koin TikTok"
                text="Kebiasaan sederhana berikut membantu melindungi akun dan data pembayaran Anda."
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SAFETY.map((t) => (
                  <li key={t} className="card-premium flex gap-3 p-4 text-sm leading-relaxed">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div
                id="transparansi"
                className="card-premium h-full border-primary/30 bg-accent/40 p-8"
              >
                <span className="bg-gradient-brand grid size-11 place-items-center rounded-2xl">
                  <Lock className="size-5 text-primary-foreground" aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-extrabold">Transparansi</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Website ini adalah situs informasi independen. Kami tidak menjual, menerbitkan,
                  atau mengirimkan koin TikTok secara langsung. Kami menjelaskan cara kerja koin dan
                  mengarahkan Anda ke opsi pembelian yang relevan.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Sebagian tautan pada halaman ini dapat berupa tautan referral. Kami tidak dapat
                  menjamin harga, ketersediaan, atau kebijakan pihak ketiga, dan kami tidak meminta
                  kata sandi maupun kode verifikasi Anda dalam bentuk apa pun.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INFORMATION HUB */}
        <section className="bg-card py-16">
          <div className="shell">
            <Reveal>
              <SectionHead
                eyebrow="Pusat informasi"
                title="Panduan Koin TikTok"
                text="Jelajahi topik utama sesuai kebutuhan Anda, mulai dari harga hingga penggunaan gift."
              />
            </Reveal>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HUB.map((h, i) => (
                <li key={h.title}>
                  <Reveal delay={i * 50}>
                    <a href={h.href} className="card-premium block h-full p-6">
                      <span className="grid size-11 place-items-center rounded-2xl bg-accent">
                        <h.icon className="size-5 text-primary" aria-hidden />
                      </span>
                      <h3 className="mt-4 text-base font-bold">{h.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Lihat Informasi Lengkap <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ARTICLES */}
        <section id="artikel" className="shell py-16">
          <Reveal>
            <SectionHead
              eyebrow="Blog"
              title="Panduan Terbaru tentang Koin TikTok"
              text="Artikel praktis yang membahas harga, pembelian, top up, gift, dan keamanan transaksi."
            />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 50}>
                  <article className="card-premium h-full overflow-hidden">
                    <img
                      src={a.img}
                      alt={`Ilustrasi artikel: ${a.title}`}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="rounded-full bg-accent px-2.5 py-1 font-semibold text-accent-foreground">
                          {a.cat}
                        </span>
                        <span className="text-muted-foreground">{a.time} baca</span>
                      </div>
                      <h3 className="mt-3 text-base leading-snug font-bold">{a.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {a.excerpt}
                      </p>
                      <a
                        href="#panduan"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        Baca Selengkapnya <ArrowRight className="size-4" aria-hidden />
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-card py-16">
          <div className="shell max-w-3xl">
            <Reveal>
              <SectionHead
                eyebrow="FAQ"
                title="Pertanyaan Umum tentang Koin TikTok"
                text="Jawaban singkat untuk pertanyaan yang paling sering diajukan pengguna Indonesia."
              />
            </Reveal>
            <Reveal delay={60}>
              <Accordion type="single" collapsible className="mt-8 space-y-3">
                {FAQ_ITEMS.map((f, i) => (
                  <AccordionItem
                    key={f.q}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-background px-5"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="shell py-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 text-center shadow-glow sm:p-14">
              <div
                aria-hidden
                className="bg-gradient-brand pointer-events-none absolute -top-24 left-1/2 size-80 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
              />
              <span className="bg-gradient-brand relative mx-auto grid size-14 place-items-center rounded-2xl">
                <Coins className="size-7 text-primary-foreground" aria-hidden />
              </span>
              <h2 className="relative mt-6 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Siap Mengetahui Lebih Banyak tentang{" "}
                <span className="text-gradient-brand">Koin TikTok</span>?
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                Lihat pilihan informasi, harga, paket, dan panduan pembelian yang sesuai dengan
                kebutuhan Anda.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <PrimaryLink href="#paket">Lihat Pilihan Koin</PrimaryLink>
                <SecondaryLink href="#panduan">Baca Panduan</SecondaryLink>
              </div>
            </div>
          </Reveal>
        </section>

        {/* REFERRAL DISCLOSURE */}
        <section id="referral" className="shell pb-16">
          <div className="rounded-2xl border border-border bg-card p-6 sm:flex sm:items-start sm:gap-4">
            <span className="mb-3 grid size-10 shrink-0 place-items-center rounded-xl bg-accent sm:mb-0">
              <Info className="size-5 text-primary" aria-hidden />
            </span>
            <div>
              <h2 className="text-sm font-bold">Informasi Referral</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sebagian tautan di website ini dapat berupa tautan referral atau afiliasi. Apabila
                Anda melakukan tindakan yang memenuhi syarat melalui tautan tersebut, kami dapat
                menerima komisi tanpa biaya tambahan bagi Anda. Hal ini tidak memengaruhi isi
                panduan yang kami tulis. Website ini tidak berafiliasi resmi dengan TikTok.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
