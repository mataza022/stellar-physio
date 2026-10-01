"use client";

import { useState } from "react";

export default function BookAppointmentPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // October 2026 calendar (matches screenshot month)
  const monthName = "October 2026";
  const startOffset = 3; // Oct 1, 2026 starts on Thursday (W)
  const daysInMonth = 31;

  // Example states — in production these come from Firestore
  const bookedDays = [1, 4, 10, 11, 25];
  const pendingDays = [3, 8];

  const getDayState = (day: number) => {
    if (bookedDays.includes(day)) return "booked";
    if (pendingDays.includes(day)) return "pending";
    return "available";
  };

  const stateColors: Record<string, string> = {
    available:
      "border-2 border-green text-green hover:bg-green hover:text-white",
    booked: "border-2 border-red-400 text-red-400 cursor-not-allowed",
    pending: "border-2 border-yellow-500 text-yellow-500 cursor-not-allowed",
  };

  const [selectedState, setSelectedState] =
    useState<string>("available");

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Book Appointment</h1>
        </div>
      </section>

      {/* BOOKING WIDGET */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Calendar</h2>

            {/* Calendar header */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-700">{monthName}</span>
              <button
                type="button"
                className="text-gray-500 hover:text-purple"
                aria-label="Next month"
              >
                &#8250;
              </button>
            </div>

            {/* Day names */}
            <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs text-gray-500">
              <span>MO</span>
              <span>TU</span>
              <span>WE</span>
              <span>TH</span>
              <span>FR</span>
              <span>SA</span>
              <span>SU</span>
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {/* Empty cells for the offset */}
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`}></div>
              ))}
              {/* Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const state = getDayState(day);
                const isSelected = selectedDay === day;
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={state !== "available"}
                    onClick={() => {
                      setSelectedDay(day);
                      setSelectedState(state);
                    }}
                    className={`aspect-square rounded-md flex items-center justify-center text-sm font-semibold transition ${
                      stateColors[state]
                    } ${
                      isSelected
                        ? "bg-green text-white border-green"
                        : ""
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 italic mb-6">
              Powered by Booking Calendar
            </p>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border-2 border-green text-green flex items-center justify-center text-xs font-bold">
                  01
                </span>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border-2 border-red-400 text-red-400 flex items-center justify-center text-xs font-bold">
                  01
                </span>
                <span className="text-gray-600">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border-2 border-yellow-500 text-yellow-500 flex items-center justify-center text-xs font-bold">
                  01
                </span>
                <span className="text-gray-600">Pending</span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Booking submitted! Our team will confirm shortly via email or phone."
                );
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#2d7fb8] text-white px-8 py-3 rounded font-semibold hover:bg-[#256b99] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-purple-dark flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 6 10-6" />
              </svg>
            </div>
            <a
              href="mailto:info@stellarphysio.com"
              className="text-gray-800 font-semibold hover:text-purple"
            >
              info@stellarphysio.com
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-purple-dark flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <a
              href="tel:+254719881291"
              className="text-gray-800 font-semibold hover:text-purple"
            >
              +254 719 881 291
            </a>
          </div>

          <div className="bg-white rounded-lg p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-purple-dark flex items-center justify-center text-white flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold">
              Kenital Plaza, Ngong Road
            </span>
          </div>
        </div>
      </section>
    </>
  );
}