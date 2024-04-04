import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SideMenuData } from "./SideMenuData";

export default function Sidemenu(){
const [sidebar,setSideBar] = useState(false)

const showSidebar = () => setSideBar (!sidebar)

    return (

        <>
        <div className="sidebar">
            <Link to='#' className='menu-bar'>
                <FaBars className="fabars" onClick={showSidebar}/>
            </Link>
        </div>
       <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' } >
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="nav-mennu-toggle">
                    <Link to='#' className="menu-bars">
                    <AiOutlineClose />
                    </Link>
                </li>
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
            </ul>

       </nav>
        
        
        </>
    )

}

