import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaUserTie,
  FaCamera,
  FaBoxOpen,
  FaHeadset,
} from "react-icons/fa";

const data = [
  {
    icon: <FaMoneyBillWave />,
    title: "Harga Transparan",
    desc: "Tidak ada biaya tersembunyi, semua jelas dari awal.",
  },
  {
    icon: <FaUserTie />,
    title: "Guide Berpengalaman",
    desc: "Dipandu oleh tim lokal yang profesional dan ramah.",
  },
  {
    icon: <FaCamera />,
    title: "Dokumentasi Gratis",
    desc: "Abadikan momen terbaik selama perjalanan wisata.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Fasilitas Lengkap",
    desc: "Semua kebutuhan trip sudah kami siapkan.",
  },
  {
    icon: <FaHeadset />,
    title: "Support WhatsApp",
    desc: "Kami siap membantu 24 jam melalui WhatsApp.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl">
            Kenapa Memilih Kami?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            Pengalaman wisata terbaik untuk liburan kamu di Kepulauan Seribu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-2xl bg-sky-50 p-5 text-center shadow-sm transition hover:bg-sky-600 hover:shadow-xl lg:p-6"
            >
              <div className="mb-4 flex justify-center text-3xl text-sky-600 transition group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-2 font-bold text-slate-800 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-500 group-hover:text-white/90">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}