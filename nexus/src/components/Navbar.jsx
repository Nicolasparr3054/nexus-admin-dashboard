import { Bell, Search, Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Navbar({ collapsed, title }) {
  const { theme, toggle } = useTheme()

  return (
    <header className={`fixed top-0 right-0 z-20 h-16 flex items-center gap-4 px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${collapsed ? 'left-[72px]' : 'left-[260px]'}`}>
      <div className="text-base font-bold text-gray-900 dark:text-white tracking-tight hidden sm:block">
        {title}
      </div>

      <div className="flex-1 max-w-sm mx-4 hidden md:block">
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search anything..." className="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-500 focus:bg-white dark:focus:bg-white/10 rounded-xl outline-none transition-all placeholder-gray-400 text-gray-700 dark:text-gray-200" />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button onClick={toggle} className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="relative p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
        </button>
        <button className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xs font-bold">A</div>
          <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white">Admin</span>
          <ChevronDown size={14} className="text-gray-400" />
        </button>
      </div>
    </header>
  )
}
