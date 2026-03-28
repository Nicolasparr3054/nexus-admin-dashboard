import { ExternalLink, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const txns = [
  { id: 'TXN-8821', user: 'Sarah Johnson', email: 'sarah@example.com', amount: '+$2,400', type: 'Subscription', status: 'completed', date: 'Mar 27, 2026', av: 'SJ', color: 'from-blue-500 to-blue-700' },
  { id: 'TXN-8820', user: 'Mark Rivera',   email: 'mark@example.com',  amount: '+$890',   type: 'One-time',     status: 'completed', date: 'Mar 27, 2026', av: 'MR', color: 'from-violet-500 to-violet-700' },
  { id: 'TXN-8819', user: 'Yuki Tanaka',   email: 'yuki@example.com',  amount: '-$320',   type: 'Refund',       status: 'refunded',  date: 'Mar 26, 2026', av: 'YT', color: 'from-emerald-500 to-emerald-700' },
  { id: 'TXN-8818', user: 'Carlos Mendez', email: 'carlos@example.com',amount: '+$4,100', type: 'Enterprise',   status: 'pending',   date: 'Mar 26, 2026', av: 'CM', color: 'from-amber-500 to-amber-600' },
  { id: 'TXN-8817', user: 'Emma Laurent',  email: 'emma@example.com',  amount: '+$1,250', type: 'Subscription', status: 'completed', date: 'Mar 25, 2026', av: 'EL', color: 'from-rose-500 to-rose-700' },
]
const sb = { completed: 'badge-green', pending: 'badge-yellow', refunded: 'badge-red' }
const statusLabel = { completed: 'Completed', pending: 'Pending', refunded: 'Refunded' }

export default function RecentTable() {
  return (
    <div className="card overflow-hidden fade-up d4">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
          <p className="text-sm text-gray-400 mt-0.5">Latest 5 transactions</p>
        </div>
        <button className="btn-ghost text-xs">View all <ExternalLink size={13} /></button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/[0.02]">
              <th className="th">Transaction</th>
              <th className="th">Customer</th>
              <th className="th hidden md:table-cell">Type</th>
              <th className="th">Amount</th>
              <th className="th">Status</th>
              <th className="th hidden lg:table-cell">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {txns.map((tx) => {
              const neg = tx.amount.startsWith('-')
              return (
                <tr key={tx.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="td"><span className="font-mono text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-lg">{tx.id}</span></td>
                  <td className="td">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${tx.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{tx.av}</div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{tx.user}</p>
                        <p className="text-xs text-gray-400 hidden sm:block">{tx.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="td hidden md:table-cell"><span className="badge-blue">{tx.type}</span></td>
                  <td className="td"><span className={`flex items-center gap-1 font-semibold text-sm ${neg ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>{neg ? <ArrowDownRight size={14}/> : <ArrowUpRight size={14}/>}{tx.amount}</span></td>
                  <td className="td"><span className={sb[tx.status]}>{statusLabel[tx.status]}</span></td>
                  <td className="td hidden lg:table-cell text-gray-400 text-xs">{tx.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
