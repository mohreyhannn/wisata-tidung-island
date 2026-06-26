import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { contact } from "../data/travelData";

export default function About() {
  return (
    <section id="tentang" className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12">
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
            className="h-[280px] w-full rounded-3xl object-cover shadow-2xl sm:h-[360px] lg:h-auto"
          />

          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md lg:bottom-5 lg:left-5 lg:px-5">
            <p className="text-base font-bold text-sky-600 lg:text-lg">
              Since 2023
            </p>
            <p className="text-xs text-slate-600 lg:text-sm">
              Trusted Travel Partner
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl md:text-5xl">
            Tentang Wisata Tidung Island
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-500 lg:mt-6">
            Wisata Tidung Island merupakan penyedia layanan wisata profesional
            yang berfokus pada destinasi Kepulauan Seribu seperti Pulau Tidung
            dan Pulau Payung. Kami menghadirkan pengalaman liburan yang aman,
            nyaman, dan berkesan dengan layanan terbaik.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Trip Open & Private",
              "Guide Lokal Berpengalaman",
              "Fasilitas Lengkap",
              "Harga Transparan",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <FaCheckCircle className="shrink-0 text-sky-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/62${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full bg-sky-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-sky-700 lg:mt-8 lg:px-7 lg:py-4"
          >
            Konsultasi Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}