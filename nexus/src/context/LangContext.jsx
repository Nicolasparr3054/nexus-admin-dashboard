import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { translations } from './translations'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  const setLanguage = useCallback((l) => {
    setLang(l)
  }, [])

  const t = useCallback((section, key) => translations[lang]?.[section]?.[key] ?? key, [lang])

  const value = useMemo(() => ({ lang, setLanguage, t }), [lang, setLanguage, t])

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
