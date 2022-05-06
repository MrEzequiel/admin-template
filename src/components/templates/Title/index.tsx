interface TitleProps {
  title: string
  subTitle: string
}

const Title: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="font-extrabold text-3xl text-gray-900">{title}</h1>
      <h2 className="font-light text-sm text-gray-600">{subTitle}</h2>
    </div>
  )
}

export default Title
