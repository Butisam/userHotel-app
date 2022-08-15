// import React, { useState,useEffect } from 'react'
// import { useParams , useHistory} from 'react-router-dom';
// import data from './data';
// import Hotels from './Hotels';
// import {Link} from 'react-router-dom'
// import './hotelInfo.css'
// import BookRoom from './bookRoom'
// import { db, storage } from "../config/firebase";
// import { collection, getDocs } from "firebase/firestore";



// function HotInfo(){


//   const[info, setInfo] = useState([]);
// useEffect(()=>
//   {
//   const hotelCollectionRef=collection(db,"hotels")

//   const getDetails=async()=>{
//     const data=await getDocs(hotelCollectionRef);
//         setInfo(
//         data.docs.map((doc) => ({
//           name: doc.data().name,
//           location: doc.data().location,
//           price: doc.data().price,
//           image: doc.data().image,
//         }))
//       );
//   }
//   getDetails();
//   console.log(params.id)
//   },[]);

//     const {id} = useParams()
//     console.log(id);
 
    

//     let params = useParams();
//     const hotelInfo = data.filter(hotel=> hotel.id === parseInt(params.id));
//     const [price, setprice] = useState(hotelInfo[0].price);
//     const[ meal, setmeal] = useState("");
//     const[ numDays, setnumDays] = useState(0);
//     const [total, settotal]= useState(hotelInfo[0].price);
//     const[accum, setaccum] = useState(0)
//     let ans=0;

//     // console.log(price);
//     // let history = useHistory();
//     // const book =() =>{
//     //   history.push('/booking')
//     // }
    
  
//     function getInput(date,mealType,options){

// let diffdAYS = date[0].endDate-date[0].startDate;
// let days = diffdAYS/(1000 * 60 * 60 * 24);
//       setnumDays(days);

//       console.log(mealType);
//       console.log(" days " + numDays);
//       console.log("adult " + options.adult);
//       console.log("room " + options.room);
//       console.log("child " + options.children);

//       if(mealType==="Meal"){

//         ans=parseInt(((hotelInfo[0].price * days) *options.room) + 100)
//         console.log('Total is R',ans);
//         setaccum(ans);
//       }else{
//         ans=parseInt(((hotelInfo[0].price * days) *options.room))
        
//         console.log('Total is R',ans);
//         setaccum(ans);
//       }
      
//     }

//   return (
        
//     // <div className='hotelDi' >

//     //  <BookRoom getInput={getInput} />

//     //   {/* <div className='pic'> <img className='divPic' src={hotelInfo[0].pic} alt="picHotel"></img></div>
//     //   <div><h2 className='Title'>{hotelInfo[0].Name}</h2></div>
//     //   <p className='info'>{hotelInfo[0].location}</p>
//     //   <p className='info'>R{hotelInfo[0].price}</p>
//     //   <div className='map'><iframe className='divMap' src={hotelInfo[0].locMap} title="map"></iframe>  </div>
//     //   <button className='headerbtn'> Book Now</button>
//     //   <div className='price'>
//     //   <p className='info'> Total amount is R{accum}</p> 
//     //   </div> */}
//     //     {info.map((hotels, id)=>(
//     //        <div className="hotelCat" key={id}>
//     //          <div className='pic'>
//     //         <img className="hotel-pic" src={hotels.image} alt={hotels.name}/>
//     //       </div>
//     //       <h1 className="names">{hotels.name}</h1>
//     //       <p className="names">
//     //       {hotels.location}
//     //       </p>
//     //       <p className="price">R {hotels.price}.00</p>
//     //       <p className="price">R {accum}.00</p>
//     //        </div>
//     //     ))}


//     //   </div>
     

// <div>lfgcdswa</div>
//   )
// }

// export default HotInfo