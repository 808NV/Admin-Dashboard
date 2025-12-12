import { Link, NavLink } from "react-router"
import logo from "public/assets/icons/logo.svg"
import logout from "public/assets/icons/logout.svg"
import { sidebarItems } from "~/constants"
import { cn } from "lib/utils"

const NavItems = () => {

    const user = {
        name: "Admin User",
        email: "admin@tourvisto",
        imgUrl: "/assets/images/david.webp",
    }

  return (
    <div className="nav-items flex flex-col px-6 h-full">
        <Link to="/" className="link-logo flex items-center gap-1.5 py-10 border-b border-light-100;">
            <img src={logo} alt="logo" 
            className="size-[30px]"/>
            <h1 className="text-base md:text-2xl font-bold text-dark-100">Tourvisto</h1>
        </Link>

        <div className="container flex flex-col justify-between h-full">
            <nav className="flex flex-col gap-3.5 pt-9">
                {sidebarItems.map(({id, icon, label, href}) => (
                    <NavLink to={href} key={id}>
                        {({isActive} : {isActive : boolean}) => (
                            <div className={cn("group nav-item hover:bg-blue-600 flex items-center gap-4 px-4 py-3 rounded-md cursor-pointer", 
                            isActive && "bg-blue-600 dark:bg-blue-800"
                            )}>

                                <img src={icon} alt={label} 
                                    className={`group-hover:brightness-0 size-5 group-hover:invert ${isActive ? "brightness-0 invert" : ""}
                                `}/>
                                
                                <span>{label}</span>
                            </div>
                            
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>

        <footer className="nav-footer flex items-center gap-2.5 pb-8">
            
           <img src={user.imgUrl} alt={`photo of ${user.name}`} className=" size-10 rounded-full aspect-square"/>
           
           <article className="flex flex-col gap-[2px] max-w-[115px]">
                <h2 className="text-sm md:text-base font-semibold text-dark-200 truncate">{user.name}</h2>
                <p className="text-gray-600 text-xs md:text-sm font-normal truncate">{user.email}</p>
           </article>

           <button className="cursor-pointer" onClick={() => console.log("logout successfully")}>
            <img src={logout} alt="lougout" />
           </button>
        </footer>
    </div>
  )
}

export default NavItems