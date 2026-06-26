export default function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
}) {
  const baseClass =
    "inline-flex items-center justify-center gap-3 rounded-full bg-sky-600 px-7 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-2xl active:scale-95";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {children}
    </button>
  );
}