import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { clinic, services } from "@/data/site";

export default function BookAppointment() {
  return (
    <Layout title="Book Appointment | Shrushti Skin Clinic">
      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <SectionHeader eyebrow="Appointment" title="Select your concern and request a consultation" copy="This frontend is ready for the future Razorpay and MongoDB booking API described in the module document." />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-ink p-7 text-white shadow-glow">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-pulse">Booking steps</p>
            {["Select service and doctor", "Choose date and slot", "Enter patient details", "Pay consult fee and confirm"].map((step, index) => (
              <div key={step} className="mt-6 flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 font-bold text-pulse">{index + 1}</span>
                <span className="pt-2 font-semibold">{step}</span>
              </div>
            ))}
          </div>
          <form className="rounded-[2rem] border border-ink/6 bg-white p-6 shadow-[0_20px_70px_rgba(6,17,31,.08)]">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Patient name" />
              <input className="field" placeholder="Phone number" />
              <select className="field">
                {services.map((service) => <option key={service.slug}>{service.title}</option>)}
              </select>
              <select className="field">
                <option>{clinic.doctor}</option>
              </select>
              <input className="field" type="date" />
              <select className="field">
                <option>10:00 AM</option>
                <option>11:30 AM</option>
                <option>04:30 PM</option>
                <option>06:00 PM</option>
              </select>
              <textarea className="field md:col-span-2" rows="5" placeholder="Describe your concern" />
            </div>
            <a href={`mailto:${clinic.email}?subject=Appointment Request`} className="mt-5 inline-flex rounded-full bg-bloom px-6 py-4 font-bold text-white shadow-bloom hover:bg-ink">
              Request Appointment
            </a>
          </form>
        </div>
      </section>
    </Layout>
  );
}
