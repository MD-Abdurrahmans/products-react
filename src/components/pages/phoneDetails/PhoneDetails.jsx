import { Link, useLoaderData} from "react-router-dom"

export default function PhoneDetails() {

//    const parampsID=  useParams();

   const  singleData = useLoaderData();
console.log(singleData)
 const {image,name,mainFeatures} = singleData.data;

  


  return (
    <div className="bg-black flex  justify-center items-center w-full h-full min-h-screen ">
    
       <div className=" p-5 md:w-[50%] text-white bg-slate-600 flex flex-col justify-center items-center  md:flex md:items-center md:justify-center md:flex-col md:h-[60%]">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>
     
     <ul>
        <li>CHIPSET: {mainFeatures.chipSet}</li>
        <li>DISPLAY: {mainFeatures.displaySize}</li>
        <li>MEMORY: {mainFeatures.memory}</li>
        <li>STORAGE: {mainFeatures.storage}</li>
         
        <li> <span className="text-1xl font-bold ">SENSORS: </span>
            <ul className="flex">
            <li>{mainFeatures.sensors[0]},</li>
            <li>{mainFeatures.sensors[1]},</li>
            <li>{mainFeatures.sensors[2]},</li>
            <li>{mainFeatures.sensors[3]},</li>
            <li>{mainFeatures.sensors[4]},</li>
            <li>{mainFeatures.sensors[5]}.</li>
            </ul>
        </li>
     </ul>

    </p>
    <div className="card-actions ">
      <Link  to={-1} >    <button className="btn btn-primary">Go Home</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
