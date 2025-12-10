import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div>
      <div>Admin-Layout</div>
      <div>This is the admin layout</div>
      <Outlet />
    </div>
  )
}

export default AdminLayout