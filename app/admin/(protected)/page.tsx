import Link from "next/link";

const cards = [
  { href: "/admin/posts", label: "Blog Posts", desc: "Create, edit, and publish articles." },
  { href: "/admin/jobs", label: "Jobs", desc: "Post and manage job vacancies." },
  { href: "/admin/comments", label: "Comments", desc: "Moderate blog comments." },
  { href: "/admin/services", label: "Services", desc: "Update service listings and descriptions." },
  { href: "/admin/conditions", label: "Conditions", desc: "Manage the conditions we treat." },
  { href: "/admin/bookings", label: "Bookings", desc: "View appointment requests." },
  { href: "/admin/messages", label: "Messages", desc: "Contact form and branch submissions." },
  { href: "/admin/leads", label: "Leads", desc: "CRM leads from ads and socials." },
  { href: "/admin/subscribers", label: "Newsletter", desc: "Email subscriber list." },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-purple mb-1">Dashboard</h1>
      <p className="text-gray-500 text-sm mb-8">
        Manage content and view incoming data.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="block bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition"
          >
            <h2 className="font-bold text-purple text-base mb-1">{c.label}</h2>
            <p className="text-gray-500 text-xs">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}