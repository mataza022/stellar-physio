"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

// Map each service slug to a short category label for the card badges
const serviceCategories: Record<string, string> = {
  "general-consultations": "Consultation",
  "chiropractor-services": "Chiropractic",
  physiotherapy: "Therapy",
  "home-based-care": "Homecare",
  "stellar-laboratory-services": "Diagnostic",
  pharmacy: "Pharmacy",
  "counselling-services": "Mental Health",
  "sports-massage": "Therapy",
  reflexology: "Therapy",
  "occupational-therapy": "Pediatric Therapy",
  "nutritional-services": "Nutrition",
  "stretch-exercise-therapy": "Therapy",
};

const branches = [
  { name: "Kenital Plaza, Ngong Road", short: "Ngong Road" },
  { name: "Karen Country Club", short: "Karen" },
  { name: "Parklands Sports Club", short: "Parklands" },
];

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });

  // October 2026 calendar
  const monthName = "October 2026";
  const startOffset = 3;
  const daysInMonth = 31;
  const closedDays = [4, 11, 18, 25];

  // Filter services by search
  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (serviceCategories[s.slug] || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedLocation || !selectedDay) return;
    alert(
      `Booking request received!\n\nService: ${selectedService}\nLocation: ${selectedLocation}\nDate: October ${selectedDay}, 2026\n\nOur team will confirm shortly.`
    );
  };

  const getDayState = (day: number) => {
    if (closedDays.includes(day)) return "closed";
    return "available";
  };

  const stateColors: Record<string, string> = {
    available:
      "border-2 border-green text-green hover:bg-green hover:text-white cursor-pointer",
    closed:
      "border-2 border-gray-200 text-gray-300 cursor-not-allowed line-through",
  };

  return (
    <>
      {/* BREADCRUMB BAR (Nairobi Hospital style) */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom flex justify-between items-center py-4">
          <Link
            href="/services"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-purple transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Clinical Services
          </Link>
          <a
            href="tel:+254719881291"
            className="flex items-center gap-2 border border-purple text-purple px-4 py-2 rounded text-xs font-semibold hover:bg-purple hover:text-white transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call us
          </a>
        </div>
      </div>

      {/* STEP INDICATOR */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom max-w-3xl py-6">
          <div className="flex justify-between items-start relative">
            {/* Progress line */}
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0" />
            <div
              className="absolute top-4 left-0 h-0.5 bg-purple z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />

            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Location" },
              { num: 3, label: "Date & Time" },
              { num: 4, label: "Your Details" },
            ].map((s) => (
              <div
                key={s.num}
                className="flex flex-col items-center z-10 flex-1"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                    step >= s.num
                      ? "bg-purple border-purple text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {step > s.num ? "✓" : s.num}
                </div>
                <span
                  className={`mt-2 text-[10px] md:text-xs font-medium text-center ${
                    step >= s.num ? "text-purple" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STEP 1 — SELECT SERVICE */}
      {step === 1 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Which service do you need?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Select the service you would like to book. You can search below.
            </p>

            {/* Search */}
            <input
              type="text"
              placeholder="Search services by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-purple mb-8 text-sm bg-white"
            />

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredServices.map((service) => {
                const isSelected = selectedService === service.title;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setSelectedService(service.title)}
                    className={`text-left bg-white rounded-md p-4 border transition-all ${
                      isSelected
                        ? "border-purple ring-2 ring-purple/20 shadow-md"
                        : "border-gray-200 hover:border-purple/50 hover:shadow-sm"
                    }`}
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#c0392b] mb-1">
                      {serviceCategories[service.slug] || "Clinical Service"}
                    </span>
                    <h3 className="text-sm md:text-base font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={!selectedService}
                onClick={() => setStep(2)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition ${
                  selectedService
                    ? "bg-purple text-white hover:bg-purple-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 2 — SELECT LOCATION */}
      {step === 2 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-4xl">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple transition mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Which branch would you like to visit?
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Selected service:{" "}
              <span className="font-semibold text-purple">
                {selectedService}
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {branches.map((b) => {
                const isSelected = selectedLocation === b.name;
                return (
                  <button
                    key={b.name}
                    type="button"
                    onClick={() => setSelectedLocation(b.name)}
                    className={`text-left bg-white rounded-md p-6 border transition-all ${
                      isSelected
                        ? "border-purple ring-2 ring-purple/20 shadow-md"
                        : "border-gray-200 hover:border-purple/50 hover:shadow-sm"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-light flex items-center justify-center text-purple mb-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                        />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {b.name}
                    </h3>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={!selectedLocation}
                onClick={() => setStep(3)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition ${
                  selectedLocation
                    ? "bg-purple text-white hover:bg-purple-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 3 — DATE & TIME */}
      {step === 3 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-2xl">
            <button
              onClick={() => setStep(2)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple transition mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              When would you like to come in?
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              Service:{" "}
              <span className="font-semibold text-purple">
                {selectedService}
              </span>{" "}
              · Location:{" "}
              <span className="font-semibold text-purple">
                {selectedLocation}
              </span>
            </p>
            <p className="text-xs text-gray-500 mb-6">
              Open Mon–Fri 8am–6pm · Sat 8am–4pm · Closed Sundays
            </p>

            {/* Calendar */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700 text-sm">
                  {monthName}
                </span>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs text-gray-500">
                <span>MO</span>
                <span>TU</span>
                <span>WE</span>
                <span>TH</span>
                <span>FR</span>
                <span>SA</span>
                <span>SU</span>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-6">
                {Array.from({ length: startOffset }).map((_, i) => (
                  <div key={`empty-${i}`}></div>
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const state = getDayState(day);
                  const isSelected = selectedDay === day;
                  const isDisabled = state === "closed";
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => setSelectedDay(day)}
                      className={`aspect-square rounded-md flex items-center justify-center text-sm font-semibold transition ${
                        stateColors[state]
                      } ${
                        isSelected ? "bg-green text-white border-green" : ""
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border-2 border-green text-green flex items-center justify-center text-[10px] font-bold">
                    01
                  </span>
                  <span className="text-gray-600">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full border-2 border-gray-200 text-gray-300 line-through flex items-center justify-center text-[10px] font-bold">
                    01
                  </span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={!selectedDay}
                onClick={() => setStep(4)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition ${
                  selectedDay
                    ? "bg-purple text-white hover:bg-purple-dark"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 4 — DETAILS */}
      {step === 4 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-2xl">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple transition mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Your Details
            </h2>

            {/* Booking Summary */}
            <div className="bg-purple-light rounded-lg p-4 mb-6 text-sm">
              <p className="text-gray-700">
                <span className="font-semibold">Service:</span>{" "}
                {selectedService}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span>{" "}
                {selectedLocation}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Date:</span> October{" "}
                {selectedDay}, 2026
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple resize-none text-sm"
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-purple text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-purple-dark transition"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}