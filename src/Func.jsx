import React from 'react'

const Func = ({ setValue, value}) => {

    
  return (
    <div>
        
     <section>
        

      <button onClick={() => {setValue((prev) => prev + "+")}}>+</button>
      <button onClick={() => {setValue((prev) => prev + "-")}}>-</button>
      <button onClick={() => {setValue((prev) => prev + "*")}}>*</button>
      <button onClick={() => {setValue((prev) => prev + "/")}}>/</button>
      
     </section>
     <dl className='fun'>
      
      <button onClick={() => setValue("")}>C</button> 
      <button onClick={() => setValue(eval(value))}>=</button>
      <button onClick={() => {setValue(value.slice(0, -1))}}>x</button>
      </dl>
    </div>
  )
}



export default Func
