interface MainProps {
  children?: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="flex flex-col mt-7 px-7 dark:text-gray-300">
      {children}
    </main>
  )
}

export default Main
