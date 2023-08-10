'use client'
export default function Evento(){
  let content = 0

  const increment = () => {
    console.log(content++)
  }

  return(
    <button className={`
          flex justify-center items-center 
        bg-emerald-500 text-black text-4xl rounded-lg
          w-64 h-64
    `} onClick={increment}>
      evento
    </button>
  )
}