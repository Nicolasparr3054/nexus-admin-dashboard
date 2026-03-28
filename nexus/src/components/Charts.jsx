import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const revenue = [
  { month: 'Jan', revenue: 31200, expenses: 18400 },
  { month: 'Feb', revenue: 40800, expenses: 22100 },
  { month: 'Mar', revenue: 36900, expenses: 19800 },
  { month: 'Apr', revenue: 51200, expenses: 28600 },
  { month: 'May', revenue: 48700, expenses: 25300 },
  { month: 'Jun', revenue: 62100, expenses: 31200 },
  { month: 'Jul', revenue: 58400, expenses: 29800 },
  { month: 'Aug', revenue: 71300, expenses: 34100 },
]
const activity = [
  { day: 'Mon', newUsers: 124, active: 843 },
  { day: 'Tue', newUsers: 189, active: 921 },
  { day: 'Wed', newUsers: 143, active: 875 },
  { day: 'Thu', newUsers: 232, active: 1102 },
  { day: 'Fri', newUsers: 198, active: 987 },
  { day: 'Sat', newUsers: 87,  active: 643 },
  { day: 'Sun', newUsers: 64,  active: 512 },
]

const Tip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-lg">
      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{label}</p>
      {payload.map((e, i) => (
        <p key={i} className="text-sm font-medium" style={{ color: e.color }}>
          {e.name}: {e.value > 999 ? `$${e.value.toLocaleString()}` : e.value.toLocaleString()}
        </p>
      ))}
    </div>
  )
}

export function RevenueChart() {
  return (
    <div className="card p-6 fade-up d3">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Revenue Overview</h3>
          <p className="text-sm text-gray-400 mt-0.5">Monthly revenue vs expenses</p>
        </div>
        <select className="text-xs bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer">
          <option>Last 8 months</option>
          <option>Last year</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={revenue} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#2563eb" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#10b981" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.06} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} />
          <Tooltip content={<Tip />} />
          <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
          <Area type="monotone" dataKey="revenue"  name="Revenue"  stroke="#2563eb" strokeWidth={2.5} fill="url(#gr)" dot={false} activeDot={{ r: 5, strokeWidth: 0 }} />
          <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#10b981" strokeWidth={2.5} fill="url(#ge)" dot={false} activeDot={{ r: 5, strokeWidth: 0 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function ActivityChart() {
  return (
    <div className="card p-6 fade-up d4">
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 dark:text-white">User Activity</h3>
        <p className="text-sm text-gray-400 mt-0.5">New vs active users this week</p>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={activity} margin={{ top: 5, right: 5, left: -20, bottom: 0 }} barSize={16} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.06} vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: 'currentColor', opacity: 0.5 }} axisLine={false} tickLine={false} />
          <Tooltip content={<Tip />} />
          <Legend iconType="circle" iconSize={6} wrapperStyle={{ fontSize: '12px', paddingTop: '12px' }} />
          <Bar dataKey="newUsers" name="New Users"    fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="active"   name="Active Users" fill="#dbeafe" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
