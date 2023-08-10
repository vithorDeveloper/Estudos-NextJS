interface CircProps{
  title: string;
  IsPerfect?: boolean;
}

export default function Caixas (props: CircProps){

  return(
    <div className={`
          flex justify-center items-center 
        bg-emerald-500 text-black text-4xl
          w-64 h-64 
          ${props.IsPerfect ? 'rounded-s-3xl' : 'rounded-full'}
    `}>
      {props.title}
    </div>
  )
}