import { motion } from "framer-motion";
import { FaMoneyBillWave, FaUserTie, FaCamera, FaBoxOpen, FaHeadset } from "react-icons/fa";

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
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-slate-500 mt-4">
            Pengalaman wisata terbaik untuk liburan kamu di Kepulauan Seribu
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-sky-50 hover:bg-sky-600 transition rounded-2xl p-6 text-center shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div className="text-3xl text-sky-600 group-hover:text-white flex justify-center mb-4 transition">
                {item.icon}
              </div>

              <h3 className="font-bold text-slate-800 group-hover:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 group-hover:text-white/90">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}