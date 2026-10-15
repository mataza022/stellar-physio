import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getDb } from "./firebase";

export type ShopItem = {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  active: boolean;
};

export type OrderItem = {
  slug: string;
  name: string;
  quantity: number;
  price: number;
};

export type ShopOrder = {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string;
  items: OrderItem[];
  total: number;
  fulfillment: "pickup" | "delivery";
  branch: string;
  deliveryAddress: string;
  notes: string;
  status: "new" | "confirmed" | "fulfilled" | "cancelled";
  createdAt: Date | null;
};

function mapItem(id: string, data: any): ShopItem {
  return {
    slug: id,
    name: data.name ?? "",
    description: data.description ?? "",
    price: Number(data.price) || 0,
    category: data.category ?? "",
    image: data.image ?? "",
    inStock: data.inStock ?? true,
    active: data.active ?? true,
  };
}

export async function getShopItems(): Promise<ShopItem[]> {
  const db = getDb();
  const snap = await getDocs(collection(db, "shop_items"));
  const items = snap.docs.map((d) => mapItem(d.id, d.data()));
  return items.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getActiveShopItems(): Promise<ShopItem[]> {
  const all = await getShopItems();
  return all.filter((i) => i.active);
}

export async function getShopItemBySlug(
  slug: string
): Promise<ShopItem | undefined> {
  const db = getDb();
  const snap = await getDoc(doc(db, "shop_items", slug));
  if (!snap.exists()) return undefined;
  return mapItem(snap.id, snap.data());
}
