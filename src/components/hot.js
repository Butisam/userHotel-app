import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db,auth } from "../config/firebase";
import BookRoom from './bookRoom'
import"./hot.css"



const Hot = () => {


  const { id } = useParams()
    const param = useParams()
    // console.log(param.id);

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
          id:doc.id
        }))
      );
  }
  getDetails();
  },[]);
  const [users,setUsers]=useState('')
  useEffect(()=>
  {
  const usersCollectionRef=collection(db,"users")

  const getUsers=async()=>{
    const data=await getDocs(usersCollectionRef);
        setUsers(
        data.docs.map((doc)=>({
          id: doc.data().id,
          email: doc.data().email,
          contact: doc.data().contact,
          customer: doc.data().name,
        }))
      );
  }
  getUsers();
  },[]);
  let user=""
  for (let i=0;i<users.length;i++)
  {
    if(users[i].id===auth.currentUser.uid)
    {
      user=users[i]

    }
  }
  console.log(users);
 let data=""
  for(let i=0;i<info.length;i++)
  {
    if(info[i].id===param.id)
    {
        data=info[i]
    }
  }
  //  console.log(data);
let history = useHistory();
  const bookings =(()=>{
    const collectionRef = collection(db, "bookhotel");
                    addDoc(collectionRef, {
                        name: data.name,
                        location: data.location,
                        price: accum,
                        customer: user.customer,
                        contact: user.contact,
                        id:auth.currentUser.uid,    
                      })
                        .then(() => {
                            alert("Hotel booked ", { type: "success" });
                            // history.push("/booking")
                        })
                        .catch((err) => {
                            alert("Error adding hotel", { type: "error" });
                        });
                        history.push("/booking")
    // console.log(user);

  })


let params = useParams();
    const [price, setprice] = useState(data.price);
    const[ meal, setmeal] = useState("");
    const[ numDays, setnumDays] = useState(0);
    const [total, settotal]= useState(data.price);
    const[accum, setaccum] = useState(0)
    let ans=0;
function getInput(date,mealType,options){

    let diffdAYS = date[0].endDate-date[0].startDate;
    let days = diffdAYS/(1000 * 60 * 60 * 24);
          setnumDays(days);
    
          console.log(mealType);
          console.log(" days " + numDays);
          console.log("adult " + options.adult);
          console.log("room " + options.room);
          console.log("child " + options.children);
    
          if(mealType==="Meal"){
    
            ans=parseInt(((data.price * days) *options.room) + 100)
            console.log('Total is R',ans);
            setaccum(ans);
          }else{
            ans=parseInt(((data.price * days) *options.room))
            
            console.log('Total is R',ans);
            setaccum(ans);
          }
          
        }
// console.log(users)



    return ( 
        <div className="body">
            <BookRoom getInput={getInput} />
            <div className="hot-card" >
              <div className='pic'>
             <img className="hotel-pic" src={data.image} alt={data.name}/>
           </div>
           <h1 className="nam">Name: {data.name}</h1>
           <p className="nam">Place: {data.location}
           </p>
           <p className="price">R {data.price}.00</p>
           <p className="price">R {accum}.00</p>
           <button className="bookBtn" onClick={bookings}>
             Book{" "}
            </button>
            </div>
            
        </div>
      
     );
}
 
export default Hot;