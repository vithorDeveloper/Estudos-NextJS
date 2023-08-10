
interface PropsValue{
  value: number;
}

export default function Display(props: PropsValue){

  return( 
    <div className="flex mb-6 justify-center items-center bg-slate-600 rounded-lg h-24">
      {props.value}
    </div>
  )
}