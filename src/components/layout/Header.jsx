// import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import logo from '../../assets/logo2.png'
import userDefault from '../../assets/img/user-default.png'

// Shadcnui components
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header(){

  return(
    <header className="fixed w-screen bg-white z-30 pointer-events-none">

      <section className="flex justify-between items-center px-10 mx-auto lg:w-8/12 lg:px-0 py-6">
      
        <a href="/" className="w-[50px] rounded-[50%] overflow-hidden">
          <img className="h-full w-full" src={logo} alt="Template-uno logo" />
        </a>

        <nav className="gap-12 mx-6 hidden lg:flex" >  
          <a href="#about">Sobre</a>
          <a href="#products">Produtos</a>
          <a href="#services">Serviços</a>
          <a href="#team">Team</a>
          <a href="#contacts">Contactos</a>
        </nav>

        <span className="flex gap-6 items-center" >
          <a href="#login">Entrar</a><FaAngleRight />
          
          <Button>Criar conta</Button>

          <DropdownMenu>
            <DropdownMenuTrigger className=" w-[45px] active:outline-none">
              <img src={userDefault} alt="User default"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><a href="#">Sobre</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#products">Produtos</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#services">Serviços</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#team">Team</a></DropdownMenuItem>
              <DropdownMenuItem><a href="#contacts">Contactos</a></DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        </section>
    </header>
  )
}

export default Header