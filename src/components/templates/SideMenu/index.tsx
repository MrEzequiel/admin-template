import { Home, Notifications, Settings } from '../../icons'
import Title from '../Title'
import SideMenuItem from './SideMenuItem'

interface SideMenuProps {
  title: string
  subTitle: string
}

const SideMenu: React.FC<SideMenuProps> = ({ title, subTitle }) => {
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
