import { useState } from 'react'
import { Search, UserPlus, Edit2, Trash2, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react'

const allUsers = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin',  status: 'active',   joined: 'Jan 12, 2026', av: 'SJ', color: 'from-blue-500 to-blue-700' },
  { id: 2, name: 'Mark Rivera',   email: 'mark@example.com',  role: 'Editor', status: 'active',   joined: 'Jan 28, 2026', av: 'MR', color: 'from-violet-500 to-violet-700' },
  { id: 3, name: 'Yuki Tanaka',   email: 'yuki@example.com',  role: 'Viewer', status: 'inactive', joined: 'Feb 3, 2026',  av: 'YT', color: 'from-emerald-500 to-emerald-700' },
  { id: 4, name: 'Carlos Mendez', email: 'carlos@example.com',role: 'Editor', status: 'active',   joined: 'Feb 14, 2026', av: 'CM', color: 'from-amber-500 to-amber-600' },
  { id: 5, name: 'Emma Laurent',  email: 'emma@example.com',  role: 'Admin',  status: 'active',   joined: 'Feb 22, 2026', av: 'EL', color: 'from-rose-500 to-rose-700' },
  { id: 6, name: 'James Okafor',  email: 'james@example.com', role: 'Viewer', status: 'pending',  joined: 'Mar 1, 2026',  av: 'JO', color: 'from-cyan-500 to-cyan-700' },
  { id: 7, name: 'Priya Patel',   email: 'priya@example.com', role: 'Editor', status: 'active',   joined: 'Mar 8, 2026',  av: 'PP', color: 'from-fuchsia-500 to-fuchsia-700' },
  { id: 8, name: 'David Kim',     email: 'david@example.com', role: 'Viewer', status: 'inactive', joined: 'Mar 15, 2026', av: 'DK', color: 'from-indigo-500 to-indigo-700' },
]
const sb = { active: 'badge-green', inactive: 'badge-red', pending: 'badge-yellow' }
const rb = { Admin: 'badge-blue', Editor: 'badge-violet', Viewer: 'badge-gray' }
const statusLabel = { active: 'Active', inactive: 'Inactive', pending: 'Pending' }

export default function Users() {
  const [search,   setSearch]   = useState('')
  const [role,     setRole]     = useState('All')
  const [selected, setSelected] = useState([])

  const filtered = allUsers.filter(u => {
    const ms = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
    const mr = role === 'All' || u.role === role
    return ms && mr
  })
  const toggle    = id => setSelected(p => p.includes(id) ? p.filter(i => i !== id) : [...p, id])
  const toggleAll = ()  => setSelected(selected.length === filtered.length ? [] : filtered.map(u => u.id))

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="page-title">Users</h1>
          <p className="page-sub">{allUsers.length} total members in your workspace</p>
        </div>
        <button className="btn-primary"><UserPlus size={16} /> Add User</button>
      </div>

      <div className="card p-4 mb-6 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} className="input-field pl-9 py-2" />
        </div>
        <div className="flex items-center gap-1.5">
          <Filter size={14} className="text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Role:</span>
          {['All', 'Admin', 'Editor', 'Viewer'].map(r => (
            <button key={r} onClick={() => setRole(r)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${role === r ? 'bg-brand-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
              {r}
            </button>
          ))}
        </div>
        {selected.length > 0 && (
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">{selected.length} selected</span>
            <button className="btn-danger"><Trash2 size={13} /> Delete</button>
          </div>
        )}
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-white/[0.02]">
                <th className="th w-10"><input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} className="rounded accent-brand-600 cursor-pointer" /></th>
                <th className="th">User</th>
                <th className="th hidden sm:table-cell">Role</th>
                <th className="th hidden md:table-cell">Joined</th>
                <th className="th">Status</th>
                <th className="th text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="py-12 text-center text-sm text-gray-400">No users found.</td></tr>
              ) : filtered.map(u => (
                <tr key={u.id} className={`hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors ${selected.includes(u.id) ? 'bg-brand-50/50 dark:bg-brand-500/5' : ''}`}>
                  <td className="td w-10"><input type="checkbox" checked={selected.includes(u.id)} onChange={() => toggle(u.id)} className="rounded accent-brand-600 cursor-pointer" /></td>
                  <td className="td">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${u.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>{u.av}</div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{u.name}</p>
                        <p className="text-xs text-gray-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="td hidden sm:table-cell"><span className={rb[u.role]}>{u.role}</span></td>
                  <td className="td hidden md:table-cell text-gray-400 text-xs">{u.joined}</td>
                  <td className="td"><span className={sb[u.status]}>{statusLabel[u.status]}</span></td>
                  <td className="td">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all"><Edit2 size={15} /></button>
                      <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"><Trash2 size={15} /></button>
                      <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"><MoreHorizontal size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-gray-400">Showing <span className="font-medium text-gray-600 dark:text-gray-300">{filtered.length}</span> of <span className="font-medium text-gray-600 dark:text-gray-300">{allUsers.length}</span></p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all disabled:opacity-40" disabled><ChevronLeft size={16} /></button>
            {[1,2,3].map(p => <button key={p} className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${p===1 ? 'bg-brand-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'}`}>{p}</button>)}
            <button className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
