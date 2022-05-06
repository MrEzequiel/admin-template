import Title from '../Title'

interface HeaderProps {
  title: string
  subTitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <header>
      <Title title={title} subTitle={subTitle} />
    </header>
  )
}

export default Header
