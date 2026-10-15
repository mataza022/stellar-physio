"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type Item = {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
};

type CartLine = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

const BRANCHES = [
  "Kenital Plaza, Ngong Road",
  "Karen Country Club",
  "Parklands Sports Club",
];

function makeOrderNumber(): string {
  const now = new Date();
  const year = now.getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SP-${year}-${rand}`;
}

export default function PhysioShopPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    fulfillment: "pickup" as "pickup" | "delivery",
    branch: BRANCHES[0],
    deliveryAddress: "",
    notes: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const db = getDb();
        const snap = await getDocs(collection(db, "shop_items"));
        const list: Item[] = snap.docs
          .map((d) => {
            const data = d.data();
            return {
              slug: d.id,
              name: data.name ?? "",
              description: data.description ?? "",
              price: Number(data.price) || 0,
              category: data.category ?? "",
              image: data.image ?? "",
              inStock: data.inStock ?? true,
            };
          })
          .filter((i) => i.active !== false && (i as any).active !== false);
        // Only show active items
        const activeOnly = snap.docs
          .filter((d) => d.data().active !== false)
          .map((d) => {
            const data = d.data();
            return {
              slug: d.id,
              name: data.name ?? "",
              description: data.description ?? "",
              price: Number(data.price) || 0,
              category: data.category ?? "",
              image: data.image ?? "",
              inStock: data.inStock ?? true,
            };
          });
        activeOnly.sort((a, b) => a.name.localeCompare(b.name));
        setItems(activeOnly);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addToCart = (item: Item) => {
    setCart((prev) => {
      const existing = prev.find((l) => l.slug === item.slug);
      if (existing) {
        return prev.map((l) =>
          l.slug === item.slug ? { ...l, quantity: l.quantity + 1 } : l
        );
      }
      return [...prev, { slug: item.slug, name: item.name, price: item.price, quantity: 1 }];
    });
    setShowCart(true);
  };

  const setQuantity = (slug: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((l) => l.slug !== slug));
      return;
    }
    setCart((prev) =>
      prev.map((l) => (l.slug === slug ? { ...l, quantity: qty } : l))
    );
  };

  const removeLine = (slug: string) => {
    setCart((prev) => prev.filter((l) => l.slug !== slug));
  };

  const total = cart.reduce((sum, l) => sum + l.price * l.quantity, 0);
  const cartCount = cart.reduce((sum, l) => sum + l.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (cart.length === 0) {
      setErrorMessage("Your order is empty. Add items first.");
      return;
    }
    if (!formData.customerName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide your name, email and phone number.");
      return;
    }
    if (formData.fulfillment === "delivery" && !formData.deliveryAddress.trim()) {
      setErrorMessage("Please provide a delivery address.");
      return;
    }

    setSubmitting(true);
    const orderNum = makeOrderNumber();

    try {
      const db = getDb();
      await addDoc(collection(db, "shop_orders"), {
        orderNumber: orderNum,
        customerName: formData.customerName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        items: cart,
        total,
        fulfillment: formData.fulfillment,
        branch: formData.fulfillment === "pickup" ? formData.branch : "",
        deliveryAddress:
          formData.fulfillment === "delivery" ? formData.deliveryAddress.trim() : "",
        notes: formData.notes.trim(),
        status: "new",
        createdAt: serverTimestamp(),
      });

      setOrderNumber(orderNum);
      setSubmitted(true);
    } catch (error) {
      console.error("Order submission failed:", error);
      setErrorMessage(
        "We couldn't submit your order. Please check your internet connection and try again, or call us on +254 719 881 291."
      );
    } finally {
      setSubmitting(false);
    }
  };

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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-purple mb-3">
              Order Received
            </h1>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Thank you, <strong>{formData.customerName}</strong>. Your order{" "}
              <strong>{orderNumber}</strong> has been received.
            </p>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Our team will contact you at <strong>{formData.email}</strong>
              {formData.phone && (
                <>
                  {" "}
                  or <strong>{formData.phone}</strong>
                </>
              )}{" "}
              to confirm availability, payment and {formData.fulfillment === "delivery" ? "delivery" : "pickup"}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="px-6 py-2.5 rounded-md font-semibold text-sm bg-purple text-white hover:bg-purple-dark transition"
              >
                Back to Home
              </Link>
              <a
                href="tel:+254719881291"
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

  return (
    <>
      <section className="pt-20 pb-10 bg-white">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-green font-bold uppercase tracking-widest text-xs mb-3">
            Physio Shop
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-purple mb-4">
            Health &amp; Wellness Essentials
          </h1>
          <p className="text-gray-600 text-lg">
            Order online and collect from your nearest branch, or arrange
            delivery. Our team will confirm everything with you directly.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="container-custom">
          {loading ? (
            <p className="text-center text-gray-500 text-sm py-20">Loading items…</p>
          ) : items.length === 0 ? (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center">
              <p className="text-gray-600">
                Our shop is being restocked. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden"
                >
                  {item.image ? (
                    <div className="w-full h-48 bg-gray-50 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                      No image
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    {item.category && (
                      <span className="inline-block bg-purple-light text-purple text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-2 self-start">
                        {item.category}
                      </span>
                    )}
                    <h2 className="font-bold text-purple text-sm mb-1 leading-snug">
                      {item.name}
                    </h2>
                    {item.description && (
                      <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <span className="font-bold text-purple text-sm">
                        KES {item.price.toLocaleString()}
                      </span>
                      {item.inStock ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-green text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-green-dark transition"
                        >
                          Add to Order
                        </button>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-red-50 text-red-700 border border-red-200 uppercase tracking-wide">
                          Out of stock
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating cart button */}
      {cartCount > 0 && !showCart && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed bottom-6 right-6 z-40 bg-purple text-white px-5 py-3 rounded-full shadow-2xl hover:bg-purple-dark transition flex items-center gap-2"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="font-bold text-sm">{cartCount}</span>
        </button>
      )}

      {/* Cart + checkout modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 p-0 md:p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between z-10">
              <h2 className="text-lg font-bold text-purple">Your Order</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close cart"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="p-5">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-10">
                  Your order is empty.
                </p>
              ) : (
                <>
                  <ul className="space-y-3 mb-6">
                    {cart.map((line) => (
                      <li key={line.slug} className="flex items-center gap-3 border-b border-gray-100 pb-3">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-sm">{line.name}</p>
                          <p className="text-xs text-gray-500">
                            KES {line.price.toLocaleString()} each
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQuantity(line.slug, line.quantity - 1)}
                            className="w-8 h-8 rounded border border-gray-300 text-gray-600 hover:border-purple hover:text-purple"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-bold text-sm">{line.quantity}</span>
                          <button
                            onClick={() => setQuantity(line.slug, line.quantity + 1)}
                            className="w-8 h-8 rounded border border-gray-300 text-gray-600 hover:border-purple hover:text-purple"
                          >
                            +
                          </button>
                        </div>
                        <p className="w-20 text-right font-bold text-sm text-gray-800">
                          {(line.price * line.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeLine(line.slug)}
                          className="text-red-500 hover:text-red-700 text-xs"
                          aria-label={`Remove ${line.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center py-3 border-y-2 border-purple mb-6">
                    <span className="font-bold text-purple">Total</span>
                    <span className="font-bold text-purple text-lg">
                      KES {total.toLocaleString()}
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      disabled={submitting}
                      placeholder="Full Name *"
                      value={formData.customerName}
                      onChange={(e) =>
                        setFormData({ ...formData, customerName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="email"
                        required
                        disabled={submitting}
                        placeholder="Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
                      />
                      <input
                        type="tel"
                        required
                        disabled={submitting}
                        placeholder="Phone *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Fulfilment</p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, fulfillment: "pickup" })}
                          className={`px-3 py-3 rounded-lg border text-sm font-semibold transition ${
                            formData.fulfillment === "pickup"
                              ? "bg-purple text-white border-purple"
                              : "bg-white text-gray-700 border-gray-300 hover:border-purple"
                          }`}
                        >
                          Pickup from branch
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, fulfillment: "delivery" })}
                          className={`px-3 py-3 rounded-lg border text-sm font-semibold transition ${
                            formData.fulfillment === "delivery"
                              ? "bg-purple text-white border-purple"
                              : "bg-white text-gray-700 border-gray-300 hover:border-purple"
                          }`}
                        >
                          Deliver to me
                        </button>
                      </div>
                    </div>

                    {formData.fulfillment === "pickup" ? (
                      <select
                        disabled={submitting}
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple bg-white text-sm"
                      >
                        {BRANCHES.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <textarea
                        required
                        disabled={submitting}
                        placeholder="Delivery address *"
                        rows={3}
                        value={formData.deliveryAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, deliveryAddress: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none text-sm"
                      />
                    )}

                    <textarea
                      disabled={submitting}
                      placeholder="Notes (optional)"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple resize-none text-sm"
                    />

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-3 rounded-lg font-semibold text-sm transition ${
                        submitting
                          ? "bg-purple/70 text-white cursor-wait"
                          : "bg-purple text-white hover:bg-purple-dark"
                      }`}
                    >
                      {submitting ? "Submitting…" : "Place Order"}
                    </button>

                    <p className="text-[11px] text-gray-500 text-center">
                      We don't process payment online. Our team will contact you to
                      confirm the order, availability and payment.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
