import Title from '../Title'

interface HeaderProps {
  title: string
  subTitle: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <header className="border-b-2 px-7 h-20 flex justify-between items-center">
      <Title title={title} subTitle={subTitle} />
    </header>
  )
}

export default Header
