import AdminCollectionView from "@/app/components/AdminCollectionView";

export default function BookingsAdminPage() {
  return (
    <AdminCollectionView
      title="Bookings"
      description="Appointment requests submitted from the website."
      collections={["bookings"]}
      primaryFields={["fullName", "service", "dateReadable", "createdAt"]}
      dateField="createdAt"
      statusField="status"
      searchable={[
        "fullName",
        "firstName",
        "lastName",
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