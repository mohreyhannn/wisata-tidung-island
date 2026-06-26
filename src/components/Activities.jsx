import {
  Waves,
  Sailboat,
  Ship,
  Tent,
  Drone,
  Flame,
  Sunset,
  Bike,
  Origami,
} from "lucide-react";

const activities = [
  {
    title: "Snorkeling",
    desc: "Menjelajahi keindahan bawah laut yang memukau.",
    icon: Waves,
  },
  {
    title: "Banana Boat",
    desc: "Wahana seru bersama teman atau keluarga.",
    icon: Sailboat,
  },
  {
    title: "Jetski",
    desc: "Rasakan sensasi kecepatan di atas laut.",
    icon: Ship,
  },
  {
    title: "Camping",
    desc: "Berkemah di tepi pantai dengan suasana alam yang indah.",
    icon: Tent,
  },
  {
    title: "Drone View",
    desc: "Abadikan momen terbaik dari udara.",
    icon: Drone,
  },
  {
    title: "BBQ",
    desc: "Nikmati BBQ bersama di tepi pantai.",
    icon: Flame,
  },
  {
    title: "Sunset View",
    desc: "Nikmati keindahan sunset yang memukau.",
    icon: Sunset,
  },
  {
    title: "Sepeda Santai",
    desc: "Bersepeda mengelilingi pulau yang indah.",
    icon: Bike,
  },
  {
    title: "Kano",
    desc: "Mendayung kano menikmati ketenangan laut.",
    icon: Origami,
  },
];

export default function Activities() {
  return (
    <section
      id="aktivitas"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
      <div className="absolute -top-24 -right-40 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-sky-100/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-sky-700">
            Aktivitas Seru
            <Waves size={18} strokeWidth={2.2} />
          </span>

          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
            Aktivitas Wisata
          </h2>

          <p className="mt-5 text-base text-slate-500 md:text-xl">
            Nikmati berbagai aktivitas seru di Pulau Tidung & Pulau Payung
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {activities.slice(0, 4).map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {activities.slice(4).map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ item }) {
  const Icon = item.icon;

  return (
    <div className="group flex min-h-[330px] flex-col items-center justify-center rounded-[28px] border border-sky-100 bg-white px-7 py-8 text-center shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_22px_50px_rgba(14,165,233,0.18)]">
      <div className="mb-7 flex h-36 w-36 items-center justify-center rounded-full bg-sky-50 transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-600">
        <Icon
          size={66}
          strokeWidth={1.7}
          className="text-sky-600 transition-all duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="text-2xl font-black text-slate-950">
        {item.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-slate-500">
        {item.desc}
      </p>

      <div className="mt-7 h-1 w-12 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20" />
    </div>
  );
}