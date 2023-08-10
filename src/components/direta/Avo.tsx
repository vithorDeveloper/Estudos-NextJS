import Pai from "./Pai";

interface PropsNome{
  nome: string,
  sobrenome: string,
} 

export default function Avo(props: PropsNome){

  return(
    <div className="text-2xl rounded-lg gap-6 p-14 bg-indigo-700 border flex flex-col">
      <div>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-8">
      <Pai nome="Jorge" sobrenome={props.sobrenome}/>
      <Pai nome="Jonas" sobrenome={props.sobrenome}/>
      <Pai nome="João" sobrenome={props.sobrenome}/>
      </div>
      
    </div>
  )
}