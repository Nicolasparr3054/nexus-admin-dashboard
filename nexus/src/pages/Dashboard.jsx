import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import StatCard from '../components/StatCard'
import { RevenueChart, ActivityChart } from '../components/Charts'
import RecentTable from '../components/RecentTable'

const stats = [
  { title: 'Total Users',    value: '24,521', change: 12.5,  icon: Users,        color: 'blue',    delay: 50  },
  { title: 'Total Revenue',  value: '$94,210',change: 8.2,   icon: DollarSign,   color: 'emerald', delay: 100 },
  { title: 'New Orders',     value: '1,892',  change: -3.1,  icon: ShoppingCart, color: 'violet',  delay: 150 },
  { title: 'Growth Rate',    value: '18.4%',  change: 5.7,   icon: TrendingUp,   color: 'amber',   delay: 200 },
]

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-sub">Welcome back, Admin — here's what's happening today.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {stats.map(s => <StatCard key={s.title} {...s} label="vs last month" />)}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-8">
        <RevenueChart />
        <ActivityChart />
      </div>
      <RecentTable />
    </div>
  )
}
