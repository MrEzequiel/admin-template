import { Home, Notifications, Settings } from '../../icons'
import SideMenuItem from './SideMenuItem'

const SideMenu: React.FC = () => {
  return (
    <aside>
      <ul>
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
    </aside>
  )
}

export default SideMenu
