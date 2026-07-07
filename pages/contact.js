import { Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { clinic } from "@/data/site";

export default function Contact() {
  return (
    <Layout title="Contact | Shrushti Skin Clinic">
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeader eyebrow="Contact" title="Get in touch with Shrushti Skin Clinic" copy="Call, email or visit the clinic in Shivamogga or Bhadravathi." />
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="grid gap-4">
            {clinic.locations.map((location) => (
              <Info key={location.city} icon={MapPin} title={`${location.city} Address`} value={location.address} />
            ))}
            <Info icon={Mail} title="Email" value={clinic.email} href={`mailto:${clinic.email}`} />
            {clinic.phones.map((phone) => <Info key={phone} icon={Phone} title="Phone" value={phone} href={`tel:${phone.replace(/\s/g, "")}`} />)}
          </div>
          <form className="rounded-[2rem] border border-ink/6 bg-white p-6 shadow-[0_20px_70px_rgba(6,17,31,.08)]">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Name" />
              <input className="field" placeholder="Phone" />
              <input className="field" placeholder="Email" />
              <input className="field" type="date" />
              <select className="field">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
              <input className="field" placeholder="Service needed" />
              <textarea className="field md:col-span-2" rows="5" placeholder="Tell us your concern" />
            </div>
            <a href={`mailto:${clinic.email}?subject=New Appointment Enquiry`} className="mt-5 inline-flex rounded-full bg-bloom px-6 py-4 font-bold text-white shadow-bloom hover:bg-ink">
              Submit Now
            </a>
          </form>
        </div>
      </section>
      <section className="bg-white px-4 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {clinic.locations.map((location) => (
            <div key={location.city} className="overflow-hidden rounded-lg border border-ink/6 bg-serum shadow-[0_20px_70px_rgba(6,17,31,.08)]">
              <div className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-bloom">{location.label}</p>
                <p className="mt-2 font-semibold leading-7 text-ink/70">{location.address}</p>
              </div>
              <iframe
                title={`${location.label} Google map`}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Info({ icon: Icon, title, value, href }) {
  const inner = (
    <div className="rounded-[2rem] border border-ink/6 bg-white p-6 shadow-[0_18px_50px_rgba(6,17,31,.06)]">
      <Icon className="text-bloom" />
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-ink/42">{title}</p>
      <p className="mt-2 font-semibold leading-7">{value}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
