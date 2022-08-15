import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import "./signup.css";
import "./style.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  //6ZXE6EBCC8 PASSWORD

  let history = useHistory();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const collectionRef = collection(db, "users");
        addDoc(collectionRef, {
          name: name,
          email: email,
          contact: contact,
          id: auth.currentUser.uid,
        } 
        )
          .then(() => {
            alert("User Registered ", { type: "success" });
            history.push("/");
          })
          .catch((err) => {
            alert("Error adding hotel", { type: "error" });
          });

        // alert("User account created");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signin = () => {
    history.push("/");
  };

  useEffect(() => {}, []);

  return (
    <div >
      <div className="screen-1">

        <div className="sec-2s">
          
            {/* <label>
              Sign up
            </label> */}
            <input className="email"
              type="text"
              name="txt"
              placeholder="User name"
              required=""
              onChange={(e) => setName(e.target.value)}
            ></input><br></br><br></br><br></br>
            <input
            className="email"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
            ></input><br></br>
            <input
              className="password"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) => setPassword(e.target.value)}
            ></input><br></br>
            <input
            className="password"
              type="text"
              name="txt"
              placeholder="Contact Number"
              required=""
              onChange={(e) => setContact(e.target.value)}
            ></input><br></br>
            <button onClick={signUp}>
              Sign up
            </button><br></br><br></br>
            <button onClick={signin}>
              LOGIN
            </button>
      
        </div>
      </div>
    </div>
  );
}
export default SignUp;
