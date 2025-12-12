import { calculateTrendPercentage } from "lib/utils";
import arrowDown from "public/assets/icons/arrow-down-red.svg";
import arrowUp from "public/assets/icons/arrow-up-green.svg";
import decrementTredn from "public/assets/icons/decrement.svg";
import incrementTrend from "public/assets/icons/increment.svg";

const StatsCard = ({title, total, currentPeriod, previousPeriod} : StatsCardProps) => {
  const {trend, percentage} = calculateTrendPercentage(currentPeriod, previousPeriod);
  const isDecrement = trend === "decrement";
  return (
    <article className="stats-card p-6 flex flex-col gap-6 bg-white shadow-400 rounded-20 text-dark-100">
      <h3 className="text-base font-medium">{title}</h3>
      
      <div className="content flex flex-row md:flex-col-reverse xl:flex-row xl:items-center gap-3 justify-between">
        <div className="flex flex-row gap-2 pb-4">
          <h2 className="text-3xl font-bold">{total}</h2>
          <div className={`flex items-center gap-1 text-sm font-medium ${isDecrement ? 'text-red-500' : 'text-green-500'}`}>
            {isDecrement ? (
              <img src={arrowDown} alt="arrow down" />
            ) : (
              <img src={arrowUp} alt="arrow up" />
            )}
            <span>{percentage.toFixed(2)}%</span>
            <span className="text-gray-600 text-small text-center">since last month</span>
          </div>
        </div>

            {/* use chart-gs to make the charts functional */}
        <img className="xl:w-32 xl:h-full w-full h-full md:h-32 md:" src={isDecrement ? `${decrementTredn}` : `${incrementTrend}`} alt="trend graph" />   

      </div>
    </article>
  )
}

export default StatsCard