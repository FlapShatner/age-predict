import { error } from 'console'
import { FC } from 'react'

interface ResultProps {
 name: string
 age: number
 error: boolean
}

const Result: FC<ResultProps> = ({ name, age, error }) => {
 return (
  <>
   {error && (
    <div className='flex flex-col my-8 justify-center gap-2 text-2xl text-center'>
     <span>Name not found</span>
    </div>
   )}
   {name && age && (
    <div className='flex flex-col my-8 justify-center gap-2 text-2xl text-center'>
     <span className='text-5xl text-blue-400'>{name}</span>
     <span> is probably </span>
     <span className='text-6xl text-blue-400'>{age}</span>
     <span>years old </span>
    </div>
   )}
  </>
 )
}

export default Result
