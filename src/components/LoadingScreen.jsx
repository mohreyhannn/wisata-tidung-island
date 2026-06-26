import { motion } from "framer-motion";
import logo from "../assets/logo/logo1.png";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 0.7 },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />

      <div className="relative text-center">
        <motion.img
          src={logo}
          alt="Wisata Tidung Island"
          initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-56 md:w-64"
        />

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-6 text-3xl font-black text-slate-900 md:text-4xl"
        >
          Wisata Tidung Island
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-3 text-lg text-slate-500"
        >
          Jelajahi Keindahan, Ciptakan Kenangan.
        </motion.p>

        <div className="mx-auto mt-10 h-2 w-64 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 text-sm font-semibold tracking-[8px] text-sky-600"
        >
          LOADING...
        </motion.p>
      </div>
    </motion.div>
  );
}