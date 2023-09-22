import { Outlet, useNavigation } from "react-router-dom";
// import HomePage from "../../pages/homePage/HomePage";
import Footers from "../footer/Footers";
import Headers from "../header/Headers";


export default function Template() {
   const navigation=  useNavigation();

  return (

    <div>
        <Headers></Headers>
       <div className="min-h-screen">
     
             {
              navigation.state === 'loading'?  <div className="text-7xl flex justify-center items-center z-10 absolute bg-black opacity-40 w-full h-full  "> <span className="loading text-7xl  w-[120px]   h-[120px] loading-spinner text-secondary"></span></div>  : <Outlet></Outlet>
             }
   
       </div>
        <Footers></Footers>
    </div>
  )
}
