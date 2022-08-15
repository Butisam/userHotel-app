import {
    faBed,
    faCalendarDays,
    faPerson,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./hearder.css";
  import { useState } from "react";
  import { Link, useHistory } from "react-router-dom";
  
  const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
 
  
    const navigate = useHistory();
  
   
    const handleSearch = () => {
      navigate("/hotels", { state: { destination } });
    };
    const [searchValue, setSearchValue] = useState("")

    
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
              Find your next stay
              </h1>
              <p className="headerDesc">
              Search low prices on hotels, homes and much more..
              </p>
              
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;
  