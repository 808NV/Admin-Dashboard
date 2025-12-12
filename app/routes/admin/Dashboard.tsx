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

  return (
    <main className="dashboard wrapper w-full max-w-7xl mx-auto px-4 lg:px-8">
      <Header 
        title={user?.name ?? "Guest"} 
        description={"track activity, trend, and popular destinations in real tiem"} 
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap6 w-full">
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
      <TripsCard />
    </main>
  )
}

export default Dashboard