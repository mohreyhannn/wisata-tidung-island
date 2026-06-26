import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowDown, FaStar } from "react-icons/fa";
import { brand } from "../data/travelData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-sky-900/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-white">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm mb-6"
          >
            <FaStar className="text-yellow-300" />
            {brand.tagline}
          </motion.p>

          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            {brand.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed"
          >
            {brand.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/6285770359378"
              target="_blank"
              className="inline-flex justify-center items-center gap-3 bg-sky-500 text-white px-7 py-4 rounded-full font-semibold hover:bg-sky-600 transition shadow-xl"
            >
              <FaWhatsapp />
              Booking Sekarang
            </a>

            <Link
              to="paket"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex justify-center items-center gap-3 bg-white/10 backdrop-blur-md border border-white/25 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition cursor-pointer"
            >
              Lihat Paket
              <FaArrowDown />
            </Link>
          </motion.div>
        </div>

        {/* Floating Card */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-8 text-white shadow-2xl max-w-sm ml-auto">
            <p className="text-sm text-slate-200 mb-2">Open Trip & Private Trip</p>
            <h3 className="text-3xl font-bold mb-4">Pulau Tidung & Pulau Payung</h3>
            <p className="text-slate-200 leading-relaxed">
              Paket lengkap dengan snorkeling, BBQ, dokumentasi, homestay, dan guide lokal berpengalaman.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 rounded-2xl p-4">
                <h4 className="text-2xl font-bold">2</h4>
                <p className="text-sm text-slate-200">Destinasi</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm text-slate-200">WA Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/80">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-[1px] h-10 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}