import ImagemAletoria from "@/components/hooks/imagemAleatoria";

export default function Imagem(){

  return(
    <div className={`
      h-screen flex justify-center items-center gap-7 bg-slate-900
    `}>
      <ImagemAletoria/>
      <ImagemAletoria/>
      <ImagemAletoria/>
    </div>
  )
}