import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, CheckCircle2, ClipboardCheck, Sparkles, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export default function Services() {
  return (
    <Layout title="Services | Shrushti Skin Clinic">
      <section className="relative overflow-hidden bg-ink px-4 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,0,156,.34),transparent_34%),radial-gradient(circle_at_86%_12%,rgba(17,217,255,.25),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <SectionHeader
            light
            eyebrow="Services"
            title="Dermatology, laser and hair care planned around your skin story"
            copy="Explore treatment options for acne, pigmentation, hair fall, paediatric dermatology, laser care, hair restoration and minor skin procedures."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["08", "Treatment areas"],
              ["02", "Clinic locations"],
              ["15+", "Years of care"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur">
                <p className="text-3xl font-extrabold text-pulse">{value}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-white/64">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff,rgba(255,255,255,.9),#f8fbff)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-bloom">Treatment catalogue</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
                Choose the concern, then see how care is structured
              </h2>
            </div>
            <Link
              href="/book-appointment"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-extrabold text-white shadow-glow transition hover:bg-bloom"
            >
              Book Consultation <CalendarDays size={18} />
            </Link>
          </div>
          <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-bloom">Detailed care plans</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Every service has a focused diagnosis, clear plan and practical follow-up
            </h2>
          </div>

          <div className="mt-12 grid gap-8">
            {services.map((service, index) => (
              <article
                id={service.slug}
                key={service.slug}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-ink/6 bg-serum shadow-[0_20px_70px_rgba(6,17,31,.08)]"
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[320px] bg-ink">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/10 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-md border border-white/18 bg-white/90 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-bloom backdrop-blur">
                      {String(index + 1).padStart(2, "0")} / {service.category}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center gap-3 text-bloom">
                      <span className="grid h-11 w-11 place-items-center rounded-md bg-bloom/10">
                        <Stethoscope size={21} />
                      </span>
                      <p className="text-xs font-extrabold uppercase tracking-[0.24em]">{service.category}</p>
                    </div>
                    <h3 className="mt-5 text-3xl font-extrabold leading-tight text-ink">{service.title}</h3>
                    <p className="mt-4 text-base leading-8 text-ink/66">{service.details}</p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.idealFor.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-md border border-ink/8 bg-white px-4 py-3">
                          <CheckCircle2 className="shrink-0 text-mint" size={18} />
                          <span className="text-sm font-bold text-ink/76">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      <InfoPanel icon={ClipboardCheck} title="Care approach" copy={service.approach} />
                      <InfoPanel icon={Sparkles} title="Expected focus" copy={service.result} />
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/book-appointment"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-bloom px-5 text-sm font-extrabold text-white shadow-bloom transition hover:bg-ink"
                      >
                        Book This Treatment <CalendarDays size={18} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-ink/10 bg-white px-5 text-sm font-extrabold text-ink transition hover:border-bloom hover:text-bloom"
                      >
                        Ask Clinic <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function InfoPanel({ icon: Icon, title, copy }) {
  return (
    <div className="border-l-2 border-pulse/55 bg-white/55 py-1 pl-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-pulse/10 text-pulse">
          <Icon size={19} />
        </span>
        <h4 className="font-extrabold text-ink">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-7 text-ink/62">{copy}</p>
    </div>
  );
}
