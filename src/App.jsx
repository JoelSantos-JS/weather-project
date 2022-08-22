import { useState } from 'react'
import Card from './components/Card/Card'

import fechtData from './services/api'
import inititalData from './helpers/initia'


function App() {
  const [city , setCity ] = useState('')
  const [dados , setDados] = useState(inititalData)

    




    const handleSubmit = (e) => {
      e.preventDefault()
      fechtData(city).then(response => {
        setDados(response)
      })
    }


    const handleChange = (e) => {
      setCity(e.target.value)
      console.log(city)
    }


  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center" >

      <form onSubmit={handleSubmit} className='fixed bottom-0 w-full flex p-4 sm:relative justify-center'>
        <input type="text" placeholder='Cidade' value={city} className='p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[200px]' onChange={(e) => handleChange(e)} />
        <button type='submit' className='text-black bg-violet-800 p-3  rounded-lg ml-3 font-bold text-white'> Search</button>
      </form>
        <Card city={city} dados={dados}/>
    </div>
  )
}

export default App
