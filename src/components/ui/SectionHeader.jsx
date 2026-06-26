export default function SectionHeader({ badge, title, desc, dark = false }) {
  return (
    <div className="mb-14 text-center">
      {badge && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-black uppercase tracking-wide ${
            dark
              ? "bg-white/20 text-white"
              : "bg-sky-100 text-sky-700"
          }`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`mt-6 text-4xl font-black tracking-tight md:text-6xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>

      {desc && (
        <p
          className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-sky-100" : "text-slate-500"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}