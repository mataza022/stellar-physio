import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function SubscribersAdminPage() {
  return (
    <AdminCollectionView
      title="Newsletter Subscribers"
      description="People who signed up via the footer newsletter form."
      collections={["newsletter_subscribers"]}
      primaryFields={["email", "source", "status", "createdAt"]}
      dateField="createdAt"
      searchable={["email", "source", "status"]}
    />
  );
}