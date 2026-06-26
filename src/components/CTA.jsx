import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import Section from "./ui/Section";
import PrimaryButton from "./ui/PrimaryButton";

export default function CTA() {
  return (
    <Section className="relative bg-gradient-to-br from-[#063B63] via-sky-600 to-cyan-400">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_35%)]" />
      <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-2 text-sm font-black uppercase tracking-wide text-white backdrop-blur-md">
          <Sparkles size={18} />
          Booking Sekarang
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
          Siap Liburan Bersama Kami?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-sky-50 md:text-lg">
          Wujudkan liburan impianmu ke Pulau Tidung bersama Wisata Tidung
          Island dengan pelayanan terbaik, harga transparan, dan pengalaman
          wisata yang berkesan.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
          <Feature text="Open Trip" />
          <Feature text="Private Trip" />
          <Feature text="Harga Transparan" />
        </div>

        <div className="mt-12 flex justify-center">
          <PrimaryButton
            href="https://wa.me/6285770359378"
            className="bg-green-500 px-9 py-5 text-white shadow-2xl shadow-green-900/25 hover:bg-green-600"
          >
            <MessageCircle size={24} />
            Booking via WhatsApp
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/15 px-5 py-4 text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20">
      <CheckCircle2 size={22} className="text-lime-300" />
      <span className="font-bold">{text}</span>
    </div>
  );
}