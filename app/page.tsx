import Form from './components/form'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center sm:items-start px-4 py-24 sm:max-w-[593px] lg:max-w-[746px] m-auto'>
   <h1 className='text-5xl lg:text-6xl font-bold text-center sm:text-start'>What age is your name?</h1>

   <div className='w-full mt-4 flex flex-col items-center sm:items-start'>
    <span className='text-base md:text-xl text-center sm:text-start'>Predict the age of a person given their name</span>
    <Form />
   </div>
  </main>
 )
}
