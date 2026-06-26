import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { contact } from "../data/travelData";

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80"
            alt="Pulau Tidung"
            loading="lazy"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          {/* Badge */}
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg">
            <p className="text-sky-600 font-bold text-lg">Since 2023</p>
            <p className="text-slate-600 text-sm">Trusted Travel Partner</p>
          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Tentang Wisata Tidung Island
          </h2>

          <p className="text-slate-500 mt-6 leading-relaxed">
            Wisata Tidung Island merupakan penyedia layanan wisata profesional
            yang berfokus pada destinasi Kepulauan Seribu seperti Pulau Tidung
            dan Pulau Payung. Kami menghadirkan pengalaman liburan yang aman,
            nyaman, dan berkesan dengan layanan terbaik.
          </p>

          {/* Highlights */}
          <div className="mt-6 space-y-3">
            {[
              "Trip Open & Private",
              "Guide Lokal Berpengalaman",
              "Fasilitas Lengkap",
              "Harga Transparan",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <FaCheckCircle className="text-sky-600" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/62${contact.whatsapp}`}
            target="_blank"
            className="inline-block mt-8 bg-sky-600 hover:bg-sky-700 text-white px-7 py-4 rounded-full font-semibold transition shadow-lg"
          >
            Konsultasi Sekarang
          </a>
        </motion.div>

      </div>
    </section>
  );
}