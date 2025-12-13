import { Link, useLocation } from "react-router"
import markIcon from "public/assets/icons/location-mark.svg"
import { cn } from "lib/utils";

const TripsCard = ({id, name, imageUrls, location, tags, travelStyle, price}: TripsCardProps) => {
  const path = useLocation();
  return (
    <Link to={`${path.pathname === "/" || path.pathname.startsWith("/travel") ? `/travel/${id}` : `/trips/${id}`}`} className="trip-card 
    shadow-300 bg-white rounded-[20px] flex-col w-full relative">
      <img src={imageUrls} alt={name} className="s w-full h-[160px] rounded-t-xl object-cover  aspect-video"/>

      <article className="flex flex-col gap-3 mt-4 pl-[18px] pr-3.5">
        <h2 className="text-sm md:text-lg font-semibold text-dark-100 line-clamp-2">{name}</h2>
        <figure className="flex items-center gap-2">
          <img src={markIcon} alt="location" className="size-4"/>
          <figcaption className="text-xs md:text-sm font-normal text-gray-600">{location}</figcaption>
        </figure>
      </article>

      <div className="chip-section mt-5 pl-[18px] pr-3.5 pb-5">
        {tags.map((tag, index) => (
          <span key={index} className={cn("chip m-2 p-2 rounded-lg", index === 1 ? "!bg-pink-50" : "!bg-blue-100")}>{tag}</span>
        ))}
      </div>

      <article className="tripCard-pill bg-white py-1 px-2.5 w-fit rounded-[20px] absolute top-2.5 right-4 text-dark-100 text-sm font-semibold">{price}</article>  

    </Link>
  )
}

export default TripsCard