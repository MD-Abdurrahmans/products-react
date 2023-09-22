import { Link } from "react-router-dom";

export default function Error() {


  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-red-500">
        <h1>OooooPs!</h1>
       <div>
       <Link  to='/' > <button className="bg-pink-900 text-white">Go Home</button></Link>
       </div>
    </div>
  )
}
