import { useState } from 'react'
import { User, Lock, Bell, Globe, Save, Camera, Trash2, Shield } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

function Profile() {
  const [saved, setSaved] = useState(false)
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500) }
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Profile Picture</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Update your avatar and personal details.</p>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-2xl font-bold shadow-md">A</div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-brand-600 hover:bg-brand-700 rounded-lg flex items-center justify-center text-white shadow-sm transition-all"><Camera size={13} /></button>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary text-sm">Upload photo</button>
            <button className="btn-ghost text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"><Trash2 size={14} /> Remove</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div><label className="label">First name</label><input type="text" defaultValue="Admin" className="input-field" /></div>
          <div><label className="label">Last name</label><input type="text" defaultValue="User" className="input-field" /></div>
          <div className="sm:col-span-2"><label className="label">Email address</label><input type="email" defaultValue="admin@nexus.io" className="input-field" /></div>
          <div className="sm:col-span-2"><label className="label">Bio</label><textarea rows={3} className="input-field resize-none" defaultValue="Platform administrator with full system access." /></div>
          <div><label className="label">Role</label><select className="input-field"><option>Administrator</option><option>Editor</option><option>Viewer</option></select></div>
          <div><label className="label">Timezone</label><select className="input-field"><option>UTC-5 (Eastern Time)</option><option>UTC-8 (Pacific Time)</option><option>UTC+0 (GMT)</option><option>UTC-5 (COT — Bogotá)</option></select></div>
        </div>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <button onClick={save} className="btn-primary"><Save size={16} />{saved ? 'Saved!' : 'Save changes'}</button>
        <button className="btn-secondary">Cancel</button>
        {saved && <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">✓ Profile updated successfully</span>}
      </div>
    </div>
  )
}

function Security() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Change Password</h3>
        <div className="max-w-md space-y-4">
          <div><label className="label">Current password</label><input type="password" placeholder="••••••••" className="input-field" /></div>
          <div><label className="label">New password</label><input type="password" placeholder="••••••••" className="input-field" /><p className="text-xs text-gray-400 mt-1.5">Min 8 characters, include a number and symbol.</p></div>
          <div><label className="label">Confirm new password</label><input type="password" placeholder="••••••••" className="input-field" /></div>
          <button className="btn-primary">Update password</button>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Two-Factor Authentication</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Add an extra layer of security to your account.</p>
        <div className="card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10"><Shield size={18} className="text-emerald-600 dark:text-emerald-400" /></div>
            <div><p className="text-sm font-medium text-gray-900 dark:text-white">Authenticator App</p><p className="text-xs text-gray-400">Use Google or Authy to generate codes</p></div>
          </div>
          <button className="btn-primary text-sm">Enable 2FA</button>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div>
        <h3 className="font-semibold text-red-600 dark:text-red-400 mb-1">Danger Zone</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Irreversible and destructive actions.</p>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"><Trash2 size={15} /> Delete Account</button>
      </div>
    </div>
  )
}

function Notifications() {
  const [s, setS] = useState({ email: true, push: false, weekly: true, newUsers: true, payments: true, system: false })
  const T = ({ id, label, desc }) => (
    <div className="flex items-start justify-between py-4 border-b border-gray-200 dark:border-gray-800 last:border-0">
      <div><p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>{desc && <p className="text-xs text-gray-400 mt-0.5">{desc}</p>}</div>
      <button onClick={() => setS(p => ({ ...p, [id]: !p[id] }))} className={`relative w-11 h-6 rounded-full transition-all duration-200 shrink-0 ml-4 ${s[id] ? 'bg-brand-600' : 'bg-gray-200 dark:bg-white/10'}`}>
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${s[id] ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  )
  return (
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Notification Preferences</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Choose what you want to be notified about.</p>
      <div className="card px-6">
        <T id="email"    label="Email alerts"            desc="Receive important alerts via email" />
        <T id="push"     label="Push notifications"      desc="Browser push notifications" />
        <T id="weekly"   label="Weekly digest"           desc="Summary of activity every Monday" />
        <T id="newUsers" label="New user registrations"  desc="Notify when someone joins" />
        <T id="payments" label="Payment events"          desc="Successful charges, refunds, disputes" />
        <T id="system"   label="System alerts"           desc="Critical system events and downtime" />
      </div>
    </div>
  )
}

function Preferences() {
  const { theme, toggle } = useTheme()
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Appearance</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { id: 'light',  label: 'Light',  desc: 'Clean white interface' },
            { id: 'dark',   label: 'Dark',   desc: 'Easy on the eyes' },
            { id: 'system', label: 'System', desc: 'Follow OS preference' },
          ].map(th => (
            <button key={th.id} onClick={() => { if (th.id !== 'system') toggle() }} className={`p-4 rounded-xl border-2 text-left transition-all ${th.id === theme ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-white/20'}`}>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{th.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{th.desc}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800" />
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Language & Region</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
          <div><label className="label">Language</label><select className="input-field"><option>English (US)</option></select></div>
          <div><label className="label">Currency</label><select className="input-field"><option>USD ($)</option><option>EUR (€)</option><option>COP ($)</option></select></div>
        </div>
      </div>
      <button className="btn-primary"><Save size={16} /> Save preferences</button>
    </div>
  )
}

const tabs = [
  { id: 'profile',       label: 'Profile',       icon: User  },
  { id: 'security',      label: 'Security',      icon: Lock  },
  { id: 'notifications', label: 'Notifications', icon: Bell  },
  { id: 'preferences',   label: 'Preferences',   icon: Globe },
]
const content = { profile: Profile, security: Security, notifications: Notifications, preferences: Preferences }

export default function Settings() {
  const [tab, setTab] = useState('profile')
  const Content = content[tab]
  return (
    <div>
      <div className="mb-8">
        <h1 className="page-title">Settings</h1>
        <p className="page-sub">Manage your account and platform preferences.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-56 shrink-0">
          <div className="card p-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setTab(id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1 last:mb-0 ${tab === id ? 'bg-brand-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'}`}>
                <Icon size={17} />{label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 card p-6 lg:p-8"><Content /></div>
      </div>
    </div>
  )
}
