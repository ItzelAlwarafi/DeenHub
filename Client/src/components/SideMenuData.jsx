import { AiFillHome } from "react-icons/ai";
import { FaQuran } from "react-icons/fa";
import { GiPrayerBeads } from "react-icons/gi";
import { FaHandsHolding } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";

export const SideMenuData = [
    {
        title: 'Quran',
        path: '/quran',
        icon:<FaQuran />,
        cName: 'nav-text'
    },
    {
        title: 'Prayer Times',
        path: '/prayertimes',
        icon:<GiPrayerBeads />,
        cName: 'nav-text'
    },
    {
        title: 'Duas',
        path: '/duas',
        icon:<FaHandsHolding />,
        cName: 'nav-text'
    },

    {
        title: 'Messages',
        path: '/messages',
        icon:<FiMessageSquare />,
        cName: 'nav-text'
    },
   






]