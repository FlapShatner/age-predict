'use client'

import { FC, FormEvent, useState } from 'react'
import Button from './button'
import Result from './result'

interface FormProps {}

const Form: FC<FormProps> = () => {
 const [name, setName] = useState('')
 const [resultName, setResultName] = useState('')
 const [age, setAge] = useState(0)
 const [error, setError] = useState(false)
 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setError(false)
  const result = fetch(`https://api.agify.io?name=${name}`)
  const data = await (await result).json()
  if (data.age === null) {
   setError(true)
  }
  setAge(data.age)
  console.log(data)
  setResultName(name)
  setName('')
 }

 return (
  <form
   onSubmit={(e) => handleSubmit(e)}
   className='flex flex-col gap-2 w-full mt-8'>
   <div className='w-full bg-gradient-to-r p-[2px] from-cyan-500 to-blue-500 '>
    <input
     onChange={(e) => setName(e.target.value)}
     value={name}
     type='text'
     className='bg-[#09111E] text-xl font-semibold text-white p-3 w-full focus-within:outline-none'
     placeholder='First name'
    />
   </div>
   <Button />
   <Result
    name={resultName}
    age={age}
    error={error}
   />
  </form>
 )
}

export default Form
