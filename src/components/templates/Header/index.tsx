import Image from 'next/image'
import { useAuth } from '../../../Context/AuthContext'
import { Moon, Sun, User } from '../../icons'
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
  const { user } = useAuth()

  return (
    <header className="border-b-2 px-7 h-20 flex justify-between items-center dark:border-gray-800">
      <Title title={title} subTitle={subTitle} />

      <div className="flex items-center gap-3">
        <p className="text-gray-600 dark:text-gray-400">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </p>

        <button
          className="flex items-center justify-center h-10 w-10 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300 hover:dark:bg-slate-700 hover:-translate-y-1 transition-all text-xs"
          onClick={() => setIsDarkMode(prev => !prev)}
        >
          {isDarkMode ? <Moon /> : <Sun />}
        </button>

        {user && (
          <div className="ml-2 flex items-center gap-3 px-4 py-2 rounded-full dark:bg-slate-800 bg-slate-50 shadow-lg">
            <p className="text-gray-500 dark:text-gray-300 ">{user.name}</p>

            {user.image ? (
              <Image
                src={user.image}
                alt={user.name + ' foto de perfil'}
                width={30}
                height={30}
                quality={100}
                priority
                className="rounded-full"
              />
            ) : (
              <div className="rounded-full w-7 h-7 flex items-center justify-center p-1 bg-slate-100 dark:bg-slate-700">
                <User className="stroke-slate-600 dark:stroke-slate-200" />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
