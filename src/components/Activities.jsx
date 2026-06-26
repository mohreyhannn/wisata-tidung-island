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
  { title: "Snorkeling", desc: "Menjelajahi keindahan bawah laut yang memukau.", icon: Waves },
  { title: "Banana Boat", desc: "Wahana seru bersama teman atau keluarga.", icon: Sailboat },
  { title: "Jetski", desc: "Rasakan sensasi kecepatan di atas laut.", icon: Ship },
  { title: "Camping", desc: "Berkemah di tepi pantai dengan suasana alam yang indah.", icon: Tent },
  { title: "Drone View", desc: "Abadikan momen terbaik dari udara.", icon: Drone },
  { title: "BBQ", desc: "Nikmati BBQ bersama di tepi pantai.", icon: Flame },
  { title: "Sunset View", desc: "Nikmati keindahan sunset yang memukau.", icon: Sunset },
  { title: "Sepeda Santai", desc: "Bersepeda mengelilingi pulau yang indah.", icon: Bike },
  { title: "Kano", desc: "Mendayung kano menikmati ketenangan laut.", icon: Origami },
];

export default function Activities() {
  return (
    <section id="aktivitas" className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
      <div className="absolute -top-24 -right-40 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-sky-100/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-sky-700 md:px-5 md:text-sm">
            Aktivitas Seru
            <Waves size={16} strokeWidth={2.2} className="md:size-[18px]" />
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:mt-6 lg:text-7xl">
            Aktivitas Wisata
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500 md:mt-5 md:text-xl">
            Nikmati berbagai aktivitas seru di Pulau Tidung & Pulau Payung
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {activities.slice(0, 4).map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-5 lg:gap-7">
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
    <div className="group flex min-h-[260px] flex-col items-center justify-center rounded-[24px] border border-sky-100 bg-white px-5 py-6 text-center shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_22px_50px_rgba(14,165,233,0.18)] md:min-h-[300px] md:px-6 md:py-7 lg:min-h-[330px] lg:rounded-[28px] lg:px-7 lg:py-8">
      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-sky-50 transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-600 md:h-32 md:w-32 lg:mb-7 lg:h-36 lg:w-36">
        <Icon
          size={48}
          strokeWidth={1.7}
          className="text-sky-600 transition-all duration-300 group-hover:text-white md:size-[58px] lg:size-[66px]"
        />
      </div>

      <h3 className="text-xl font-black text-slate-950 md:text-2xl">{item.title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500 md:mt-4 md:text-base">
        {item.desc}
      </p>

      <div className="mt-5 h-1 w-10 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20 md:mt-7 md:w-12" />
    </div>
  );
}