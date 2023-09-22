import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";





export default function Headers() {
  const [search,setSearch] = useState([]);

const handleSubmit =(e)=>{
 e.preventDefault()

 setSearch(e.target.search.value)

  


   
}
const navigate= useNavigate()
const handleSubmitBtn =() =>{

  navigate('/phones',{state:{id: {search}}})
}

  return (

    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'  >Home</NavLink></li>
        <li><NavLink to='/phones'  >Phones</NavLink></li>
        <li><NavLink to=''  >About</NavLink></li>
        <li><NavLink to=''  >Contact</NavLink></li>
     
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'  >Home</NavLink></li>
        <li><NavLink to='/phones'  >Phones</NavLink></li>
        <li><NavLink to='/about'  >About</NavLink></li>
        <li><NavLink to='/contact'   >Contact</NavLink></li>
        <li><NavLink to='/grandpa'   >GrandPa</NavLink></li>
        <li><NavLink to='/login'   >Login</NavLink></li>
        <li><NavLink to='/signup'   >SignUp</NavLink></li>
     
    </ul>
  </div>
  <div className="navbar-end" >
    <form  onSubmit={handleSubmit}  className="form-control   flex flex-row">

    <input type="text" name="search"  placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    
     <div className="ml-3">
     <input onClick={handleSubmitBtn}  type="submit" value='search' className="bg-pink-700 text-white btn" />
   
     </div>
    
    </form>
    </div>

  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    </div>

  )
}
