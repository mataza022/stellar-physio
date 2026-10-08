import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function BookingsAdminPage() {
  return (
    <AdminCollectionView
      title="Bookings"
      description="Appointment requests submitted from the website."
      collections={["bookings"]}
      primaryFields={[
        "name",
        "email",
        "phone",
        "service",
        "dateReadable",
        "submitted",
      ]}
      dateField="submitted"
      statusField="status"
      searchable={[
        "name",
        "email",
        "phone",
        "service",
        "location",
        "customServiceDescription",
        "date",
        "dateReadable",
      ]}
    />
  );
}