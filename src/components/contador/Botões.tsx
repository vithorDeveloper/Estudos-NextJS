interface Props{
  plus: (value: number) => void
  minus: (value: number) => void
}

export default function Botoes(props: Props){

  return(
    <div className="flex gap-4">

      <button
      onClick={() => props.plus(10)}
       className="bg-sky-600 px-4 pb-2 text-6xl rounded-md">
        +
      </button>

      <button 
      onClick={() => props.minus(5)}
      className="bg-sky-600 px-5 pb-2 text-6xl rounded-md">
        -
      </button>

    </div>
  )
}