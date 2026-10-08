import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function MessagesAdminPage() {
  return (
    <AdminCollectionView
      title="Messages"
      description="Contact form and branch enquiry submissions."
      collections={["contact", "branch_messages"]}
      primaryFields={["fullName", "service", "message", "createdAt"]}
      dateField="createdAt"
      statusField="status"
      searchable={[
        "fullName",
        "email",
        "phone",
        "message",
        "service",
        "branch",
        "source",
        "status",
      ]}
    />
  );
}