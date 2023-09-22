
import { createContext } from "react";
import Father from "../father/Father";
import Uncle from "../uncle/Uncle";
import { Link } from "react-router-dom";


 
export const drilling = createContext()

export default function Grandpa() {
    const propery ='GOLD';
    const  ar= [13,45,6,];
  return (
    <div className="border border-red-600">
       <h1>granpa</h1>
 
   
           <drilling.Provider  value={{propery,ar} }>

            
       <div className="border">

        
<Father>
   </Father>
</div>

  
   
   
   <Uncle>
   
   </Uncle>
           </drilling.Provider>
       
          <Link to='/'><button>Go Back</button></Link>
    </div>
  )
}
