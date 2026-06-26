import { ArrowUp, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/logo/logo1.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <img
              src={logo}
              alt="Wisata Tidung Island"
              loading="lazy"
              className="mb-4 h-14 lg:mb-5 lg:h-16"
            />

            <h3 className="text-xl font-black lg:text-2xl">
              Wisata Tidung Island
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
              Jelajahi Keindahan, Ciptakan Kenangan. Partner liburan terbaik
              untuk Pulau Tidung dan Pulau Payung.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-black lg:mb-5">Menu</h4>

            <div className="space-y-2 text-slate-400 lg:space-y-3">
              {["home", "tentang", "destinasi", "aktivitas", "paket", "faq", "kontak"].map(
                (menu) => (
                  <Link
                    key={menu}
                    to={menu}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block cursor-pointer capitalize transition hover:text-sky-400"
                  >
                    {menu}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-black lg:mb-5">Kontak</h4>

            <div className="space-y-4 text-sm text-slate-400 md:text-base">
              <a
                href="https://wa.me/6285770359378"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 transition hover:text-sky-400"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span>085770359378</span>
              </a>

              <a
                href="mailto:faqihabdi05@gmail.com"
                className="flex gap-3 transition hover:text-sky-400"
              >
                <Mail size={20} className="shrink-0" />
                <span>faqihabdi05@gmail.com</span>
              </a>

              <div className="flex gap-3">
                <MapPin size={20} className="shrink-0" />
                <span>Pulau Tidung, Kepulauan Seribu Selatan, DKI Jakarta.</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-black lg:mb-5">Booking</h4>

            <p className="text-sm leading-relaxed text-slate-400 md:text-base">
              Masih bingung memilih paket? Hubungi admin untuk konsultasi gratis.
            </p>

            <a
              href="https://wa.me/6285770359378"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-sky-600 px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-sky-700 lg:mt-6 lg:px-6"
            >
              <MessageCircle size={20} />
              Chat Admin
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:text-left lg:mt-14 lg:pt-8">
          <p>© 2025 Wisata Tidung Island. All rights reserved.</p>

          <Link
            to="home"
            smooth
            duration={500}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-sky-600 hover:text-white"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}