
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";



export default function Header(){





return (
   <>
   
   <div className="Top-bar-container">
   <Link to='/'className="Top-bar-container">
       <img className="logo" src="DeenHubsvg.svg"></img>
   </Link>
   
    <Link>
    <IoMdNotifications className="bell"/>
    </Link>
        

   </div>
   
   
   </>
   
   
   
)

}