import { TrendingUp, TrendingDown } from 'lucide-react'

const colorMap = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-500/10',   icon: 'text-blue-600 dark:text-blue-400' },
  emerald:{ bg: 'bg-emerald-50 dark:bg-emerald-500/10', icon: 'text-emerald-600 dark:text-emerald-400' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-500/10',  icon: 'text-violet-600 dark:text-violet-400' },
  amber:  { bg: 'bg-amber-50 dark:bg-amber-500/10',  icon: 'text-amber-600 dark:text-amber-400' },
}

export default function StatCard({ title, value, change, label, icon: Icon, color, delay = 0 }) {
  const c = colorMap[color] || colorMap.blue
  const pos = change >= 0
  return (
    <div className="card p-6 fade-up" style={{ animationDelay: `${delay}ms`, opacity: 0 }}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1.5 text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{value}</p>
        </div>
        <div className={`p-2.5 rounded-xl ${c.bg}`}>
          <Icon size={20} className={c.icon} />
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className={`flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-md ${pos ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' : 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10'}`}>
          {pos ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {pos ? '+' : ''}{change}%
        </span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
    </div>
  )
}
