import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function MessagesAdminPage() {
  return (
    <AdminCollectionView
      title="Messages"
      description="Contact form and branch enquiry submissions."
      collections={["contact", "branch_messages"]}
      primaryFields={["name", "email", "phone", "subject", "message", "createdAt"]}
      dateField="createdAt"
      searchable={["name", "email", "phone", "subject", "message", "branch"]}
    />
  );
}