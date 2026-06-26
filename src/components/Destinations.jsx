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
    <section id="destinasi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-black uppercase tracking-wide text-sky-700">
            Destinasi
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-950">
            Destinasi Wisata
          </h2>

          <p className="mt-4 text-slate-500 md:text-lg">
            Jelajahi destinasi terbaik yang siap memberikan pengalaman liburan tak terlupakan.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {destinations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-500">
                  {item.desc}
                </p>

                <Link
                  to="paket"
                  smooth
                  duration={500}
                  offset={-90}
                  className="mt-7 inline-flex cursor-pointer rounded-full bg-sky-600 px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700"
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