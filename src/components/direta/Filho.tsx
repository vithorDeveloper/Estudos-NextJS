interface PropsNome{
  nome:string;
  sobrenome:string;
}

export default function Filho(props: PropsNome){

  return(
    <div className="text-xl text-center p-6 bg-emerald-700 border rounded-lg">
      <span>{props.nome}</span>
      <span>{props.sobrenome}</span>
    </div>
  )
}