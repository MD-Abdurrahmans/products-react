import { useLoaderData} from "react-router-dom"
import Phone from "../phone/Phone";

export default function Phones() {


 const phonesData=  useLoaderData();

 const {data} = phonesData;
  


  return (
    <div>
       <h1>Phones:{data.length}</h1>
     
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
      {
         
         data.map(phone=> <Phone key={phone.slug} phone={phone} ></Phone>)
       }
      </div>
    </div>
  )
}
