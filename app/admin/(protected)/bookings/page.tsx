import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function BookingsAdminPage() {
  return (
    <AdminCollectionView
      title="Bookings"
      description="Appointment requests submitted from the website."
      collections={["bookings"]}
      primaryFields={["name", "email", "phone", "service", "preferredDate", "createdAt"]}
      dateField="createdAt"
      searchable={["name", "email", "phone", "service", "branch", "message", "notes"]}
    />
  );
}