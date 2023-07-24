import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";

function Admin() {
  return <div>Admin</div>;
}

export default Admin;

Admin.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
