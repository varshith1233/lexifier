import "../CSS/Signin.css"
import validator from 'validator'
import React,{useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate=useNavigate()
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [userType,setuserType]=useState('')
    const [secretKey,setsecretKey]=useState('')
  
    const register=()=>{
        console.log(username,password,email,userType);
        if(userType==='Admin' && secretKey!="Secretidentity"){
            alert("Invalid admin")
        }else{
            axios.post('http://localhost:8000/register',{
                username:username,
                password,
                email,
                userType
            }).then((res)=>{
                console.log(res.data);
                navigate()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

  return (
    <div>
        
        <section className="Form my-4 mx-5">
        <div> 
                <div className="row no-gutters">
                    <div className="col-lg-5 px-5 pt-5">
                        <img src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600" className="image-fluid" alt="" />
                    </div>
                    <div className=" fill-the-form col-lg-7 px-5 pt-3">
                        
                        <div className="container-1">

                        <h3 className="font-weight-bold py-3">Sign up to your Account</h3>
                       <form action="">
                        <div>
                            Register as: 
                            <input type="radio" name="userType" value="User" onChange={(e)=>{setuserType(e.target.value)}}/>
                            User
                            <input type="radio" name="userType" value="Admin" onChange={(e)=>{setuserType(e.target.value)}}/>
                            Admin
                        </div>
                            {userType==="Admin"?<div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="text" name="secretKey"  onChange={(e)=>{setsecretKey(e.target.value)}} placeholder="SecretKey" className="form-control my-3 p-2" autoComplete="off" required/>
                                </div>
                            </div>: null}
                            
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Username" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  placeholder="Email-Address" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1" >
                                <div className="col-lg-7">
                                    <input type="Password" name="password" value={password} onChange={(e)=>{setpassword((e.target.value))}}  placeholder="Password" className="form-control my-3 p-2" required/>
                                    
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <Link to='/signin'>
                                    <button type="button" onClick={register} className="btn1 mt-3 mb-4">Register</button>
                                    </Link>
                                </div>
                            </div>
                            <p>Already have an account? <a href=""><Link to='/signin'>Log in</Link></a></p>
                       </form>
                        </div>
                    </div>
                </div>
          </div>
      </section>


    </div>
  )
}

export default Signup