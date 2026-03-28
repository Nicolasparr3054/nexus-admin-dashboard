import { LayoutDashboard, Users, BarChart3, Settings, Zap, ChevronLeft, ChevronRight, Bell, HelpCircle, LogOut } from 'lucide-react'

const navMain = [
  { id: 'dashboard', label: 'Dashboard',    icon: LayoutDashboard },
  { id: 'users',     label: 'Users',        icon: Users },
  { id: 'reports',   label: 'Reports',      icon: BarChart3 },
  { id: 'settings',  label: 'Settings',     icon: Settings },
]
const navSec = [
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'help',          label: 'Help & Support', icon: HelpCircle },
]

export default function Sidebar({ page, onNav, collapsed, onToggle, onLogout }) {
  return (
    <aside className={`fixed top-0 left-0 h-full z-30 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-[260px]'}`}>
      <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center justify-center w-9 h-9 bg-brand-600 rounded-xl shadow-sm shrink-0">
          <Zap size={18} className="text-white" />
        </div>
        {!collapsed && <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Nexus</span>}
        <button onClick={onToggle} className="ml-auto p-1.5 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1">
        {!collapsed && <p className="px-3 mb-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Main Menu</p>}
        {navMain.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => onNav(id)} className={page === id ? 'nav-active' : 'nav-inactive'} style={collapsed ? { justifyContent: 'center' } : {}} title={collapsed ? label : undefined}>
            <Icon size={18} className="shrink-0" />
            {!collapsed && <span>{label}</span>}
            {!collapsed && page === id && <span className="ml-auto w-1.5 h-1.5 bg-white/60 rounded-full" />}
          </button>
        ))}
        {!collapsed && <p className="px-3 mt-6 mb-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Support</p>}
        {collapsed && <div className="my-3 border-t border-gray-200 dark:border-gray-800" />}
        {navSec.map(({ id, label, icon: Icon }) => (
          <button key={id} className="nav-inactive" style={collapsed ? { justifyContent: 'center' } : {}} title={collapsed ? label : undefined}>
            <Icon size={18} className="shrink-0" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>

      <div className={`px-3 py-4 border-t border-gray-200 dark:border-gray-800 shrink-0 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <button className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xs font-bold">A</div>
          </button>
        ) : (
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-bold shrink-0">A</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">Admin User</p>
              <p className="text-xs text-gray-400 truncate">admin@nexus.io</p>
            </div>
            <button onClick={onLogout} className="p-1 rounded-lg text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
              <LogOut size={15} />
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
