import { useState } from "react";
import {
  X,
  CheckCircle,
  CalendarDays,
  Ship,
  MessageCircle,
  Utensils,
  Info,
  Star,
  Clock,
  Sparkles,
} from "lucide-react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import PrimaryButton from "./ui/PrimaryButton";

const cateringMenus = [
  {
    category: "Menu Ayam",
    emoji: "🍗",
    items: ["Ayam Bakar", "Ayam Goreng", "Ayam Kecap"],
  },
  {
    category: "Menu Ikan",
    emoji: "🐟",
    items: [
      "Ikan Bakar",
      "Ikan Goreng",
      "Ikan Pepes",
      "Pindang Kuning",
      "Ikan Garam Asem",
    ],
  },
  {
    category: "Seafood",
    emoji: "🦐",
    items: ["Udang", "Cumi Panggang", "Cumi Saus Tiram"],
  },
  {
    category: "Menu Telur",
    emoji: "🥚",
    items: ["Telur Balado", "Telur Dadar"],
  },
  {
    category: "Sayuran",
    emoji: "🥬",
    items: ["Sayur Asem", "Sayur Sop", "Kangkung Saus Tiram"],
  },
  {
    category: "Buah-buahan",
    emoji: "🍉",
    items: ["Semangka", "Melon", "Pisang", "Jeruk"],
  },
  {
    category: "Pelengkap",
    emoji: "🍜",
    items: ["Tahu Tempe", "Mie", "Sambal + Lalapan"],
  },
];

const packages = [
  {
    id: 1,
    title: "2 Hari 1 Malam",
    price: "Rp370.000",
    badge: "Favorit",
    tag: "Trip Singkat",
    desc: "Paket singkat untuk menikmati Pulau Tidung dengan fasilitas lengkap.",
    highlights: ["Cocok untuk weekend", "Include makan", "Trip hemat"],
    facilities: [
      "Tiket kapal PP",
      "Penginapan",
      "Welcome drink",
      "Makan",
      "Sepeda untuk jalan-jalan",
      "Sepeda listrik",
      "Snorkeling",
      "Camera underwater",
      "Banana boat",
      "Pemandu wisata",
      "Barbeque",
      "Alat karaoke",
    ],
    itinerary: [
      "07.00 - Standby di pelabuhan",
      "08.00 - Perjalanan menuju Pulau Tidung",
      "11.00 - Tiba di Pulau Tidung, menuju homestay, welcome drink",
      "11.30 - Istirahat dan persiapan kegiatan",
      "12.00 - Makan siang",
      "13.00 - Wisata Kerangka Paus, Suaka Penyu, dan Ikan Nemo",
      "14.00 - Snorkeling dan Banana Boat",
      "16.30 - Kembali ke homestay dan istirahat",
      "18.00 - Hunting sunset Ujung Barat",
      "19.00 - Makan malam",
      "20.00 - Barbeque dan karaoke",
      "22.00 - Istirahat / acara bebas",
      "05.00 - Hunting sunrise di Jembatan Cinta",
      "07.00 - Sarapan",
      "08.00 - Checkout dan menuju pelabuhan",
      "09.00 - Perjalanan menuju Muara Angke",
    ],
  },
  {
    id: 2,
    title: "3 Hari 2 Malam",
    price: "Rp540.000",
    badge: "Best Trip",
    tag: "Lebih Santai",
    desc: "Paket lebih santai untuk menikmati liburan Pulau Tidung lebih lengkap.",
    highlights: ["Rundown lebih lengkap", "Waktu santai", "Banyak aktivitas"],
    facilities: [
      "Tiket kapal PP",
      "Penginapan 2 malam",
      "Welcome drink",
      "Makan",
      "Sepeda untuk jalan-jalan",
      "Sepeda listrik",
      "Snorkeling",
      "Camera underwater",
      "Banana boat",
      "Pemandu wisata",
      "Barbeque",
      "Alat karaoke",
      "Kemah",
      "Jetski",
      "Kano",
      "Drone",
    ],
    itinerary: [
      "Hari Pertama",
      "07.00 - Standby di pelabuhan",
      "08.00 - Perjalanan menuju Pulau Tidung",
      "11.00 - Tiba di Pulau Tidung, menuju homestay, welcome drink",
      "11.30 - Istirahat dan persiapan kegiatan",
      "12.00 - Makan siang",
      "13.00 - Wisata Jembatan Cinta",
      "16.00 - Wisata Saung Cemara Kasih",
      "17.30 - Hunting sunset Ujung Barat",
      "19.00 - Makan malam",
      "20.00 - Acara bebas / karaoke",
      "22.00 - Istirahat",
      "Hari Kedua",
      "07.00 - Sarapan",
      "08.00 - Wisata Saung Cemara Kasih / Jembatan Cinta",
      "10.30 - Istirahat sejenak",
      "12.00 - Makan siang",
      "13.00 - Wisata Kerangka Paus, Suaka Penyu, dan Ikan Nemo",
      "14.00 - Snorkeling dan Banana Boat",
      "16.30 - Kembali ke homestay dan istirahat",
      "18.00 - Hunting sunset",
      "19.00 - Makan malam",
      "20.00 - Barbeque dan karaoke",
      "22.00 - Istirahat",
      "Hari Ketiga",
      "05.00 - Hunting sunrise di Jembatan Cinta",
      "07.00 - Sarapan",
      "08.00 - Checkout dan menuju pelabuhan",
      "09.00 - Perjalanan menuju Muara Angke",
    ],
  },
];

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <Section id="paket" className="bg-gradient-to-b from-slate-50 to-white">
        <SectionHeader
          badge="Paket Wisata"
          title="Pilih Paket Liburanmu"
          desc="Temukan paket terbaik untuk menikmati Pulau Tidung & Pulau Payung"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {packages.map((item, index) => (
            <PackageCard
              key={item.id}
              item={item}
              index={index}
              onDetail={() => setSelectedPackage(item)}
            />
          ))}
        </div>
      </Section>

      {selectedPackage && (
        <PackageModal
          data={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </>
  );
}

function PackageCard({ item, index, onDetail }) {
  const isBest = index === 1;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:rounded-[36px] ${
        isBest ? "border-sky-300" : "border-sky-100"
      }`}
    >
      {isBest && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-to-r from-sky-600 to-cyan-500 px-3 py-1.5 text-xs font-black text-white shadow-lg lg:right-6 lg:top-6 lg:px-4 lg:py-2 lg:text-sm">
          Recommended
        </div>
      )}

      <div className="absolute -right-24 -top-24 h-60 w-60 rounded-full bg-sky-100 blur-3xl transition group-hover:bg-cyan-100" />

      <div className="relative p-6 lg:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-2 lg:mb-6 lg:gap-3">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold text-sky-700 lg:px-4 lg:py-2 lg:text-sm">
            {item.badge}
          </span>

          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 lg:px-4 lg:py-2 lg:text-sm">
            {item.tag}
          </span>
        </div>

        <h3 className="text-2xl font-black text-slate-950 md:text-3xl lg:text-4xl">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-500 md:text-base lg:mt-4">
          {item.desc}
        </p>

        <div className="mt-6 rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-5 lg:mt-7 lg:p-6">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 lg:text-sm">
            Mulai dari
          </p>

          <h4 className="mt-2 text-3xl font-black text-sky-600 lg:text-4xl">
            {item.price}
            <span className="text-sm font-bold text-slate-500 lg:text-base">
              {" "}
              / pax
            </span>
          </h4>
        </div>

        <div className="mt-5 grid gap-2 lg:mt-6 lg:gap-3">
          {item.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm text-slate-600 shadow-sm md:text-base"
            >
              <Star size={17} className="shrink-0 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{highlight}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 space-y-2.5 lg:mt-6 lg:space-y-3">
          {item.facilities.slice(0, 6).map((facility) => (
            <div
              key={facility}
              className="flex items-center gap-3 text-sm text-slate-600 md:text-base"
            >
              <CheckCircle size={18} className="shrink-0 text-sky-500" />
              {facility}
            </div>
          ))}
        </div>

        <PrimaryButton onClick={onDetail} className="mt-7 w-full lg:mt-8">
          Lihat Detail Paket
        </PrimaryButton>
      </div>
    </div>
  );
}

function PackageModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-3 py-4 sm:px-4">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[28px] bg-white p-5 shadow-2xl md:p-6 lg:rounded-[36px] lg:p-8">
        <div className="sticky top-0 z-10 -mx-5 -mt-5 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-md md:-mx-6 md:-mt-6 md:px-6 lg:-mx-8 lg:-mt-8 lg:px-8 lg:py-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-bold text-sky-700 lg:px-4 lg:py-2 lg:text-sm">
              <Sparkles size={15} />
              Detail Paket
            </span>

            <h3 className="mt-3 text-2xl font-black text-slate-950 md:text-3xl lg:mt-4">
              {data.title}
            </h3>

            <p className="mt-1 text-sm font-bold text-sky-600 md:text-base">
              Mulai {data.price} / pax
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 p-2.5 transition hover:bg-slate-200 lg:p-3"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm lg:rounded-[28px] lg:p-6">
            <h4 className="flex items-center gap-2 text-lg font-black text-slate-900 lg:text-xl">
              <Ship className="text-sky-600" />
              Fasilitas Paket
            </h4>

            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:mt-5 lg:gap-3">
              {data.facilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-sky-50 p-3 text-sm text-slate-600 md:text-base"
                >
                  <CheckCircle size={18} className="shrink-0 text-sky-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-sky-100 bg-white p-5 shadow-sm lg:rounded-[28px] lg:p-6">
            <h4 className="flex items-center gap-2 text-lg font-black text-slate-900 lg:text-xl">
              <CalendarDays className="text-sky-600" />
              Timeline Rundown
            </h4>

            <div className="mt-4 space-y-3 lg:mt-5 lg:space-y-4">
              {data.itinerary.map((item, index) => {
                const isDayTitle = item.startsWith("Hari ");

                if (isDayTitle) {
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-500 p-3 text-center text-sm font-black text-white lg:p-4 lg:text-base"
                    >
                      {item}
                    </div>
                  );
                }

                const [time, ...activity] = item.split(" - ");

                return (
                  <div key={index} className="relative flex gap-3 lg:gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600 lg:h-10 lg:w-10">
                        <Clock size={17} />
                      </div>
                      {index !== data.itinerary.length - 1 && (
                        <div className="h-full w-[2px] bg-sky-100" />
                      )}
                    </div>

                    <div className="flex-1 rounded-2xl bg-sky-50 p-3 lg:p-4">
                      <p className="text-sm font-black text-sky-700 lg:text-base">
                        {time}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600 md:text-base">
                        {activity.join(" - ")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <CateringSection />

        <a
          href={`https://wa.me/6285770359378?text=Halo%20admin%2C%20saya%20ingin%20booking%20paket%20${encodeURIComponent(
            data.title
          )}%0A%0ASaya%20juga%20ingin%20konfirmasi%20pilihan%20menu%20catering.`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 flex items-center justify-center gap-3 rounded-full bg-green-500 py-3.5 text-sm font-bold text-white transition hover:bg-green-600 md:text-base lg:mt-8 lg:py-4"
        >
          <MessageCircle size={20} />
          Booking via WhatsApp
        </a>
      </div>
    </div>
  );
}

function CateringSection() {
  return (
    <div className="mt-8 rounded-[26px] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 lg:mt-10 lg:rounded-[32px] lg:p-6">
      <div>
        <h4 className="flex items-center gap-2 text-xl font-black text-slate-900 lg:text-2xl">
          <Utensils className="text-sky-600" />
          Menu Catering
        </h4>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
          Silakan pilih menu makanan favorit Anda dan konfirmasikan kepada admin
          saat melakukan booking melalui WhatsApp.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:mt-6 lg:gap-5">
        {cateringMenus.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-white bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:p-5"
          >
            <h5 className="mb-3 flex items-center gap-2 font-black text-slate-900 lg:mb-4">
              <span>{group.emoji}</span>
              {group.category}
            </h5>

            <div className="flex flex-wrap gap-2">
              {group.items.map((menu) => (
                <span
                  key={menu}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-semibold text-slate-600 md:text-sm lg:px-4"
                >
                  {menu}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex gap-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-500 lg:mt-6">
        <Info size={20} className="shrink-0 text-sky-600" />
        <p>
          Menu dapat menyesuaikan ketersediaan bahan di hari keberangkatan.
          Pilihan menu dikonfirmasi langsung kepada admin saat proses booking.
        </p>
      </div>
    </div>
  );
}