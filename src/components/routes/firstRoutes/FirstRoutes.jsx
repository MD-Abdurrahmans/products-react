
import {
    createBrowserRouter,
  } from "react-router-dom";
import Template from "../../layout/template/Template";
import Phones from "../../pages/phones/Phones";
import HomePage from '../../pages/homePage/HomePage';
import PhoneDetails from "../../pages/phoneDetails/PhoneDetails";
import SignUp from "../../form/signUp/SignUp";
import Login from "../../form/login/Login";
import Error from "../../pages/error/Error";
import Grandpa from "../../pages/grandPa/Grandpa";


   


  const router = createBrowserRouter(

    

    [

    {
    
      path:"/",
      element:<Template></Template>,
      errorElement:<Error></Error>,
      children:[

         {
          path:'/',
          element:<HomePage></HomePage>,
         },
         {
          path:'/phones',
          element:<Phones></Phones>,
          loader:()=> fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`),
        },
        {
          path:'/phones/details/:id',
          element:<PhoneDetails></PhoneDetails>,
           loader:({params})=>  fetch(`https://openapi.programming-hero.com/api/phone/${params.id}`)
         },

         {
          path:'/login',
          element:<Login></Login>
         },
         {
          path:'/signup',
          element:<SignUp></SignUp>
         },
         {
          path:'/grandpa',
          element:<Grandpa></Grandpa>
         }
      ]
    },
   
   
    
    ]




    )

  

    

    // searchFunction


  

    export default router;