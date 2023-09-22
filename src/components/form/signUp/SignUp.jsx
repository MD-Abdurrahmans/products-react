import UserForm from "../../userForm/UserForm";
import useInputState from "../CustomHook";


export default function SignUp() {

   const    nameState    =  useInputState();
   const    emailState    =  useInputState();


  return (
    <div className="w-[80%] mx-auto flex justify-center ">
         <UserForm
          title={'SignUp'} 

          submitBtn={'Sign Up'}
           
           nameState={nameState}
           emailState={emailState}
        
          ></UserForm>
    </div>
  )
}
