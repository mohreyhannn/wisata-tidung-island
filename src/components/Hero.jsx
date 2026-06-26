import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowDown, FaStar } from "react-icons/fa";
import { brand } from "../data/travelData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-center overflow-hidden bg-slate-900 lg:min-h-screen"
    >
      <div
        className="absolute inset-0 scale-105 animate-[slowZoom_18s_ease-in-out_infinite_alternate] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-sky-900/30" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pt-24 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-28">
        <div className="text-white">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur-md sm:text-sm lg:mb-6"
          >
            <FaStar className="text-yellow-300" />
            {brand.tagline}
          </motion.p>

          <motion.h1
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[40px] font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {brand.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg md:text-xl lg:mt-6"
          >
            {brand.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ y: 35, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:mt-8"
          >
            <a
              href="https://wa.me/6285770359378"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow-xl transition hover:bg-sky-600 lg:px-7 lg:py-4"
            >
              <FaWhatsapp />
              Booking Sekarang
            </a>

            <Link
              to="paket"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20 lg:px-7 lg:py-4"
            >
              Lihat Paket
              <FaArrowDown />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="ml-auto max-w-sm rounded-3xl border border-white/25 bg-white/15 p-8 text-white shadow-2xl backdrop-blur-xl">
            <p className="mb-2 text-sm text-slate-200">Open Trip & Private Trip</p>
            <h3 className="mb-4 text-3xl font-bold">Pulau Tidung & Pulau Payung</h3>
            <p className="leading-relaxed text-slate-200">
              Paket lengkap dengan snorkeling, BBQ, dokumentasi, homestay, dan guide lokal berpengalaman.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <h4 className="text-2xl font-bold">2</h4>
                <p className="text-sm text-slate-200">Destinasi</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm text-slate-200">WA Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/80 md:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="h-10 w-[1px] animate-pulse bg-white/60" />
      </div>
    </section>
  );
}