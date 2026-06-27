import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Info,
  MapPin,
  Palmtree,
} from "lucide-react";
import { Link } from "react-scroll";
import Tidung2 from "../assets/images/Tidung2.jpg";
import payung1 from "../assets/images/payung1.jpg";

const aboutSlides = [
  {
    title: "Pulau Tidung",
    location: "Kepulauan Seribu",
    desc: "Pulau Tidung merupakan destinasi favorit di Kepulauan Seribu yang terkenal dengan Jembatan Cinta, pantai berpasir putih, air laut jernih, serta berbagai aktivitas seru. Cocok untuk liburan bersama keluarga, teman, maupun pasangan.",
    image:
      Tidung2,
    points: [
      "Keindahan alam yang memukau",
      "Fasilitas lengkap dan nyaman",
      "Aktivitas seru dan beragam",
      "Akses mudah dari Jakarta",
    ],
  },
  {
    title: "Pulau Payung",
    location: "Kepulauan Seribu",
    desc: "Pulau Payung dikenal dengan suasana yang lebih tenang, air laut jernih kebiruan, dan keindahan alam yang masih alami. Cocok untuk healing, camping, snorkeling, menikmati sunset, dan liburan santai jauh dari keramaian.",
    image:
      payung1,
    points: [
      "Suasana tenang dan alami",
      "Spot sunset terbaik",
      "Snorkeling dan wisata bahari",
      "Tempat healing terbaik",
    ],
  },
];

export default function About() {
  const [active, setActive] = useState(0);
  const current = aboutSlides[active];

  const nextSlide = () => {
    setActive((prev) => (prev === aboutSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1));
  };

  return (
    <section
      id="tentang"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-16 md:py-20"
    >
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-wide text-sky-700 md:text-sm">
            Tentang Kami
            <span>〰️</span>
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            Lebih Dekat dengan Keindahan Pulau Tidung & Pulau Payung
          </h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl transition hover:-translate-x-1 hover:bg-sky-600 hover:text-white md:flex lg:-left-8"
            aria-label="Slide sebelumnya"
          >
            <ArrowLeft size={28} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl transition hover:translate-x-1 hover:bg-sky-600 hover:text-white md:flex lg:-right-8"
            aria-label="Slide berikutnya"
          >
            <ArrowRight size={28} />
          </button>

          <div className="overflow-hidden rounded-[32px] bg-white p-5 shadow-2xl shadow-sky-100/70 md:p-8 lg:rounded-[36px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  active === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-600 md:h-20 md:w-20">
                    <Palmtree size={36} />
                  </div>

                  <h3 className="text-3xl font-black text-slate-950 md:text-5xl">
                    {current.title}
                  </h3>

                  <div className="mt-3 h-1 w-16 rounded-full bg-sky-500" />

                  <p className="mt-6 text-sm leading-relaxed text-slate-500 md:text-base">
                    {current.desc}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {current.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-600 md:text-base"
                      >
                        <CheckCircle
                          size={19}
                          className="shrink-0 fill-sky-600 text-white"
                        />
                        {point}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="paket"
                    smooth
                    duration={500}
                    offset={-90}
                    className="mt-7 inline-flex cursor-pointer items-center gap-3 rounded-full bg-sky-600 px-6 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700"
                  >
                    Selengkapnya
                    <ArrowRight size={20} />
                  </Link>
                </div>

                <div className="relative">
                  <img
                    src={current.image}
                    alt={current.title}
                    loading="lazy"
                    className="h-[260px] w-full rounded-[28px] object-cover shadow-xl sm:h-[360px] lg:h-[500px]"
                  />

                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white">
                      <MapPin size={20} />
                    </div>

                    <div>
                      <p className="font-black text-slate-900">
                        {current.title}
                      </p>
                      <p className="text-sm text-slate-500">
                        {current.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {aboutSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all ${
                  active === index ? "w-8 bg-sky-600" : "w-3 bg-sky-200"
                }`}
                aria-label={`Lihat ${item.title}`}
              />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center">
            <div className="flex items-center gap-3 rounded-2xl bg-sky-50 px-5 py-4 text-sm font-semibold text-slate-600">
              <Info size={20} className="shrink-0 text-sky-600" />
              Geser atau tekan tombol kiri/kanan untuk melihat informasi pulau
              lainnya.
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg"
            >
              <ArrowLeft size={24} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-lg"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}