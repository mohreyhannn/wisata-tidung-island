import { motion } from "framer-motion";
import { Link } from "react-scroll";

const destinations = [
  {
    title: "Pulau Tidung",
    desc: "Destinasi favorit di Kepulauan Seribu dengan Jembatan Cinta, pantai indah, snorkeling, banana boat, dan suasana pulau yang cocok untuk liburan keluarga maupun teman.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pulau Payung",
    desc: "Pulau yang masih alami dengan air laut jernih dan suasana tenang. Cocok untuk healing, camping, snorkeling, menikmati sunset, dan liburan santai jauh dari keramaian.",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Destinations() {
  return (
    <section id="destinasi" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-sky-700 md:px-5 md:text-sm">
            Destinasi
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl md:text-6xl lg:mt-6">
            Destinasi Wisata
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
            Jelajahi destinasi terbaik yang siap memberikan pengalaman liburan tak terlupakan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {destinations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[26px] border border-sky-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:rounded-[32px]"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-52 w-full object-cover sm:h-64 lg:h-72"
              />

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-black text-slate-950 lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base lg:mt-4">
                  {item.desc}
                </p>

                <Link
                  to="paket"
                  smooth
                  duration={500}
                  offset={-90}
                  className="mt-6 inline-flex cursor-pointer rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700 lg:mt-7 lg:px-6"
                >
                  Lihat Paket
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}