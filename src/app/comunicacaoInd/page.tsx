import Contador from "@/components/contador/contador";

export default function page(){

  return(
    <div className="flex h-screen gap-8 justify-center items-center text-2xl">
      <Contador/>
      <Contador/>
      <Contador/>
    </div>
  )
}