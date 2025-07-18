import React from 'react'
import { useForm } from 'react-hook-form'
import './login.css'

const Login = () => {
     const { register,
         handleSubmit, 
         
         watch, formState: { errors,isSubmitting } } = useForm();

         const delay = async (d) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                    
                }, d*1000);
            })

         }

  const onSubmit = async (data)=> {
    await delay(2)
    let response  = await fetch("http://localhost:5000/", {method: "POST" ,headers: { "Content-Type": "application/json", },body: JSON.stringify(data)})
    const result = await  response.text();
    console.log("data sent",data);
      console.log("Server response:", result);
 
   
  }


  return (
    <div className='container'>
      
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='connect'>Connect Now </div>
            {isSubmitting && (<div className="loader-container">
    <div className="loader"></div>
    <span>Submitting...</span>
  </div>)}
            <div className="input">

            <input type="text"{...register("username", { required:{value: true , message:"Username required"}})} placeholder='Enter your username'/>
            {errors.username && <div className='red'>{errors.username.message}</div>    }
            <br />
            <input type="number" {...register("Mobileno", { required:{value:true , message:"Mobile no."}, maxLength:{value: 10, message: "max lenght 10"}})}placeholder='Enter your Mobile no.'/>
              {errors.Mobileno && <div className='red'>{errors.Mobileno.message}</div>    }
            <br />
            <input type="email"{...register("Email", { required:{value: true , message: "Email required"}, pattern:{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: "invalid Email"}})} placeholder='Enter your Email'/>
              {errors.Email && <div className='red'>{errors.Email.message}</div>    }
            <br />
            <input type="password" {...register("password", { required:{value: true , message:"email address missing "} })}placeholder='password'/>
              {errors.password && <div className='red'>{errors.password.message}</div>    }
            <br />
           
            </div>
           
            <input type="submit"/>
            

        </form>
      
    </div>
  )
}

export default Login
