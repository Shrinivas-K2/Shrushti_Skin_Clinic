import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export default function Services() {
  return (
    <Layout title="Services | Shrushti Skin Clinic">
      <section className="bg-ink px-4 py-24 text-white lg:px-8">
        <SectionHeader light eyebrow="Services" title="Original clinic services with locally stored treatment photos" copy="Acne, pigmentation, hair fall, laser care, paediatric dermatology, hair transplantation and dermato surgery." />
      </section>
      <section className="relative overflow-hidden px-4 py-16 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f8fbff,rgba(255,255,255,.86),#f8fbff)]" />
        <div className="relative mx-auto grid max-w-7xl items-stretch gap-7 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 pb-20 lg:px-8">
        <div className="grid gap-5">
          {services.map((service) => (
            <article id={service.slug} key={service.slug} className="rounded-[2rem] border border-ink/6 bg-white p-7 shadow-[0_20px_60px_rgba(6,17,31,.07)]">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-bloom">{service.category}</p>
              <h2 className="mt-2 text-2xl font-bold">{service.title}</h2>
              <p className="mt-3 text-ink/64">{service.details}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
