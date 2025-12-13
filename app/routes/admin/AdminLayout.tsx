import { MobileSidebar, NavItems } from "components"
import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="admin-layout flex flex-col lg:flex-row h-screen w-full">
        <MobileSidebar />
        
        <aside className="w-full max-w-[270px] hidden lg:block">
          <NavItems />
        </aside>

        <aside className="children w-full h-full bg-light-200 pt-12 lg:pt-10 bg-gray-100">
          <Outlet />
        </aside>
    </div>
  )
}

export default AdminLayout