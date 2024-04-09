import { Routes, Route } from 'react-router-dom'
import Home from '../components/Main/Home'
import Quranpage from '../components/Main/Quranpage'
import PrayerTimes from '../components/Main/PrayerTimes'
import DuasCategories from '../components/Main/DuasCategories'
import EventDeatails from './Main/EventDeatails'
import Message from './Main/Message'
import UserProfile from './Main/UserProfile'
import UserSearch from './Main/UserSearch'


export default function Main(){
 



    return(
       <>
       <Routes>
       <Route path='/' element={ <Home/> }/>
        <Route path = '/quran' element= {<Quranpage/>}/>
        <Route path='/prayertimes' element={<PrayerTimes/>}/>
        <Route path='/duas' element={<DuasCategories/>}/>
        <Route path='/events/:id' element={<EventDeatails/>} />
        <Route path='/message' element={<Message/>}/>
        <Route path='/users/:id' element ={<UserProfile/>}/>
        <Route path='/UserSearch' element = {<UserSearch/>}/>
       </Routes>
       </>
         
       
    )
}

