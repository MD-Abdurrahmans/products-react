

import PropTypes from 'prop-types'


export default function UserForm({title,submitBtn,nameState,emailState}) {
const handleSubmit =(e)=>{

     e.preventDefault();

      console.log('signUp',nameState.value)
      console.log('signUp',emailState.value)
}

  return (
 
 

    <div>
 
  <h3>name:{nameState.value}</h3>
  <h3>email:{emailState.value}</h3>
 
        <form  onSubmit={handleSubmit}  className="w-full space-y-8 ">
               <h1>{title} Form</h1>
              <div>
                <label htmlFor="">Name</label>
                   <input type="text" {...nameState} name="userName"  className="w-full p-2 bg-slate-500 text-white" />
              </div>
              <div>
              <label htmlFor="">Email</label><br></br>

                   <input type="email"{...emailState}  name="userEmail" className="w-full p-2 bg-slate-500 text-white"  />
              </div>
              <div>
                   <input type="submit" value={submitBtn} className="p-2 bg-slate-500 text-white" />
              </div>
        </form>
    </div>
  )
}

UserForm.propTypes = {

    title:PropTypes.value,
    submitBtn:PropTypes.value,
    nameState:PropTypes.func,
    emailState:PropTypes.func,

}