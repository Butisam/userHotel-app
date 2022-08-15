import React ,{useState,useEffect} from 'react'
import "./featured.css";
import { db, storage } from "../config/firebase";
import { Link, useHistory } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";


const Featured = () => {

  const navigate = useHistory();

  const handleSearch = () => {
    navigate("/hotels");
  };

const[info, setInfo] = useState([]);
useEffect(()=>
  {
  const hotelCollectionRef=collection(db,"hotels")

  const getDetails=async()=>{
    const data=await getDocs(hotelCollectionRef);
        setInfo(
        data.docs.map((doc) => ({
          name: doc.data().name,
          location: doc.data().location,
          price: doc.data().price,
          image: doc.data().image,
        }))
      );
  }
  getDetails();
  },[]);
  return (

    <>
    <div className="featured" >
      {info.map((hotels, id) => (
        <div className="hotelCat" key={id}>
          <div className="img-div">
            <img className="hotel-pic" src={hotels.image} alt={hotels.name}/>
          </div>
          <h1 className="names">{hotels.name}</h1>
          <p className="names">
          {hotels.location}
          </p>
          <p className="price">R {hotels.price}.00</p>
        </div>
      ))}
    </div>
    </>
   
);


};

export default Featured;
