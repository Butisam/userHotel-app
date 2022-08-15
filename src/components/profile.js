import React from 'react'
import './profile.css'
import {
    collection,
    getDocs,
    orderBy,
    doc,
    deleteDoc,
    updateDoc,
    query,
    onSnapshot,
  
  } from "firebase/firestore";
  import { useEffect, useState } from "react";
  import { auth, db } from "../config/firebase";
import { useParams } from 'react-router-dom';
import { intlFormat } from 'date-fns';
export default function Profile()
{

//     const { id } = useParams()
//     const param = useParams()
//     const [userInfo, setUserInfo] = useState([]);
//     const[info, setInfo] = useState([]);
    
//     const [users,setUsers]=useState('')
//   useEffect(()=>
//   {
//   const usersCollectionRef=collection(db,"users")

//   const getUsers=async()=>{
//     const data=await getDocs(usersCollectionRef);
//         setUsers(
//         data.docs.map((doc) => (doc.data()))
//       );
//   }
//   getUsers();
//   },[]);
//   let user=""
//   for (let i=0;i<users.length;i++)
//   {
//     if(users[i].id===auth.currentUser.uid)
//     {
//       user=users[i]
//     }
//   }
// //   console.log(user);
//  let data=""
//   for(let i=0;i<info.length;i++)
//   {
//     if(info[i].id===param.id)
//    {
//         data=info[i]
//     }
//   }
//   console.log(data.name);
const [usersInfo, setUsersInfo] = useState([]);
useEffect(()=>{
    const hotelCollectionRef=collection(db,"users")
    const getDetails=async()=>{
      const data=await getDocs(hotelCollectionRef);
      setUsersInfo(
          data.docs.map((doc) => ({
            name: doc.data().name,
            email: doc.data().email,
            contact: doc.data().contact,
            id:doc.data().id
          }))
        );
    }
    getDetails();
    },[]);

  let user = "";
  for (let i = 0; i < usersInfo.length; i++) {
    if (usersInfo[i].id === auth.currentUser.uid) {
      user=usersInfo[i];
    }
  }
console.log(user);
 console.log(user);
    return(
        <div className='main-container'>

            {/* {usersInfo.map((profile)=>( */}

                <div>
          
               <p className='details'> Name: {user.name}</p>
                <p className='details'> Email: {user.email}</p>
                <p className='details'> Contact Number: {user.contact} </p>
                
                    
                   
                </div>
            {/* ))} */}
        
           
        </div>
    )
}