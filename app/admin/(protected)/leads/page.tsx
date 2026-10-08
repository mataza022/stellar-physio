import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function LeadsAdminPage() {
  return (
    <AdminCollectionView
      title="Leads"
      description="CRM leads from ads, social media, and other sources."
      collections={["leads"]}
      primaryFields={["name", "email", "phone", "source", "status", "createdAt"]}
      dateField="createdAt"
      searchable={["name", "email", "phone", "source", "status", "message", "notes"]}
    />
  );
}