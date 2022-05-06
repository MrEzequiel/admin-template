interface HeaderProps {
  title: string
  subTitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
