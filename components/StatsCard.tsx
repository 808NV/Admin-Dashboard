import { calculateTrendPercentage } from "lib/utils";
import arrowDown from "public/assets/icons/arrow-down-red.svg";
import arrowUp from "public/assets/icons/arrow-up-green.svg";
import decrementTredn from "public/assets/icons/decrement.svg";
import incrementTrend from "public/assets/icons/increment.svg";

const StatsCard = ({title, total, currentPeriod, previousPeriod} : StatsCardProps) => {
  return (
    <article className="stats-card p-6 flex flex-col gap-6 bg-white shadow-400 rounded-20 text-dark-100">
      <h3 className="text-base font-medium">{title}</h3>
      
      <div className="content flex flex-row md:flex-col-reverse xl:flex-row xl:items-center gap-3 justify-between">
        <div className="flex flex-row gap-2 pb-4">
          <h2 className="text-3xl font-bold">{total}</h2>
         
        </div>

        

      </div>
    </article>
  )
}

export default StatsCard