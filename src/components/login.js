import { useState } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
// import SignUp from "./SignUp";
import './style.css'
const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
    let history=useHistory();



  const SignUp=(()=>{
    history.push("/signup")
  })      
    const login=(()=>
    {
        signInWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("/home")
        }).catch((err)=>{
            console.log(err)})
    })
    return (  
        <div className="screen-1">
            <div className="sec-2">
              <input className="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            <input className="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            <button onClick={login}>Login</button>
            <ion-icon className="show-hide" name="eye-outline"></ion-icon>
            
        </div>
        <div class="footer"><span onClick={SignUp}>Signup</span><span>Forgot Password?</span></div>

 </div>
    
    );
}
 
export default Login;


