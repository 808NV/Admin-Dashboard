import { cn } from "lib/utils"
import { useLocation } from "react-router"
const Header = ({title, description} : HeaderProps ) => {
  const location = useLocation();
  return (
    <header className="header flex flex-col gap-5 md:flex-row justify-between w-full">
      <article className="flex flex-col gap-3.5 w-full">
        <h1 className={cn("text-dark-100", 
          location.pathname === "/" ? "text-2xl md:text-4xl font-bold" : "text-xl md:text-2xl font-semibold" )}>
            {title}
        </h1>
        <p className={cn("text-gray-600 font-nroaml", 
          location.pathname === "/" ? "text-base md:text-lg" : "text-sm md:text-lg" )}>
            {description}
        </p>
      </article>
    </header>
  )
}

export default Header