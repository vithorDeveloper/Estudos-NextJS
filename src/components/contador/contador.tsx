"use client"
import { useState } from "react";
import Botoes from "./Botões";
import Display from "./Display";

export default function Contador(){
  const [number, setNumber] = useState(0)

  const mais = (value: number) => {
    setNumber(number + value)
  }

  const menos = (value: number) => {
    setNumber(number - value)
  }

  return(
    <div className="border p-8 rounded-md font-black text-6xl">
      <Display value={number}/>
      <Botoes 
          plus={mais}
          minus={menos}
      />
    </div>
  )
}