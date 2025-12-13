import { Header, StatsCard, TripsCard } from "components"

const Dashboard = () => {
  const user = {name: "Admin User"};
  const dashboardStats = {
    totalTrips: 1200,
    totalUsers: 350,
    userGrowth: {lastMonth: 230, currentMonth: 250},
    tripsCreated: {lastMonth: 400, currentMonth: 450},
    userActivity: {total: 430, lastMOnth: 150, currentMOnth: 180}
  }

  const {totalTrips, totalUsers, userGrowth, tripsCreated, userActivity} = dashboardStats;

  const allTrips = [{
      id: 1,
      name: "Tropical Rewind",
      imageUrls: ["/assets/images/sample1.jpg"],
      itinerary: [{ location: "Thailand" }],
      tags: ["Adventure", "Culture"],
      travelStyle: "Solo",
      estimatedPrice: "$1,000",
    },
    {
      id: 2,
      name: "French Reverie",
      imageUrls: ["/assets/images/sample2.jpg"],
      itinerary: [{ location: "Paris" }],
      tags: ["Relaxation", "Culinary"],
      travelStyle: "Family",
      estimatedPrice: "$2,000",
    },
    {
      id: 3,
      name: "Zen Break",
      imageUrls: ["/assets/images/sample3.jpg"],
      itinerary: [{ location: "Japan" }],
      tags: ["Shopping", "Luxury"],
      travelStyle: "Couple",
      estimatedPrice: "$3,000",
    },
    {
      id: 4,
      name: "Adventure in Westeros",
      imageUrls: ["/assets/images/sample4.jpg"],
      itinerary: [{ location: "Croatia" }],
      tags: ["Historical", "Culture"],
      travelStyle: "Friends",
      estimatedPrice: "$4,000",
    },
    ];

  return (
    <main className="dashboard wrapper w-full max-w-7xl mx-auto px-4 lg:px-8">
      <Header 
        title={user?.name ?? "Guest"} 
        description={"track activity, trend, and popular destinations in real tiem"} 
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard 
            title="Total Users"
            total={totalUsers}
            currentPeriod={userGrowth.currentMonth}
            previousPeriod={userGrowth.lastMonth}
          />
          <StatsCard 
            title="Total Trips"
            total={totalTrips}
            currentPeriod={tripsCreated.currentMonth}
            previousPeriod={tripsCreated.lastMonth}
          />
          <StatsCard 
            title="Total Revenue"
            total={userActivity.total}
            currentPeriod={userActivity.currentMOnth}
            previousPeriod={userActivity.lastMOnth}
          />
        </div>
      </section>
      
      <section className="container flex flex-col gap-5 mt-2.5 bg-gray-100">
        <h1 className="text-xl font-semibold text-black">Created Trips</h1>

        <div className="grid-trips grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, travelStyle, estimatedPrice}) => (
            <TripsCard
              key={id}
              id={id.toString()}
              name={name}
              imageUrls={imageUrls[0]}
              location={itinerary?.[0]?.location || "Unknown"}
              tags={tags}
              travelStyle={travelStyle}
              price={estimatedPrice}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Dashboard