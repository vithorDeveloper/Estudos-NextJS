import Avo from "@/components/direta/Avo";

export default function comunicacao(){

  return(
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <Avo nome="Marcos" sobrenome=" Ribeiro"/>
      <Avo nome="Mario" sobrenome=" Rodrigues"/>
    </div>
  )
}