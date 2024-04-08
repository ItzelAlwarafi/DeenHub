import { Link } from "react-router-dom"
 import { FaUserCircle } from "react-icons/fa"
 import { BsChatSquareTextFill } from "react-icons/bs"
 import { BsCalendarWeekFill } from "react-icons/bs"
 import { FaUserFriends } from "react-icons/fa";
 import { SideMenuData } from "../SideMenuData";
 
export default function Home ( ){




return(
    <>
    <div className="home-container">

<div className="home-container-1"> 

   <Link to = '# '>
   <FaUserCircle className="container-i-icons" />
   </Link>
 <Link to='#'>
 <BsChatSquareTextFill className="container-i-icons"  />
 </Link>
 <Link to='#' >
 <FaUserFriends className="container-i-icons" />
 </Link>
<Link to='#'>
<BsCalendarWeekFill  className="container-i-icons" />
</Link>
</div>

<div className="home-container-2">
    <h1>duas random qoutes</h1>
</div>
<div className="home-countainer-3">

  <div className = " home-container1-links">

  {SideMenuData.map((item ,index) => {
        return(
            <li key={index} className={item.cName}> 
            <Link to = {item.path} >
                {item.icon}
                <span>{item.title}</span>
            </Link>

            </li>
        )
})}
  </div>
</div>
<div className="home-container-4">
    <h1>Events 
       
    </h1>
</div>
   
    </div>
    </>
)
   
}