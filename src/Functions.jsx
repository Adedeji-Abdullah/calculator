import React from 'react'

const Functions = ({ value, setValue}) => {

    
    const toRadian = (deg) => deg*(Math.PI / 180)
  return (

    <div>
        <section>
      <button onClick={() => {setValue((prev) => prev + "(")}}>(</button>
      <button onClick={() => {setValue((prev) => prev + ")")}}>)</button>
      <button onClick={() => {setValue((prev) => prev + "sin(")}}>sin</button>
      <button onClick={() => {setValue((prev) => prev + "cos(")}}>cos</button>
      <button onClick={() => {setValue((prev) => prev + "tan(")}}>tan</button>
      <button onClick={() => {setValue((prev) => prev + "cosec")}}>cosec</button>
      <button onClick={() => {setValue((prev) => prev + "secant")}}>sec</button>
      <button onClick={() => {setValue((prev) => prev + "cotan")}}>cot</button>
      <button onClick={() => {setValue((prev) => prev + "1/")}}>1/</button>
      <button onClick={() => {setValue((prev) => prev + "^")}}>^</button>
      </section>
    </div>
  )
}

export default Functions
