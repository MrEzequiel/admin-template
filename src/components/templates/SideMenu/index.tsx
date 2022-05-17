import { useAuth } from '../../../Context/AuthContext'
import { Home, Logo, Logout, Notifications, Settings } from '../../icons'
import SideMenuItem from './SideMenuItem'

const SideMenu: React.FC = () => {
  const { signOut } = useAuth()

  return (
    <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700">
      <div className="h-20 w-full bg-gradient-to-r from-indigo-500 to-purple-800 flex items-center justify-center">
        <Logo style={{ fontSize: '.2rem' }} />
      </div>

      <ul className="flex-grow">
        <SideMenuItem text="Início" url="/" icon={<Home />} />
        <SideMenuItem
          text="Notificações"
          url="/notificacoes"
          icon={<Notifications />}
        />
        <SideMenuItem
          text="Configurações"
          url="/configuracoes"
          icon={<Settings />}
        />
      </ul>
      <ul>
        <SideMenuItem
          text="Sair"
          icon={<Logout />}
          anchorProps={{
            onClick: signOut,
            className: 'text-red-600 hover:bg-red-400 hover:text-white'
          }}
        />
      </ul>
    </aside>
  )
}

export default SideMenu
