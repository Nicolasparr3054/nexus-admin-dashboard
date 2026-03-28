import { Download, Calendar, TrendingUp, BarChart3, PieChart, FileText } from 'lucide-react'
import { RevenueChart, ActivityChart } from '../components/Charts'

const cm = {
  blue:   { bg: 'bg-blue-50 dark:bg-blue-500/10',      icon: 'text-blue-600 dark:text-blue-400' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-500/10',  icon: 'text-violet-600 dark:text-violet-400' },
  emerald:{ bg: 'bg-emerald-50 dark:bg-emerald-500/10',icon: 'text-emerald-600 dark:text-emerald-400' },
  amber:  { bg: 'bg-amber-50 dark:bg-amber-500/10',    icon: 'text-amber-600 dark:text-amber-400' },
}

const cards = [
  { title: 'Revenue Report',   desc: 'Detailed breakdown of all revenue streams',    icon: TrendingUp, color: 'blue',    updated: 'Today at 9:41 AM' },
  { title: 'User Analytics',   desc: 'Acquisition, retention and churn metrics',     icon: BarChart3,  color: 'violet',  updated: 'Today at 8:15 AM' },
  { title: 'Traffic Overview', desc: 'Sources, sessions and page performance',       icon: PieChart,   color: 'emerald', updated: 'Yesterday' },
  { title: 'Monthly Summary',  desc: 'Executive overview for March 2026',            icon: FileText,   color: 'amber',   updated: 'Mar 1, 2026' },
]

export default function Reports() {
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-sub">Analyze performance and download detailed reports.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary"><Calendar size={16} /> Date range</button>
          <button className="btn-primary"><Download size={16} /> Export all</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {cards.map((r, i) => {
          const c = cm[r.color]
          return (
            <div key={r.title} className="card p-5 hover:shadow-lg transition-shadow cursor-pointer group fade-up" style={{ animationDelay: `${i*70}ms`, opacity: 0 }}>
              <div className={`inline-flex p-2.5 rounded-xl ${c.bg} mb-4`}><r.icon size={20} className={c.icon} /></div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{r.title}</h3>
              <p className="text-xs text-gray-400 mb-4">{r.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Updated: {r.updated}</span>
                <button className="p-1.5 rounded-lg text-gray-300 dark:text-gray-600 group-hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"><Download size={14} /></button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RevenueChart />
        <ActivityChart />
      </div>
    </div>
  )
}
