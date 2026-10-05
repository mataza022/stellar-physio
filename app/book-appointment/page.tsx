"use client";

import { useState } from "react";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });

  const filteredServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (serviceCategories[s.slug] || "")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  const isDateDisabled = ({ date }: { date: Date }) => {
    return date.getDay() === 0;
  };

  const getMinTime = () => "08:00";
  const getMaxTime = () => {
    if (!selectedDate) return "18:00";
    return selectedDate.getDay() === 6 ? "16:00" : "18:00";
  };

  const formatTime12 = (time: string) => {
    if (!time) return "";
    const [hourStr, minute] = time.split(":");
    const hour = parseInt(hourStr, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${hour12}:${minute} ${period}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedLocation || !selectedDate || !selectedTime)
      return;
    alert(
      `Booking request received!\n\nService: ${selectedService}\nLocation: ${selectedLocation}\nDate: ${selectedDate.toDateString()}\nTime: ${formatTime12(
        selectedTime
      )}\n\nOur team will confirm shortly.`
    );
  };

  return (
    <>
      {/* Global styles override for react-calendar */}
      <style jsx global>{`
        .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
          background: white;
        }
        .react-calendar__navigation button {
          color: #5c2c7e;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        .react-calendar__navigation button:hover,
        .react-calendar__navigation button:focus {
          background-color: #f3e8ff;
        }
        .react-calendar__navigation button:enabled:hover,
        .react-calendar__navigation button:enabled:focus {
          background-color: #f3e8ff;
        }
        .react-calendar__month-view__weekdays {
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.7rem;
          color: #9ca3af;
          padding-bottom: 0.5rem;
        }
        .react-calendar__month-view__weekdays__weekday {
          padding: 0.5em;
        }
        .react-calendar__month-view__weekdays__weekday abbr {
          text-decoration: none;
        }
        .react-calendar__tile {
          padding: 1em 0.5em;
          border-radius: 0.5rem;
          font-weight: 600;
          color: #374151;
          transition: all 0.2s;
        }
        .react-calendar__tile:hover {
          background-color: #f3e8ff;
          color: #5c2c7e;
        }
        .react-calendar__tile--now {
          background: #e9d5ff;
          color: #5c2c7e;
        }
        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
          background: #d8b4fe;
        }
        .react-calendar__tile--active {
          background: #5c2c7e !important;
          color: white !important;
          box-shadow: 0 4px 6px -1px rgba(92, 44, 126, 0.4);
        }
        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
          background: #4a2266 !important;
        }
        .react-calendar__tile:disabled {
          background-color: transparent;
          color: #d1d5db;
          text-decoration: line-through;
        }
        .react-calendar__month-view__days__day--neighboringMonth {
          color: #d1d5db;
        }
      `}</style>

      {/* BREADCRUMB BAR */}
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

      {/* STEP 1 — SERVICE */}
      {step === 1 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-4xl">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Which service do you need?
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Select the service you would like to book. You can search below.
            </p>
            <input
              type="text"
              placeholder="Search services by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:border-purple mb-8 text-sm bg-white shadow-sm"
            />
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

      {/* STEP 2 — LOCATION */}
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

      {/* STEP 3 — DATE & TIME (REVAMPED) */}
      {step === 3 && (
        <section className="py-12 bg-gray-50 min-h-[600px]">
          <div className="container-custom max-w-5xl">
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
            <p className="text-sm text-gray-500 mb-8">
              Service:{" "}
              <span className="font-semibold text-purple">
                {selectedService}
              </span>{" "}
              · Location:{" "}
              <span className="font-semibold text-purple">
                {selectedLocation}
              </span>
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar Column */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <h3 className="text-base font-bold text-gray-800">
                    Select a date
                  </h3>
                </div>
                <Calendar
                  onChange={(value) => {
                    setSelectedDate(value as Date);
                    setSelectedTime("");
                  }}
                  value={selectedDate}
                  tileDisabled={isDateDisabled}
                  minDate={new Date()}
                  className="w-full border-none"
                />
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Open Mon–Fri 8am–6pm · Sat 8am–4pm · Closed Sundays
                </div>
              </div>

              {/* Time Input Column */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-purple text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <h3 className="text-base font-bold text-gray-800">
                    Select a time
                  </h3>
                </div>
                
                {!selectedDate ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-gray-500 font-medium">Please select a date first</p>
                    <p className="text-xs text-gray-400 mt-1">Your available time slots will appear here</p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                        Preferred arrival time
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          min={getMinTime()}
                          max={getMaxTime()}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg outline-none focus:border-purple text-lg font-semibold text-gray-800 bg-white transition"
                        />
                      </div>
                      
                      <div className="mt-4 bg-purple-light/50 rounded-lg p-4">
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Pick any time between{" "}
                          <span className="font-semibold text-purple">
                            {formatTime12(getMinTime())}
                          </span>{" "}
                          and{" "}
                          <span className="font-semibold text-purple">
                            {formatTime12(getMaxTime())}
                          </span>{" "}
                          on{" "}
                          <span className="font-semibold text-purple">
                            {selectedDate.toLocaleDateString("en-US", {
                              weekday: "long",
                            })}
                          </span>
                          .
                        </p>
                      </div>
                    </div>

                    {selectedTime && (
                      <div className="mt-6 bg-green/10 border border-green/20 rounded-lg p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center text-white flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Selected time</p>
                          <p className="text-base font-bold text-green">{formatTime12(selectedTime)}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Continue button */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(4)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition ${
                  selectedDate && selectedTime
                    ? "bg-purple text-white hover:bg-purple-dark shadow-md"
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
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">Booking Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Service</p>
                  <p className="font-semibold text-gray-800">{selectedService}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="font-semibold text-gray-800">{selectedLocation}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Date</p>
                  <p className="font-semibold text-gray-800">{selectedDate?.toDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Time</p>
                  <p className="font-semibold text-gray-800">{formatTime12(selectedTime)}</p>
                </div>
              </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple resize-none text-sm bg-white"
                ></textarea>
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-purple text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-purple-dark transition shadow-md"
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