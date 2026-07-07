import Image from "next/image";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { clinic, features } from "@/data/site";

export default function About() {
  return (
    <Layout title="About | Shrushti Skin Clinic">
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="self-center">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-bloom">About us</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-tight">Ready to help improve your treatment journey</h1>
          <p className="mt-6 text-lg leading-8 text-ink/65">
            At {clinic.name}, everyone deserves to feel confident in their skin. Led by {clinic.doctor} ({clinic.qualification}), the clinic blends advanced treatments with compassionate, personalized care.
          </p>
        </div>
        <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] shadow-glow">
          <Image src="/assets/clinic/about.jpg" alt="About Shrushti Skin Clinic" fill className="object-cover" />
        </div>
      </section>
      <section className="bg-white px-4 py-16 lg:px-8">
        <SectionHeader eyebrow="Strengths" title="Care built around trust, clarity and visible improvement" />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <div key={feature} className="rounded-3xl border border-ink/6 bg-serum p-6 font-semibold text-ink/72">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
