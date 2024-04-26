import img1 from '../../assets/img/woman-in-field.webp'
import img2 from '../../assets/img/men-on-computer.webp'
import img3 from '../../assets/img/worker-greeting.webp'
import img4 from '../../assets/img/worker-looking-up.webp'

import { Button } from "../ui/button"

export default function Hero(){
  
  
  const imgUrl = "https://wa-andiamo.vercel.app/imgs/yellow-blur-bg.svg"
  return(
    <section className='lg:w-8/12 lg:px-0 px-10 mx-auto flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-16 xl:flex-row lg:gap-y-0 items-center border-2 justify-between' >
      <img src={imgUrl} className='bg-transparent absolute h-full -z-10' alt='bg yellow image'/>
        
        <h1 className='text-3xl w-fit mx-auto leading-normal font-[500] text-center lg:mx-0 lg:w-full lg:text-7xl xl:text-9xl lg:text-start lg:pl-0 col-start-1 col-end-2 pr-12'>Prestação de Serviços e Trading</h1>
        
        <div className='w-fit flex-auto grid grid-cols-2 gap-10 grid-row-4  img-article row-start-1 row-end-3 col-start-2 border-2 border-sky-500'>

          <div className='rounded-[1.5rem] overflow-hidden row-start-1 row-end-3'><img src={img1} alt="woman in field"/></div>
          <div className='rounded-[1.5rem] overflow-hidden row-start-1 row-end-2'><img src={img2} alt="Men on computer"/></div>
          <div className='rounded-[1.5rem] overflow-hidden row-start-3 row-end-4'><img src={img3} alt="Worker greeting"/></div>
          <div className='rounded-[1.5rem] overflow-hidden row-start-2 row-end-4'><img src={img4} alt="worker looking up"/></div>
          
        </div>

        <span className='flex flex-col items-center lg:items-start col-start-1 col-end-2 '> 
        
          <p className='mb-10 font-light leading-normal px-12 my-6 lg:px-0 lg:text-4xl'>
            Engenharia Agrícola - Construção de Infraestrutura - Gestão de Projetos - Venda de Tecnologia e Know-How - Trading - Exportação e outros afins
          </p>
        
          <Button>Explorar</Button>
        </span>
      </section>
  )
}