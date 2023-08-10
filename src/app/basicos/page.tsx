import Caixas from "@/components/Caixa";

export default function About(){
  return(
    <div className={`
        h-screen flex justify-around items-center gap-7 py-7
    `}>
      <Caixas title="Caixa #1"/>
      <Caixas title="Caixa #2" IsPerfect={true}/>
      <Caixas title="Caixa #3"/>
    </div>
  )
}