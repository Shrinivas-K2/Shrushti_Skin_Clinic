import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Facebook, Instagram, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { clinic, services } from "@/data/site";
import RouteLoader from "@/components/RouteLoader";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Doctors", "/doctors"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Layout({ children, title = clinic.name, description = clinic.tagline }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/brand/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen overflow-hidden bg-serum text-ink">
        <RouteLoader />
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 shadow-sm backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full border border-bloom/20 bg-white shadow-bloom">
                <Image src="/assets/brand/logo.jpeg" alt="Shrushti Skin Clinic logo" fill className="object-cover" />
              </span>
              <span>
                <span className="block text-lg font-extrabold uppercase tracking-wide text-bloom md:text-xl">
                  Shrushti
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Skin Clinic
                </span>
              </span>
            </Link>
            <nav className="hidden items-center gap-1 lg:flex">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 hover:bg-bloom/10 hover:text-bloom">
                  {label}
                </Link>
              ))}
            </nav>
            <Link href="/book-appointment" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-bloom">
              Book Appointment
            </Link>
          </div>
        </header>
        <main className="page-slide pt-20">{children}</main>
        <footer className="relative overflow-hidden bg-ink text-white">
          <div className="absolute inset-0 bg-grid bg-[length:34px_34px] opacity-[0.16]" />
          <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-bloom/25 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-pulse/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pt-12 lg:px-8">
            <div className="grid overflow-hidden rounded-lg border border-white/12 bg-white/[.08] shadow-glow backdrop-blur-xl lg:grid-cols-[1.2fr_.8fr]">
              <div className="p-7 md:p-9">
                <p className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/10 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-pulse">
                  <Sparkles size={15} />
                  Modern dermatology care
                </p>
                <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
                  Ready for clearer skin, healthier hair and confident glow?
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-3 border-t border-white/10 p-7 md:p-9 lg:border-l lg:border-t-0">
                <Link href="/book-appointment" className="inline-flex items-center justify-center gap-2 rounded-md bg-bloom px-5 py-4 text-sm font-extrabold text-white shadow-bloom transition hover:bg-white hover:text-ink">
                  Book Appointment <CalendarDays size={18} />
                </Link>
                <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/14 bg-white/10 px-5 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-ink">
                  Call Clinic <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="grid gap-8 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.7fr_.9fr_1.1fr]">
              <div className="rounded-lg border border-white/10 bg-white/[.06] p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <span className="relative h-16 w-16 overflow-hidden rounded-full border border-white/18 bg-white p-1">
                    <Image src="/assets/brand/logo.png" alt="Shrushti Skin Clinic logo" fill className="object-contain p-1" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold">{clinic.name}</h2>
                    <p className="text-sm font-semibold text-bloom">{clinic.doctor}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-white/64">
                  Advanced dermatology, cosmetic treatments, laser procedures and hair care solutions in Shivamogga and Bhadravathi.
                </p>
                <div className="mt-6 flex gap-3">
                  <a aria-label="Facebook" href={clinic.facebook} className="grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-white/10 text-white transition hover:border-bloom hover:bg-bloom">
                    <Facebook size={18} />
                  </a>
                  <a aria-label="Instagram" href={clinic.instagram} className="grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-white/10 text-white transition hover:border-bloom hover:bg-bloom">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>

              <FooterColumn title="Quick Links">
                {nav.map(([label, href]) => (
                  <FooterLink key={href} href={href}>{label}</FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Popular Services">
                {services.slice(0, 5).map((service) => (
                  <FooterLink key={service.slug} href={`/services#${service.slug}`}>{service.title}</FooterLink>
                ))}
              </FooterColumn>

              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-pulse">Reach Us</h3>
                <div className="mt-5 grid gap-3">
                  {clinic.locations.map((location) => (
                    <ContactChip key={location.city} icon={MapPin}>
                      {location.city}: {location.address}
                    </ContactChip>
                  ))}
                  <ContactChip icon={Mail} href={`mailto:${clinic.email}`}>{clinic.email}</ContactChip>
                  {clinic.phones.map((phone) => (
                    <ContactChip key={phone} icon={Phone} href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</ContactChip>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between lg:px-8">
              <span>Copyright 2026 {clinic.name}. All rights reserved.</span>
              <span className="text-white/42">Built for public website, bookings and future clinic modules.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-extrabold uppercase tracking-[0.28em] text-pulse">{title}</h3>
      <div className="mt-5 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="group inline-flex items-center justify-between gap-3 rounded-md border border-transparent py-1.5 text-sm font-semibold text-white/66 transition hover:text-white">
      <span>{children}</span>
      <ArrowUpRight size={14} className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

function ContactChip({ icon: Icon, href, children }) {
  const content = (
    <span className="flex gap-3 rounded-md border border-white/10 bg-white/[.06] p-4 text-sm font-semibold leading-6 text-white/68 transition hover:border-bloom/40 hover:bg-white/[.1] hover:text-white">
      <Icon className="mt-1 shrink-0 text-bloom" size={18} />
      <span>{children}</span>
    </span>
  );

  return href ? <a href={href}>{content}</a> : content;
}
