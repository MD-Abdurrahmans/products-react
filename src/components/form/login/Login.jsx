
import UserForm from "../../userForm/UserForm";
import useInputState from "../CustomHook";


export default function Login() {

   const    nameState    =  useInputState();
   const    emailState    =  useInputState();


  return (
    <div className="w-[80%] mx-auto flex justify-center ">
         <UserForm
          title={'Login'} 

          submitBtn={'Login'}
           
           nameState={nameState}
           emailState={emailState}
        
          ></UserForm>
    </div>
  )
}
