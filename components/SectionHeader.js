export default function SectionHeader({ eyebrow, title, copy, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.32em] ${light ? "text-pulse" : "text-bloom"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl font-bold leading-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-4 text-lg ${light ? "text-white/68" : "text-ink/62"}`}>{copy}</p>}
    </div>
  );
}
