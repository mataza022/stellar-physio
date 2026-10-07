"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { services } from "@/lib/services";

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
  "stretch-exercise-therapy": "Therapy",
};

// Group services under user-friendly categories
const serviceGroups = [
  { label: "Consultations", slugs: ["general-consultations"] },
  {
    label: "Therapy",
    slugs: [
      "physiotherapy",
      "chiropractor-services",
      "sports-massage",
      "reflexology",
      "stretch-exercise-therapy",
    ],
  },
  { label: "Rehab & Care", slugs: ["home-based-care", "occupational-therapy"] },
  { label: "Diagnostics", slugs: ["stellar-laboratory-services"] },
  {
    label: "Wellness",
    slugs: ["counselling-services", "pharmacy"],
  },
];

const branches = [
  { name: "Kenital Plaza, Ngong Road", short: "Ngong Road" },
  { name: "Karen Country Club", short: "Karen" },
  { name: "Parklands Sports Club", short: "Parklands" },
];

function isHomeBasedService(name: string | null): boolean {
  if (!name) return false;
  const n = name.toLowerCase();
  return n.includes("home-based") || n.includes("dial a physio");
}

function BookAppointmentInner() {
  const searchParams = useSearchParams();
  const preSelected = searchParams.get("service");
  const preSelectedIsHome = isHomeBasedService(preSelected);

  const [step, setStep] = useState(
    preSelected ? (preSelectedIsHome ? 3 : 2) : 1
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(
    preSelected
  );
  const [customService, setCustomService] = useState("");
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

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isHomeBased = isHomeBasedService(selectedService);

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

  const finalServiceName =
    selectedService === "Other" && customService.trim()
      ? `Other: ${customService.trim()}`
      : selectedService;

  const canContinueFromStep1 =
    selectedService === "Other"
      ? customService.trim().length > 2
      : !!selectedService;

  const effectiveLocation = isHomeBased
    ? "Home Visit (Client's Location)"
    : selectedLocation;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!finalServiceName || !selectedDate || !selectedTime) return;
    if (!isHomeBased && !selectedLocation) return;

    setSubmitting(true);

    try {
      await addDoc(collection(db, "bookings"), {
        service: finalServiceName,
        serviceIsCustom: selectedService === "Other",
        customServiceDescription:
          selectedService === "Other" ? customService.trim() : "",
        isHomeBased,
        wasPreselected: !!preSelected,
        location: effectiveLocation,
        date: selectedDate.toISOString().split("T")[0],
        dateReadable: selectedDate.toDateString(),
        time: selectedTime,
        timeReadable: formatTime12(selectedTime),

        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        details: formData.details.trim(),

        status: "pending",
        source: "website",
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Booking submission failed:", error);
      setErrorMessage(
        "We couldn't submit your booking. Please check your internet connection and try again, or call us directly at +254 706 101 999."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ============================================
  // SUCCESS SCREEN
  // ============================================
  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-gray-50">
        <div className="container-custom max-w-lg text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
            <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-purple mb-3">
              Booking Request Received
            </h1>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Thank you, <strong>{formData.firstName}</strong>. Our team has
              received your booking request and will contact you shortly to
              confirm your appointment.
            </p>

            <div className="bg-gray-50 rounded-lg p-5 text-left text-sm mb-6">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-2 font-semibold">
                Booking Summary
              </p>
              <p className="text-gray-800 mb-1">
                <strong>Service:</strong> {finalServiceName}
              </p>
              <p className="text-gray-800 mb-1">
                <strong>Location:</strong> {effectiveLocation}
              </p>
              <p className="text-gray-800 mb-1">
                <strong>Date:</strong> {selectedDate?.toDateString()}
              </p>
              <p className="text-gray-800">
                <strong>Time:</strong> {formatTime12(selectedTime)}
              </p>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Our team will contact you at <strong>{formData.email}</strong>
              {formData.phone && (
                <>
                  {" "}
                  or <strong>{formData.phone}</strong>
                </>
              )}{" "}
              to confirm your appointment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-md font-semibold text-sm bg-purple text-white hover:bg-purple-dark transition"
              >
                Back to Home
              </Link>
              <a
                href="tel:+254706101999"
                className="px-6 py-2.5 rounded-md font-semibold text-sm border border-purple text-purple hover:bg-purple-light transition"
              >
                Call Us Instead
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ============================================
  // BOOKING FLOW
  // ============================================
  return (
    <>
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
              style={{
                width: `${
                  isHomeBased
                    ? step === 1
                      ? 0
                      : step === 3
                      ? 50
                      : 100
                    : ((step - 1) / 3) * 100
                }%`,
              }}
            />
            {(isHomeBased
              ? [
                  { num: 1, label: "Service" },
                  { num: 3, label: "Date & Time" },
                  { num: 4, label: "Your Details" },
                ]
              : [
                  { num: 1, label: "Service" },
                  { num: 2, label: "Location" },
                  { num: 3, label: "Date & Time" },
                  { num: 4, label: "Your Details" },
                ]
            ).map((s, idx) => {
              const displayNum = isHomeBased ? idx + 1 : s.num;
              return (
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
                    {step > s.num ? "✓" : displayNum}
                  </div>
                  <span
                    className={`mt-2 text-[10px] md:text-xs font-medium text-center ${
                      step >= s.num ? "text-purple" : "text-gray-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* STEP 1 — SERVICE */}
      {step === 1 && (
        <section className="pt-10 bg-gray-50">
          <div className="container-custom max-w-2xl pb-6">
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">
              Which service would you like to book?
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-5">
              Choose from the list below.
            </p>

            {/* Dropdown select */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-6">
              <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                Service
              </label>

              <select
                value={selectedService || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedService(value || null);
                  setCustomService("");
                }}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-purple text-sm md:text-base font-semibold text-gray-800 bg-white transition cursor-pointer"
              >
                <option value="" disabled>
                  — Select a service —
                </option>

                {serviceGroups.map((group) => {
                  const groupServices = services.filter((s) =>
                    group.slugs.includes(s.slug)
                  );
                  if (groupServices.length === 0) return null;
                  return (
                    <optgroup key={group.label} label={group.label}>
                      {groupServices.map((service) => (
                        <option key={service.slug} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </optgroup>
                  );
                })}

                <option value="Other">
                  Something else — describe your issue
                </option>
              </select>

              {/* Selected preview */}
              {selectedService && selectedService !== "Other" && (
                <div className="mt-4 bg-purple-light border border-purple/20 rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      Selected
                    </p>
                    <p className="text-sm font-bold text-purple">
                      {selectedService}
                    </p>
                  </div>
                </div>
              )}

              {/* Other input */}
              {selectedService === "Other" && (
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Please describe your issue
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={customService}
                    onChange={(e) => setCustomService(e.target.value)}
                    placeholder="E.g., I have persistent shoulder pain that hasn't gone away for two weeks..."
                    className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white resize-none"
                  />
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Not sure what you need? Pick{" "}
              <strong>&quot;General Consultations&quot;</strong> — our team
              will guide you.
            </p>
          </div>

          {/* Sticky Continue bar */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-30">
            <div className="container-custom max-w-2xl flex justify-end py-3 md:py-4">
              <button
                type="button"
                disabled={!canContinueFromStep1}
                onClick={() => setStep(isHomeBased ? 3 : 2)}
                className={`px-8 py-2.5 md:py-3 rounded-md font-semibold text-sm transition ${
                  canContinueFromStep1
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

      {/* STEP 2 — LOCATION (only for non-home-based services) */}
      {step === 2 && !isHomeBased && (
        <section className="pt-10 bg-gray-50">
          <div className="container-custom max-w-4xl pb-4">
            {!preSelected && (
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
            )}

            {preSelected && (
              <div className="mb-6 bg-purple-light border border-purple/20 rounded-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white flex-shrink-0">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                    Selected
                  </p>
                  <p className="text-sm md:text-base font-bold text-purple">
                    {preSelected}
                  </p>
                </div>
              </div>
            )}

            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">
              Which branch would you like to visit?
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              Selected service:{" "}
              <span className="font-semibold text-purple">
                {finalServiceName}
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
          </div>

          <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-30">
            <div className="container-custom max-w-4xl flex justify-end py-3 md:py-4">
              <button
                type="button"
                disabled={!selectedLocation}
                onClick={() => setStep(3)}
                className={`px-8 py-2.5 md:py-3 rounded-md font-semibold text-sm transition ${
                  selectedLocation
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

      {/* STEP 3 — DATE & TIME */}
      {step === 3 && (
        <section className="pt-10 bg-gray-50">
          <div className="container-custom max-w-5xl pb-4">
            <button
              onClick={() => setStep(isHomeBased ? 1 : 2)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple transition mb-4"
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
            <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-1">
              When would you like to come in?
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mb-6">
              Service:{" "}
              <span className="font-semibold text-purple">
                {finalServiceName}
              </span>
              {!isHomeBased && selectedLocation && (
                <>
                  {" "}
                  · Location:{" "}
                  <span className="font-semibold text-purple">
                    {selectedLocation}
                  </span>
                </>
              )}
            </p>

            {isHomeBased && (
              <div className="mb-6 bg-green/10 border border-green/30 rounded-lg p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center text-white flex-shrink-0">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-green">
                    Home Visit — No branch selection needed
                  </p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Our therapist will come to your preferred location.
                    We&apos;ll confirm the exact address with you after booking.
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-purple text-white flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800">
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
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 text-[11px] md:text-xs text-gray-500">
                  <svg
                    className="w-4 h-4 text-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Open Mon–Fri 8am–6pm · Sat 8am–4pm · Closed Sundays
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full bg-purple text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800">
                    Select a time
                  </h3>
                </div>

                {!selectedDate ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-lg border border-dashed border-gray-300 min-h-[220px]">
                    <svg
                      className="w-10 h-10 text-gray-300 mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm text-gray-500 font-medium">
                      Please select a date first
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your available time slots will appear here
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                        Preferred arrival time
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <input
                          type="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          min={getMinTime()}
                          max={getMaxTime()}
                          className="w-full pl-11 pr-3 py-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-purple text-base font-semibold text-gray-800 bg-white transition"
                        />
                      </div>

                      <div className="mt-3 bg-purple-light/50 rounded-lg p-3">
                        <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
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
                      <div className="mt-4 bg-green/10 border border-green/20 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-green flex items-center justify-center text-white flex-shrink-0">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                            Selected time
                          </p>
                          <p className="text-sm font-bold text-green">
                            {formatTime12(selectedTime)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-30">
            <div className="container-custom max-w-5xl flex justify-end py-3 md:py-4">
              <button
                type="button"
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(4)}
                className={`px-8 py-2.5 md:py-3 rounded-md font-semibold text-sm transition ${
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
              disabled={submitting}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-purple transition mb-6 disabled:opacity-50"
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

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-8">
              <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider">
                Booking Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Service
                  </p>
                  <p className="font-semibold text-gray-800">
                    {finalServiceName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="font-semibold text-gray-800">
                    {effectiveLocation}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Date
                  </p>
                  <p className="font-semibold text-gray-800">
                    {selectedDate?.toDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                    Time
                  </p>
                  <p className="font-semibold text-gray-800">
                    {formatTime12(selectedTime)}
                  </p>
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
                    disabled={submitting}
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={submitting}
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white disabled:bg-gray-50"
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
                    disabled={submitting}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    disabled={submitting}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple text-sm bg-white disabled:bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isHomeBased ? "Your Home Address *" : "Additional Details"}
                </label>
                <textarea
                  rows={4}
                  required={isHomeBased}
                  disabled={submitting}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder={
                    isHomeBased
                      ? "Please provide the address where our therapist should visit you (estate, street, building, house number)..."
                      : ""
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded outline-none focus:border-purple resize-none text-sm bg-white disabled:bg-gray-50"
                ></textarea>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-8 py-3 rounded-md font-semibold text-sm transition shadow-md flex items-center gap-2 ${
                    submitting
                      ? "bg-purple/70 text-white cursor-wait"
                      : "bg-purple text-white hover:bg-purple-dark"
                  }`}
                >
                  {submitting ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] bg-gray-50" />}>
      <BookAppointmentInner />
    </Suspense>
  );
}