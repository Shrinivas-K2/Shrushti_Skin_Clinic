import Image from "next/image";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { gallery } from "@/data/site";

export default function Gallery() {
  return (
    <Layout title="Gallery | Shrushti Skin Clinic">
      <section className="bg-white px-4 py-20 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="Clinic visuals and service photos from the original website" />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {gallery.map((src, index) => (
            <div key={src} className="relative h-80 overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(6,17,31,.1)]">
              <Image src={src} alt={`Shrushti Skin Clinic gallery ${index + 1}`} fill className="object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
