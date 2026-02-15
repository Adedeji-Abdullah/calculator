import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Func'
import Keys from './Keys' 
import Func from './Func'
import Functions from './Functions'

function App() {
  const [value, setValue] = useState('')
  const value1 = {value}
  return (
    <>
      <h1>Calculator</h1>

      <input type="text" value={value} 
       readOnly/>
      <Keys value={value} setValue={setValue}/>
      <Func value1={value1} value={value} setValue={setValue}/>
      {/* <Functions value={value} setValue={setValue} value1={value1} /> */}

    </>
  )
}

export default App
