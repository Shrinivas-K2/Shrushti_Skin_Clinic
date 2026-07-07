import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle2, ChevronRight, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { clinic, features, heroSlides, services, testimonials } from "@/data/site";

export default function Home() {
  const [primary] = heroSlides;
  return (
    <Layout title="Shrushti Skin Clinic | Dermatology, Hair and Aesthetic Care">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink">
        <Image src={primary.image} alt={primary.title} fill priority className="object-cover opacity-72" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,156,.45),transparent_35%),linear-gradient(90deg,rgba(6,17,31,.92),rgba(6,17,31,.46),rgba(6,17,31,.78))]" />
        <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-20" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.28em] text-pulse backdrop-blur">
              {primary.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] md:text-7xl">
              {clinic.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-white/78">{clinic.tagline}. {primary.copy}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book-appointment" className="inline-flex items-center gap-2 rounded-full bg-bloom px-6 py-4 font-bold text-white shadow-bloom hover:bg-white hover:text-ink">
                Book Appointment <CalendarDays size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-ink">
                View Services <ChevronRight size={18} />
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {["15+ years", "Skin + hair", "Laser care"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-4 shadow-glow backdrop-blur-xl">
              <Image src="/assets/hero/carousel3.png" alt="Aesthetic care at Shrushti Skin Clinic" width={760} height={920} className="rounded-[2rem] object-cover" />
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-bloom">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-bloom">Consultant</p>
                <p className="mt-1 text-xl font-extrabold">{clinic.doctor}</p>
                <p className="text-sm text-ink/56">{clinic.qualification}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader eyebrow="What we do" title="Expert skin and hair care designed to restore your natural glow" copy="Original service photos from the existing clinic website are stored locally and used throughout the experience." />
        <div className="grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(17,217,255,.18),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(255,0,156,.14),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.2rem] shadow-glow">
            <Image src="/assets/clinic/about.jpg" alt="Shrushti Skin Clinic interior and care" fill className="object-cover" />
          </div>
          <div className="self-center">
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-bloom">Why choose us</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Dermatology with clinical precision and warm patient care</h2>
            <p className="mt-5 text-lg leading-8 text-ink/64">
              Led by {clinic.doctor}, Shrushti Skin Clinic combines medical dermatology, cosmetic procedures and hair treatments under one roof.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-2xl border border-ink/6 bg-serum p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-bloom" size={20} />
                  <span className="font-semibold text-ink/78">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 text-white lg:px-8">
        <SectionHeader light eyebrow="Treatment spectrum" title="Medical, laser and cosmetic care in one futuristic clinic flow" />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Skin and hair treatments", "Acne, pigmentation, psoriasis, hair loss and dandruff plans.", Stethoscope],
            ["Laser and cosmetic procedures", "Laser hair removal, polishing, rejuvenation, peels and toning.", Sparkles],
            ["Safe procedural care", "Mole, cyst, scar and selected vitiligo surgery support.", ShieldCheck],
          ].map(([title, copy, Icon]) => (
            <div key={title} className="rounded-[2rem] border border-white/12 bg-white/8 p-8 backdrop-blur">
              <Icon className="text-pulse" size={34} />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-white/62">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="Patient stories from the old site, brought into the new experience" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[2rem] border border-ink/6 bg-white p-7 shadow-[0_20px_60px_rgba(6,17,31,.08)]">
              <div className="text-2xl text-bloom">★★★★★</div>
              <p className="mt-4 leading-7 text-ink/66">"{item.quote}"</p>
              <footer className="mt-5 font-bold">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </Layout>
  );
}
