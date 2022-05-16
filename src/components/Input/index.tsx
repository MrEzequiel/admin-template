import { FC } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        {...props}
        className={
          'px-4 py-3 mt-1 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none ' +
          props.className
        }
      />
    </div>
  )
}

export default Input
