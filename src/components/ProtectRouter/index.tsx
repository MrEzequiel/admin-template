import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { useAuth } from '../../Context/AuthContext'

interface ProtectRouterProps {
  children: React.ReactNode
}

const ProtectRouter: FC<ProtectRouterProps> = ({ children }) => {
  const { push } = useRouter()
  const { loadingAuth, user } = useAuth()

  if (loadingAuth) {
    return (
      <div className="w-screen h-screen bg-gray-700 fixed flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="217px"
          height="217px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="translate(25 50)">
            <circle cx="0" cy="0" r="5" fill="#0f172a">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.6666666666666666s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <g transform="translate(50 50)">
            <circle cx="0" cy="0" r="5" fill="#0f172a">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="-0.3333333333333333s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
          <g transform="translate(75 50)">
            <circle cx="0" cy="0" r="5" fill="#0f172a">
              <animateTransform
                attributeName="transform"
                type="scale"
                begin="0s"
                calcMode="spline"
                keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
                values="0;1;0"
                keyTimes="0;0.5;1"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>

        <p className="text-gray-300">Carregando...</p>
      </div>
    )
  }

  if (!loadingAuth && user?.token) {
    return <>{children}</>
  } else {
    push('/registro?mode=register')
    return null
  }
}

export default ProtectRouter
