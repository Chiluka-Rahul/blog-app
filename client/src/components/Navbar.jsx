import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"


const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname


  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
    
  return (
    <div className="flex items-center justify-between px-8 py-7 bg-sky-950 text-white border-b-2">
    <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">ZuAI</Link></h1>
    {path==="/" && <div className="flex justify-center items-center space-x-0 bg-gray-300 px-2.5 py-2 rounded-md">
    <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3 text-black bg-gray-300" placeholder="Search a post" type="text"/>
    <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="text-xl cursor-pointer text-black "><BsSearch/></p>
    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3 className=""><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3 className="bg-neutral-100 py-1 px-5 rounded-3xl text-black hover:bg-green-500 hover:text-white"><Link to="/register">Join Now</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>
  )
}

export default Navbar 