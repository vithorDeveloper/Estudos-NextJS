"use client"
import Image from "next/image"
import { useState } from "react"

export default function ImagemAletoria(){
  const [pesquisa, setPesquisa] = useState('code')
  const [tamanho, setTamanho] = useState(300)

  const url = 'https://source.unsplash.com/featured'

  const button = (valor: string) => {
    return (
      <button className="bg-blue-500 py-2 px-5 rounded-lg"
        onClick={() => {
          setPesquisa(valor)
        }}
      >
        {valor}
      </button>
    )
  }

  return(
    <div className={`
        border-slate-300 border-[1px]
        text-white text-3xl p-10 rounded-lg
        w-full
    `}>
    
    <Image 
      src={`${url}/${tamanho}x${tamanho}?${pesquisa}`} 
      width={300} height={300}
      alt="imagem"
      className="rounded-lg w-full"
    />

    <div className={`
        flex justify-between mt-6
    `}>
      {button('neon')}
      {button('gamer')}
      {button('code')}
    </div>
    
    <input 
      type="number" 
      value={tamanho}
      onChange={e => setTamanho(+e.target.value)}
      className="mt-6 rounded-lg outline-none bg-black p-3"
    />
    </div>
  )
}