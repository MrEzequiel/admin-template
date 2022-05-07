import { Home, Logo, Logout, Notifications, Settings } from '../../icons'
import SideMenuItem from './SideMenuItem'

const SideMenu: React.FC = () => {
  return (
    <aside className="flex flex-col">
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
            onClick: () => {
              console.log('logout')
            },
            className: 'text-red-600 hover:bg-red-400 hover:text-white'
          }}
        />
      </ul>
    </aside>
  )
}

export default SideMenu
