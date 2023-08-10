import Evento from "@/components/Evento";

export default function event(){

  return(
    <div className={`
        h-screen flex justify-around items-center gap-7 py-7
    `}>
      <Evento/>
      <Evento/>
      <Evento/>
    </div>
  )
}