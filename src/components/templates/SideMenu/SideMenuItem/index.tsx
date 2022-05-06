import Link from 'next/link'

interface SideMenuItemProps {
  url: string
  text: string
  icon: React.ReactNode
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({ url, text, icon }) => {
  return (
    <li className="hover:bg-gray-100">
      <Link href={url}>
        <a className="flex flex-col justify-center items-center h-20 px-4">
          {icon}
          <span className="text-xs font-light text-gray-600">{text}</span>
        </a>
      </Link>
    </li>
  )
}

export default SideMenuItem
