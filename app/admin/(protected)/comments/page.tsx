import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function CommentsAdminPage() {
  return (
    <AdminCollectionView
      title="Blog Comments"
      description="Comments submitted on blog posts. Delete any that look like spam."
      collections={["comments"]}
      primaryFields={["name", "text", "postSlug", "createdAt"]}
      dateField="createdAt"
      searchable={["name", "email", "text", "postSlug"]}
    />
  );
}