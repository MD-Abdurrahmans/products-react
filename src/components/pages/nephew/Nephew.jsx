import { useContext } from "react"
import { drilling } from "../grandPa/Grandpa"



export default function Nephew() {
   const  gift=   useContext(drilling)
   const raj =gift.ar;
 console.log(gift.propery)
 console.log(raj)
 

  return (
    <div>
       <h1>Nephew</h1>
        <p>get she{gift.propery}</p>
        <p>get search
           {
             raj.map(done=> <li>     {done}</li>)
           }
        </p>
       
        
    </div>
  )
}
