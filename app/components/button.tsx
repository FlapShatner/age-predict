import { FC } from 'react'

interface ButtonProps {}

const Button: FC<ButtonProps> = () => {
 return (
  <button
   type='submit'
   className='bg-gradient-to-r from-cyan-500 to-blue-500 text-xl text-center p-2 w-full sm:w-36 cursor-pointer'>
   Predict Age
  </button>
 )
}

export default Button
