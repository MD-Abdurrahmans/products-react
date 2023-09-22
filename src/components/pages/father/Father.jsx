import Brother from "../brother/Brother";
import Me from "../grandPa/me/Me";
import Sister from "../sister/Sister";


export default function Father() {
  return (
    <div className="border">
       <h1>father</h1>
        <Me></Me>
        <Brother></Brother>
        <Sister></Sister>
    </div>
  )
}
