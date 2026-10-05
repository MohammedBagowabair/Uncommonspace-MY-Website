import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'ms'

type I18nCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nCtx | null>(null)

export function I18nProvider({
  dict,
  children,
}: {
  dict: Record<Lang, Record<string, string>>
  children: ReactNode
}) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    return saved === 'ms' || saved === 'en' ? saved : 'en'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
    document.documentElement.lang = l === 'ms' ? 'ms' : 'en'
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'ms' ? 'ms' : 'en'
    document.documentElement.dir = 'ltr'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string) => dict[lang][key] ?? dict.en[key] ?? key,
    }),
    [lang, dict],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n outside provider')
  return ctx
}
