import { useState } from "react";
import { Link } from "react-scroll";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";

export default function QuickBooking() {
  const [destination, setDestination] = useState("Pulau Tidung");
  const [tripPackage, setTripPackage] = useState("2 Hari 1 Malam");
  const [people, setPeople] = useState("2 Orang");

  return (
    <section className="relative z-20 -mt-16 px-6" id="quick-booking">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-5 md:p-6 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-sky-50 rounded-2xl p-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
              <FaMapMarkerAlt className="text-sky-600" />
              Destinasi
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none"
            >
              <option>Pulau Tidung</option>
              <option>Pulau Payung</option>
            </select>
          </div>

          <div className="bg-sky-50 rounded-2xl p-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
              <FaCalendarAlt className="text-sky-600" />
              Paket
            </label>
            <select
              value={tripPackage}
              onChange={(e) => setTripPackage(e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none"
            >
              <option>2 Hari 1 Malam</option>
              <option>3 Hari 2 Malam</option>
            </select>
          </div>

          <div className="bg-sky-50 rounded-2xl p-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
              <FaUsers className="text-sky-600" />
              Jumlah Peserta
            </label>
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none"
            >
              <option>2 Orang</option>
              <option>3 Orang</option>
              <option>4 Orang</option>
              <option>5 Orang</option>
              <option>10+ Orang</option>
            </select>
          </div>

          <Link
            to="paket"
            smooth
            duration={500}
            offset={-80}
            className="bg-sky-600 hover:bg-sky-700 text-white rounded-2xl flex items-center justify-center gap-3 font-bold cursor-pointer shadow-lg transition min-h-[72px]"
          >
            <FaSearch />
            Cari Paket
          </Link>
        </div>
      </div>
    </section>
  );
}