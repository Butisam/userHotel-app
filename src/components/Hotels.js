import React from "react";

import Nav from "./Nav";

import "./hearder.css";
import "./Hotel.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { db, storage } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Hotels = () => {
  // const [hotelList,setHotelList] =useState(data);

  const [searchValue, setSearchValue] = useState("");

  const [info, setInfo] = useState([]);
  useEffect(() => {
    const hotelCollectionRef = collection(db, "hotels");

    const getDetails = async () => {
      const data = await getDocs(hotelCollectionRef);
      setInfo(
        data.docs.map((doc) => ({
          name: doc.data().name,
          location: doc.data().location,
          price: doc.data().price,
          image: doc.data().image,
          id: doc.id,
        }))
      );
    };
    getDetails();
  }, []);
  // let history=useHistory();
  // const click=(id)=>
  // {
  // console.log(id)
  // history.push("/HotInfo")
  // }
  return (
    <div>
      {/* <Nav/> */}
      <h1 className="title"> hotels</h1>
      <div className="headerSearchs">

        <div className="headerSearchItems">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            className="headerSearchInput"
            placeholder="search"
            name="search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div className="backpc">
        {searchValue === ""
          ? info.map((hotel, id) => (
              <>
                <div className="hotelCards" key={id}>
                  <Link to={`/hot/${hotel.id}`}>
                    <img className="pics" src={hotel.image} alt={hotel.name} />
                    <p>
                      <div className="name"> {hotel.name} </div>
                      <div className="location">{hotel.location}</div>
                    </p>
                  </Link>
                </div>
              </>
            ))
          : info
              .filter((hotel) => {
                if (searchValue === "") {
                  return hotel;
                } else if (
                  hotel.name.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return hotel;
                }
              })
              .map((hotel, id) => {
                return (
                  <div className="hotelCards" key={id}>
                    <Link to={`/hot/${hotel.id}`}>
                      <img
                        className="pics"
                        src={hotel.image}
                        alt={hotel.name}
                      />
                      <p>
                        <div className="name"> {hotel.name} </div>
                        <div className="location">{hotel.location}</div>
                      </p>
                    </Link>
                  </div>
                );
              })}

        {/* 
        {info.filter((hotel)=>{
          if(searchValue==="")
          {
            return hotel
          }
          else if(hotel.name.toLowerCase().includes(searchValue.toLowerCase()))
          {
            return hotel
          }
        }).map((hotel,id)=>{
          return <div className='hotelCards' key={id}>
            <Link to={`/hot/${hotel.id}`}>
            <img className="pics" src={hotel.image} alt={hotel.name}/>
            <p>            
            <div className='name'> {hotel.name} </div>
            <div className='location'>{hotel.location}</div>
          </p>
          </Link>
          </div>
        
        })
        
        
        }        */}
      </div>
    </div>
  );
};

export default Hotels;
