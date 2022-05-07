import Link from 'next/link'
import { useRouter } from 'next/router'

interface SideMenuItemProps {
  text: string
  icon: React.ReactNode
  url?: string
  anchorProps?: React.HTMLProps<HTMLAnchorElement>
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  text,
  icon,
  url,
  anchorProps: { className, ...anchorProps } = {}
}) => {
  const { pathname } = useRouter()

  const renderLink = () => (
    <a
      className={
        'flex flex-col justify-center items-center h-20 px-4 cursor-pointer text-gray-600 transition-all dark:text-gray-200 ' +
        className
      }
      {...anchorProps}
    >
      {icon}
      <span className="text-xs font-light ">{text}</span>
    </a>
  )

  return (
    <li
      className={`hover:bg-slate-100 hover:dark:bg-slate-700 transition-all  ${
        pathname === url && 'bg-slate-200 dark:bg-slate-800'
      }`}
    >
      {url ? <Link href={url}>{renderLink()}</Link> : renderLink()}
    </li>
  )
}

export default SideMenuItem
