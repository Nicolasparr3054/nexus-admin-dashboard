import { useState } from 'react'
import { Zap, Eye, EyeOff, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [pass,  setPass]  = useState('')
  const [show,  setShow]  = useState(false)
  const [keep,  setKeep]  = useState(false)
  const { theme, toggle } = useTheme()

  const submit = (e) => { e.preventDefault(); if (email && pass) onLogin() }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="fixed top-4 right-4 flex items-center gap-2">
        <button onClick={toggle} className="p-2.5 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Nexus</span>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-sm text-gray-400 mb-8">Sign in to your admin account to continue.</p>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="label">Email address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="admin@nexus.io" className="input-field" required />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="label mb-0">Password</label>
                <button type="button" className="text-xs text-brand-400 hover:text-brand-300 font-medium transition-colors">Forgot password?</button>
              </div>
              <div className="relative">
                <input type={show ? 'text' : 'password'} value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" className="input-field pr-11" required />
                <button type="button" onClick={() => setShow(s => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input type="checkbox" checked={keep} onChange={e => setKeep(e.target.checked)} className="rounded accent-brand-600 w-4 h-4 cursor-pointer" />
              <span className="text-sm text-gray-300">Keep me signed in</span>
            </label>
            <button type="submit" className="btn-primary w-full justify-center py-3 text-base">Sign in →</button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            By signing in you accept our{' '}
            <span className="text-brand-400 cursor-pointer hover:text-brand-300">Terms of Service</span>
            {' '}and{' '}
            <span className="text-brand-400 cursor-pointer hover:text-brand-300">Privacy Policy</span>
          </p>
        </div>
        <div className="mt-4 text-center p-3 bg-brand-500/10 border border-brand-500/20 rounded-xl">
          <p className="text-xs text-brand-300"><span className="font-semibold">Demo:</span> Enter any email and password to access the dashboard</p>
        </div>
      </div>
    </div>
  )
}
