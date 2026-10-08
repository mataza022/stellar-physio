import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function LeadsAdminPage() {
  return (
    <AdminCollectionView
      title="Leads"
      description="CRM leads from ads, social media, and other sources."
      collections={["leads"]}
      primaryFields={["fullName", "email", "phone", "source", "status", "createdAt"]}
      dateField="createdAt"
      statusField="status"
      searchable={[
        "fullName",
        "name",
        "email",
        "phone",
        "source",
        "status",
        "message",
        "notes",
        "interest",
      ]}
    />
  );
}