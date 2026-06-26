import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import Section from "./ui/Section";

const faqs = [
  {
    q: "Apakah paket sudah termasuk kapal?",
    a: "Ya, seluruh paket wisata sudah termasuk tiket kapal PP sesuai jenis paket yang dipilih.",
  },
  {
    q: "Bagaimana cara melakukan booking?",
    a: "Booking dapat dilakukan langsung melalui WhatsApp admin Wisata Tidung Island.",
  },
  {
    q: "Berapa minimal DP?",
    a: "Minimal DP sebesar 30% dari total biaya paket dan wajib dibayarkan paling lambat H-7 sebelum keberangkatan.",
  },
  {
    q: "Apakah bisa memilih tanggal keberangkatan?",
    a: "Bisa, selama kuota pada tanggal tersebut masih tersedia.",
  },
  {
    q: "Bagaimana jika cuaca buruk?",
    a: "Perjalanan dapat dijadwalkan ulang sesuai kesepakatan bersama.",
  },
  {
    q: "Apakah tersedia Private Trip?",
    a: "Ya, kami melayani Open Trip maupun Private Trip.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          badge="FAQ"
          title="Pertanyaan Umum"
          desc="Beberapa pertanyaan yang sering ditanyakan sebelum booking."
        />

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-slate-900">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`shrink-0 text-sky-600 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-slate-500">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}