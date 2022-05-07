import Header from '../Header'
import Main from '../Main'
import SideMenu from '../SideMenu'

interface LayoutProps {
  title: string
  subTitle: string
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, subTitle, children }) => {
  return (
    <div className="flex h-screen w-screen">
      <SideMenu />

      <div className="flex w-full flex-col bg-gray-100 dark:bg-slate-900">
        <Header title={title} subTitle={subTitle} />
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default Layout
