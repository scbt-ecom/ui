import { createContext, useMemo, useState } from 'react'

type SeoTabContextProps = {
  activeTab: string | null
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>
}

export const SeoTabContext = createContext<SeoTabContextProps>({} as SeoTabContextProps)

type ProviderProps = {
  children: React.ReactNode
}

export const SeoTabsProvider = ({ children }: ProviderProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const contextValue = useMemo<SeoTabContextProps>(() => ({ activeTab, setActiveTab }), [activeTab])

  return <SeoTabContext.Provider value={contextValue}>{children}</SeoTabContext.Provider>
}
