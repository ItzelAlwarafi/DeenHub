import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"
import { BsChatSquareTextFill, BsCalendarWeekFill } from "react-icons/bs"
import { FaUserFriends } from "react-icons/fa"
import { SideMenuData } from "../SideMenuData"
import DuasCategories from "./DuasCategories"
import RandomDuas from './RandomDuas'
import Events from './Events'
import Message from "./Message"
import { useContext } from "react"
import userContext from "../../UserContext"
import UserSearch from "./UserSearch"
export default function Home() {

const {loggedInUser, setLoggedInUser } = useContext(userContext)

   console.log(loggedInUser)

 

    return (
        <div className="home-container">
            <div className="home-container-1">
                <Link to='/UserProfile'>
                    <FaUserCircle className="container-i-icons" />
                </Link>
                <Link to="/messages">
                    <BsChatSquareTextFill className="container-i-icons" />
                </Link>
                <Link to='/UserSearch'>
                    <FaUserFriends className="container-i-icons" />
                </Link>
                <Link to='/calendar'>
                    <BsCalendarWeekFill className="container-i-icons" />
                </Link>
            </div>

            <div className="home-container-2">
                <RandomDuas />
            </div>

            <div className="home-container-3">
                <div className="home-container1-links">
                    {SideMenuData.map((item, index) => (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </div>
            </div>

            <div className="home-container-4">
                <Events />
            </div>
        </div>
    )
}
