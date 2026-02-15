import React from 'react'

const Keys = ({ setValue, value }) => {
  return (
    <div>
      <section>   
      <button onClick={() => {setValue((prev) => prev + "1")}}>1</button>
      <button onClick={() => {setValue((prev) => prev + '2')}}>2</button>
      <button onClick={() => {setValue((prev) => prev + '3')}}>3</button>
      <button onClick={() => {setValue((prev) => prev + '4')}}>4</button>
      <button onClick={() => {setValue((prev) => prev + '5')}}>5</button>
      <button onClick={() => {setValue((prev) => prev + '6')}}>6</button>
      <button onClick={() => {setValue((prev) => prev + '7')}}>7</button>
      <button onClick={() => {setValue((prev) => prev + '8')}}>8</button>
      
     </section>

     <dl>
      <button onClick={() => {setValue((prev) => prev + '9')}}>9</button>
      <button onClick={() => {setValue((prev) => prev + '0')}}>0</button>
      </dl>
    </div>
  )
}

export default Keys
