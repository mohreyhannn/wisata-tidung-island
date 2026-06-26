export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}