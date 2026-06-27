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
    <section id="aktivitas" className="relative overflow-hidden bg-white py-14 md:py-20 lg:py-24">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-sky-100/80 blur-3xl" />
      <div className="absolute -top-24 -right-40 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-sky-100/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-sky-700 md:px-5 md:text-sm">
            Aktivitas Seru
            <Waves size={16} strokeWidth={2.2} className="md:size-[18px]" />
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:mt-6 md:text-6xl lg:text-7xl">
            Aktivitas Wisata
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 md:mt-5 md:text-xl">
            Nikmati berbagai aktivitas seru di Pulau Tidung & Pulau Payung
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-7">
          {activities.slice(0, 4).map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-5 md:gap-5 lg:mt-7 lg:grid-cols-5 lg:gap-7">
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
    <div className="group flex min-h-[210px] flex-col items-center justify-center rounded-[22px] border border-sky-100 bg-white px-4 py-5 text-center shadow-[0_10px_26px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-[0_22px_50px_rgba(14,165,233,0.18)] md:min-h-[260px] md:px-5 md:py-6 lg:min-h-[330px] lg:rounded-[28px] lg:px-7 lg:py-8">
      <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-sky-50 transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-600 md:mb-5 md:h-28 md:w-28 lg:mb-7 lg:h-36 lg:w-36">
        <Icon
          size={38}
          strokeWidth={1.7}
          className="text-sky-600 transition-all duration-300 group-hover:text-white md:size-[54px] lg:size-[66px]"
        />
      </div>

      <h3 className="text-lg font-black text-slate-950 md:text-xl lg:text-2xl">
        {item.title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-slate-500 md:mt-3 md:text-sm lg:mt-4 lg:text-base">
        {item.desc}
      </p>

      <div className="mt-4 h-1 w-9 rounded-full bg-sky-500 transition-all duration-300 group-hover:w-20 md:mt-5 md:w-10 lg:mt-7 lg:w-12" />
    </div>
  );
}