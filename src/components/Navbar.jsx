import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../assets/logo/logo1.png";

const menus = [
  "home",
  "tentang",
  "destinasi",
  "aktivitas",
  "paket",
  "faq",
  "kontak",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scroll
            ? "bg-white/90 shadow-lg shadow-sky-100/50 backdrop-blur-md"
            : "bg-black/10 backdrop-blur-[2px]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8 ${
            scroll ? "h-20" : "h-24"
          }`}
        >
          <Link
            to="home"
            smooth
            duration={500}
            offset={-80}
            className="cursor-pointer"
            onClick={closeMenu}
          >
            <img
              src={logo}
              alt="Wisata Tidung Island"
              className={`transition-all duration-300 ${
                scroll ? "h-14" : "h-20"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {menus.map((menu) => (
              <Link
                key={menu}
                to={menu}
                smooth
                duration={500}
                offset={-90}
                spy
                activeClass="navbar-active"
                className={`relative cursor-pointer text-[16px] font-semibold capitalize tracking-wide transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scroll
                    ? "text-slate-700 hover:text-sky-600"
                    : "text-white drop-shadow-md hover:text-sky-200"
                }`}
              >
                {menu}
              </Link>
            ))}

            <a
              href="https://wa.me/6285770359378"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-600 px-7 py-3.5 font-bold text-white shadow-xl shadow-sky-900/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-sky-700"
            >
              Booking Sekarang
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={`lg:hidden transition ${
              scroll ? "text-slate-800" : "text-white drop-shadow-md"
            }`}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX size={34} /> : <HiOutlineMenuAlt3 size={34} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/35 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              className="fixed right-4 top-24 z-[70] w-[86%] max-w-sm overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-sm font-bold uppercase tracking-wide text-sky-600">
                  Menu Navigasi
                </p>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-full bg-slate-100 p-2 text-slate-700"
                  aria-label="Close menu"
                >
                  <HiOutlineX size={22} />
                </button>
              </div>

              <div className="px-3 pb-3">
                {menus.map((menu) => (
                  <Link
                    key={menu}
                    to={menu}
                    smooth
                    offset={-80}
                    duration={500}
                    onClick={closeMenu}
                    className="block cursor-pointer rounded-2xl px-4 py-3 capitalize font-semibold text-slate-700 transition hover:bg-sky-50 hover:text-sky-600"
                  >
                    {menu}
                  </Link>
                ))}

                <a
                  href="https://wa.me/6285770359378"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-2xl bg-sky-600 py-4 text-center font-bold text-white transition hover:bg-sky-700"
                >
                  Booking Sekarang
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}