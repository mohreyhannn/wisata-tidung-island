import { MapPin, Navigation, Mail, Clock, Compass } from "lucide-react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

export default function Location() {
  return (
    <Section
      id="kontak"
      className="bg-gradient-to-b from-white via-sky-50/40 to-white"
    >
      <SectionHeader
        badge="Lokasi Kami"
        title="Temukan Kami"
        desc="Pulau Tidung, Kepulauan Seribu Selatan, DKI Jakarta"
      />

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="relative overflow-hidden rounded-[28px] border border-sky-100 bg-white p-6 shadow-xl lg:rounded-[32px] lg:p-8">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-100 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-600 to-cyan-500 text-white shadow-lg lg:mb-6 lg:h-16 lg:w-16">
                <MapPin size={28} />
              </div>

              <h3 className="text-2xl font-black text-slate-950 lg:text-3xl">
                Wisata Tidung Island
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
                Jl. Pantai Selatan No.8 RT005/RW001, Pulau Tidung,
                Kepulauan Seribu Selatan, DKI Jakarta 14520.
              </p>

              <div className="mt-6 space-y-3 lg:mt-7 lg:space-y-4">
                <InfoItem
                  icon={<Compass size={20} />}
                  title="Area Layanan"
                  desc="Pulau Tidung & Pulau Payung"
                />

                <InfoItem
                  icon={<Clock size={20} />}
                  title="Jam Layanan"
                  desc="Setiap hari, 08.00 - 22.00 WIB"
                />

                <InfoItem
                  icon={<Mail size={20} />}
                  title="Email"
                  desc="faqihabdi05@gmail.com"
                />
              </div>

              <div className="mt-7 grid gap-3 lg:mt-8">
                <a
                  href="https://maps.app.goo.gl/jfr4XAcAiDsp24D28"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-sky-600 px-5 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700 lg:px-6 lg:py-4"
                >
                  <Navigation size={20} />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative overflow-hidden rounded-[28px] border border-sky-100 bg-white p-2 shadow-2xl lg:rounded-[32px] lg:p-3">
            <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur-md md:left-6 md:top-6 md:px-5 md:py-3 md:text-sm">
              📍 Pulau Tidung, Kepulauan Seribu
            </div>

            <iframe
              title="Wisata Tidung Island Maps"
              src="https://www.google.com/maps?q=Pulau%20Tidung%20Kepulauan%20Seribu&output=embed"
              className="h-[360px] w-full rounded-[22px] md:h-[460px] lg:h-[520px] lg:rounded-[24px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoItem({ icon, title, desc }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-sky-50 p-3 lg:gap-4 lg:p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm lg:h-11 lg:w-11">
        {icon}
      </div>

      <div>
        <h4 className="font-black text-slate-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>
      </div>
    </div>
  );
}