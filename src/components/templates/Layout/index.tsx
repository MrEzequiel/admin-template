import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import ProtectRouter from '../../ProtectRouter'
import Header from '../Header'
import Main from '../Main'
import SideMenu from '../SideMenu'

interface LayoutProps {
  title: string
  subTitle: string
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, subTitle, children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const firstRender = useRef(true)

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode')
    if (localStorageDarkMode !== undefined && localStorageDarkMode !== null) {
      setIsDarkMode(JSON.parse(localStorageDarkMode))
    }
  }, [])

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    }

    firstRender.current = false
  }, [isDarkMode])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ProtectRouter>
        <div className={`flex h-screen w-screen ${isDarkMode && 'dark'}`}>
          <SideMenu />

          <div className="flex w-full flex-col bg-gray-100 dark:bg-slate-900">
            <Header
              title={title}
              subTitle={subTitle}
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
            />

            <Main>{children}</Main>
          </div>
        </div>
      </ProtectRouter>
    </>
  )
}

export default Layout
