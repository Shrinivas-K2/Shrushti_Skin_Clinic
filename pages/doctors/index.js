import Image from "next/image";
import Layout from "@/components/Layout";
import { clinic } from "@/data/site";

export default function Doctors() {
  return (
    <Layout title="Doctor | Shrushti Skin Clinic">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-ink shadow-bloom">
          <Image src="/assets/hero/carousel2.png" alt={clinic.doctor} fill className="object-cover opacity-85" />
        </div>
        <div className="self-center">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-bloom">Dermatologist</p>
          <h1 className="mt-3 font-display text-5xl font-bold">{clinic.doctor}</h1>
          <p className="mt-2 text-xl font-semibold text-ink/56">{clinic.qualification}</p>
          <p className="mt-6 text-lg leading-8 text-ink/64">
            Specialist care for clinical dermatology, hair disorders, laser treatments and cosmetic skin procedures. The clinic emphasizes personalized plans, comfort and clear communication.
          </p>
          <div className="mt-8 rounded-[2rem] border border-ink/6 bg-white p-6 shadow-[0_20px_60px_rgba(6,17,31,.08)]">
            <h2 className="text-2xl font-bold">Available care areas</h2>
            <p className="mt-3 text-ink/62">Acne, pigmentation, eczema, psoriasis, vitiligo, alopecia, laser hair removal, peels, Botox, fillers and dermato surgery.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
