"use client";

import { Fragment, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { getDb } from "@/lib/firebase";

type OrderItem = { slug: string; name: string; quantity: number; price: number };

type Order = {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  items: OrderItem[];
  total: number;
  fulfillment: string;
  branch: string;
  deliveryAddress: string;
  notes: string;
  status: string;
  createdAt: Date | null;
};

const STATUS_STYLES: Record<string, string> = {
  new: "bg-yellow-100 text-yellow-800 border-yellow-200",
  confirmed: "bg-blue-100 text-blue-800 border-blue-200",
  fulfilled: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-gray-100 text-gray-700 border-gray-200",
};

function relTime(d: Date | null): string {
  if (!d) return "—";
  const diff = Date.now() - d.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function AdminShopOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "new" | "confirmed" | "fulfilled" | "cancelled">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const db = getDb();
      const snap = await getDocs(collection(db, "shop_orders"));
      const list: Order[] = snap.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          orderNumber: data.orderNumber ?? "",
          customerName: data.customerName ?? "",
          email: data.email ?? "",
          phone: data.phone ?? "",
          items: data.items ?? [],
          total: Number(data.total) || 0,
          fulfillment: data.fulfillment ?? "pickup",
          branch: data.branch ?? "",
          deliveryAddress: data.deliveryAddress ?? "",
          notes: data.notes ?? "",
          status: data.status ?? "new",
          createdAt: data.createdAt?.toDate?.() ?? null,
        };
      });
      list.sort((a, b) => (b.createdAt?.getTime() ?? 0) - (a.createdAt?.getTime() ?? 0));
      setOrders(list);
    } catch (err) {
      console.error(err);
      alert("Could not load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const updateStatus = async (order: Order, status: string) => {
    setBusyId(order.id);
    try {
      const db = getDb();
      await updateDoc(doc(db, "shop_orders", order.id), {
        status,
        updatedAt: serverTimestamp(),
      });
      setOrders((prev) =>
        prev.map((o) => (o.id === order.id ? { ...o, status } : o))
      );
    } catch (err) {
      console.error(err);
      alert("Update failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (order: Order) => {
    if (!confirm(`Delete order ${order.orderNumber}? This cannot be undone.`)) return;
    setBusyId(order.id);
    try {
      const db = getDb();
      await deleteDoc(doc(db, "shop_orders", order.id));
      setOrders((prev) => prev.filter((o) => o.id !== order.id));
    } catch (err) {
      console.error(err);
      alert("Delete failed: " + (err instanceof Error ? err.message : "Unknown"));
    } finally {
      setBusyId(null);
    }
  };

  const counts = {
    all: orders.length,
    new: orders.filter((o) => o.status === "new").length,
    confirmed: orders.filter((o) => o.status === "confirmed").length,
    fulfilled: orders.filter((o) => o.status === "fulfilled").length,
    cancelled: orders.filter((o) => o.status === "cancelled").length,
  };

  const filtered = orders.filter((o) => {
    if (filter !== "all" && o.status !== filter) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return [o.orderNumber, o.customerName, o.email, o.phone].join(" ").toLowerCase().includes(q);
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple">Shop Orders</h1>
        <p className="text-gray-500 text-sm">
          Orders placed through the Physio Shop page.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {(["all", "new", "confirmed", "fulfilled", "cancelled"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
              filter === f
                ? "bg-purple text-white border-purple"
                : "bg-white text-gray-700 border-gray-200 hover:border-purple"
            }`}
          >
            {f[0].toUpperCase() + f.slice(1)} ({counts[f]})
          </button>
        ))}
        <input
          type="search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-auto px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-purple text-sm w-full sm:w-56"
        />
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm">Loading…</p>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
          <p className="text-gray-500 text-sm">
            {orders.length === 0
              ? "No orders yet. When customers place orders on the shop page, they'll appear here."
              : "No orders match this filter."}
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[760px]">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-4 py-3 font-semibold">Order</th>
                  <th className="px-4 py-3 font-semibold">Customer</th>
                  <th className="px-4 py-3 font-semibold">Items</th>
                  <th className="px-4 py-3 font-semibold">Total</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">When</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((o) => {
                  const statusCls = STATUS_STYLES[o.status] ?? STATUS_STYLES.new;
                  const busy = busyId === o.id;
                  const isOpen = openId === o.id;
                  return (
                    <Fragment key={o.id}>
                      <tr
                        className="border-b border-gray-100 hover:bg-gray-50/50 cursor-pointer"
                        onClick={() => setOpenId(isOpen ? null : o.id)}
                      >
                        <td className="px-4 py-3 align-top">
                          <p className="font-bold text-purple text-xs font-mono">
                            {o.orderNumber}
                          </p>
                          <p className="text-[10px] text-gray-400 uppercase">
                            {o.fulfillment}
                          </p>
                        </td>
                        <td className="px-4 py-3 align-top">
                          <p className="font-semibold text-gray-800 text-sm">
                            {o.customerName}
                          </p>
                          <p className="text-[11px] text-gray-500">{o.email}</p>
                          <p className="text-[11px] text-gray-500">{o.phone}</p>
                        </td>
                        <td className="px-4 py-3 align-top text-xs text-gray-600">
                          {o.items.length} {o.items.length === 1 ? "item" : "items"}
                        </td>
                        <td className="px-4 py-3 align-top font-bold text-gray-800 text-sm">
                          KES {o.total.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 align-top">
                          <span
                            className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${statusCls}`}
                          >
                            {o.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 align-top text-xs text-gray-500 whitespace-nowrap">
                          {relTime(o.createdAt)}
                        </td>
                        <td className="px-4 py-3 align-top text-right whitespace-nowrap">
                          {o.status === "new" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(o, "confirmed");
                              }}
                              disabled={busy}
                              className="text-blue-600 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Confirm
                            </button>
                          )}
                          {o.status === "confirmed" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(o, "fulfilled");
                              }}
                              disabled={busy}
                              className="text-green-700 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Fulfilled
                            </button>
                          )}
                          {o.status !== "cancelled" && o.status !== "fulfilled" && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(o, "cancelled");
                              }}
                              disabled={busy}
                              className="text-orange-600 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Cancel
                            </button>
                          )}
                          {o.status === "cancelled" || o.status === "fulfilled" ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                updateStatus(o, "new");
                              }}
                              disabled={busy}
                              className="text-gray-500 font-semibold text-xs hover:underline mr-3 disabled:opacity-50"
                            >
                              Reset
                            </button>
                          ) : null}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(o);
                            }}
                            disabled={busy}
                            className="text-red-600 font-semibold text-xs hover:underline disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {isOpen && (
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <td colSpan={7} className="px-4 py-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                              <div>
                                <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-1">
                                  Items ordered
                                </p>
                                <ul className="space-y-1">
                                  {o.items.map((it, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex justify-between gap-4">
                                      <span>
                                        {it.name} × {it.quantity}
                                      </span>
                                      <span className="font-semibold">
                                        KES {(it.price * it.quantity).toLocaleString()}
                                      </span>
                                    </li>
                                  ))}
                                  <li className="text-sm font-bold text-purple pt-2 border-t border-gray-200 flex justify-between">
                                    <span>Total</span>
                                    <span>KES {o.total.toLocaleString()}</span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-1">
                                  Fulfilment
                                </p>
                                {o.fulfillment === "delivery" ? (
                                  <p className="text-sm text-gray-700 mb-3">
                                    <strong>Delivery to:</strong> {o.deliveryAddress || "—"}
                                  </p>
                                ) : (
                                  <p className="text-sm text-gray-700 mb-3">
                                    <strong>Pickup from:</strong> {o.branch || "—"}
                                  </p>
                                )}
                                {o.notes && (
                                  <>
                                    <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold mb-1">
                                      Customer notes
                                    </p>
                                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                                      {o.notes}
                                    </p>
                                  </>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
