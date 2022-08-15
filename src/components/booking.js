import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { auth, db } from "../config/firebase";
import Navbar from "../NavBar/Navbar";
import "./bookings.css";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "bookhotel");
    const q = query(collectionRef, orderBy("location", "desc"));
    onSnapshot(q, (snapshot) => {
      const bookings = snapshot.docs.map((doc) => ({
        docId: doc.id,
        image: doc.data().image,
        ...doc.data(),
      }));
      setBookings(bookings);
    });
  }, []);
  let user = [];
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === auth.currentUser.uid) {
      user.push(bookings[i]);
    }
  }

  const deleteHotel = async (id) => {
    const hotelDoc = doc(db, "bookhotel", id);
    await deleteDoc(hotelDoc)
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      {user.map((booking, id) => (
        <div className="hotelCard" key={id}>
          <div className="details">
            <p className="names">
              {booking.customer} {booking.contact}
            </p>
            <p className="cust-name">
              {booking.name} {booking.location}{" "}
            </p>
            <p className="price">R{booking.price}</p>
            <button
              className="remove-btn"
              onClick={() => deleteHotel(booking.docId)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;
