import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const pages = {
  dashboard: { component: Dashboard, title: 'Dashboard' },
  users:     { component: Users,     title: 'Users' },
  reports:   { component: Reports,   title: 'Reports' },
  settings:  { component: Settings,  title: 'Settings' },
}

function AdminLayout({ onLogout }) {
  const [page,      setPage]      = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)
  const { component: Page, title } = pages[page] || pages.dashboard

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar page={page} onNav={setPage} collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} onLogout={onLogout} />
      <Navbar collapsed={collapsed} title={title} />
      <main className={`pt-16 min-h-screen transition-all duration-300 ${collapsed ? 'pl-[72px]' : 'pl-[260px]'}`}>
        <div className="max-w-7xl mx-auto p-6 lg:p-8"><Page /></div>
      </main>
    </div>
  )
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <ThemeProvider>
      {loggedIn ? <AdminLayout onLogout={() => setLoggedIn(false)} /> : <Login onLogin={() => setLoggedIn(true)} />}
    </ThemeProvider>
  )
}
