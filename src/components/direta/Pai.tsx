import Filho from "./Filho";

interface PropsNome{
  nome: string,
  sobrenome: string,
}

export default function Pai(props: PropsNome){

  return(
    <div className="rounded-lg p-14 bg-amber-800 border flex flex-col gap-6">
      <div>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-6">
      <Filho nome="noemi" sobrenome={props.sobrenome} />
      <Filho nome="elias" sobrenome={props.sobrenome}/>
      </div>
    </div>
  )
}