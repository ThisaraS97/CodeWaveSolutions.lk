const items = [
  'Odoo ERP Partner',
  'Nexus Retail POS',
  'E- ඉස්කෝලේ LMS',
  'Retail & Inventory',
  'School Management',
  'Multi-Branch Ready',
  'Offline POS',
  'Sri Lanka Support',
]

export default function TrustMarquee() {
  const track = [...items, ...items]

  return (
    <section className="marquee-section border-y border-slate-200/80 bg-white/60 py-4 backdrop-blur-xl" aria-hidden="true">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10">
          {track.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item flex shrink-0 items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              {item}
              <span className="h-1 w-1 rounded-full bg-violet-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
