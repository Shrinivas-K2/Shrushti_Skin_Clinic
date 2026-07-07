import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarPlus, Sparkles } from "lucide-react";

export default function ServiceCard({ service, index = 0 }) {
  const displayNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      style={{ "--motion-delay": `${Math.min(index, 10) * 70}ms` }}
      className="slide-card group relative flex h-full min-h-[520px] overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_22px_70px_rgba(6,17,31,.10)] transition duration-300 hover:-translate-y-1 hover:border-bloom/[.35] hover:shadow-bloom"
    >
      <div className="absolute inset-0 bg-grid bg-[length:28px_28px] opacity-[0.045]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bloom via-pulse to-mint" />
      <div className="relative flex w-full flex-col">
        <div className="relative h-72 overflow-hidden bg-ink">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/[.88] via-ink/[.18] to-transparent" />
          <div className="absolute inset-0 border border-white/15" />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/20 bg-white/[.92] px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-bloom shadow-sm backdrop-blur">
            <Sparkles size={14} />
            {service.category}
          </div>
          <div className="absolute bottom-4 left-4 rounded-md border border-white/[.16] bg-white/[.12] px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
            Service {displayNumber}
          </div>
          <div className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-md border border-white/20 bg-white/[.16] text-white backdrop-blur transition group-hover:bg-bloom">
            <ArrowRight size={19} />
          </div>
        </div>
        <div className="relative flex flex-1 flex-col p-6">
          <div className="mb-4 h-px w-full bg-gradient-to-r from-bloom/50 via-pulse/40 to-transparent" />
          <h3 className="text-[1.35rem] font-extrabold leading-tight tracking-[-0.01em] text-ink">
            {service.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-7 text-ink/[.64]">{service.summary}</p>
          <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-3 border-t border-ink/[.08] pt-5">
            <Link
              href={`/services#${service.slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-ink px-4 text-sm font-bold text-white transition hover:bg-bloom"
            >
              Explore Treatment
            </Link>
            <Link
              href="/book-appointment"
              aria-label={`Book appointment for ${service.title}`}
              className="grid h-12 w-12 place-items-center rounded-md border border-ink/10 bg-serum text-bloom transition hover:border-bloom hover:bg-bloom hover:text-white"
            >
              <CalendarPlus size={19} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
