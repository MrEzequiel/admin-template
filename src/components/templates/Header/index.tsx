import { Moon, Sun } from '../../icons'
import Title from '../Title'

interface HeaderProps {
  title: string
  subTitle: string
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  isDarkMode,
  setIsDarkMode
}) => {
  return (
    <header className="border-b-2 px-7 h-20 flex justify-between items-center dark:border-gray-800">
      <Title title={title} subTitle={subTitle} />

      <div className="flex items-center gap-3">
        <button
          className="flex items-center justify-center h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 hover:dark:bg-slate-700 hover:-translate-y-1 transition-all text-xs"
          onClick={() => setIsDarkMode(prev => !prev)}
        >
          {isDarkMode ? <Moon /> : <Sun />}
        </button>

        <p className="text-gray-600 dark:text-gray-400">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>
    </header>
  )
}

export default Header
