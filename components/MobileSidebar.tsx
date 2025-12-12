import { Link } from "react-router"
import logo from "public/assets/icons/logo.svg"
import menu from "public/assets/icons/menu.svg"
import { useState } from "react";
import NavItems from "./NavItems";

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
    }
    const closeSidebar = () => {
        setIsOpen(false);
    }
  return (
    <div className="mobile-sidebar wrapper lg:hidden flex flex-col gap-5">
        <header className="flex justify-between items-center py-4 px-2">
            <Link to="./" className="flex gap-2">
                <img src={logo} alt="logo" className="size-[30px]" />

                <h1 className="md:text-2xl font-bold text-dark-100">Tourvisto</h1>
            </Link>

            <button className="cursor-pointer" onClick={toggleSidebar}>
                <img src={menu} alt="menu" className="size-[30px]" />
            </button>
        </header>

         
        {isOpen && (
            <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeSidebar}
        ></div>
      )}

        
        <aside
            className={`
            fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl
            p-6 flex flex-col gap-6 transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <button
            className="self-end text-2xl font-bold cursor-pointer mb-4"
            onClick={closeSidebar}
            >
            ✕
            </button>

            {/* Your navigation items */}
            <NavItems closeSidebar={closeSidebar} />
        </aside>
    </div>
  )
}

export default MobileSidebar