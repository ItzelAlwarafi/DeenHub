import { useNavigate , useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'




export default function EventDeatails (){

    const [event, setEvent] = useState()
    let {id} = useParams()

    useEffect(() => {
        const getEvent = async() => {
            const response = await axios.get(`http://localhost:3001/events/id/${id}`)
            setEvent(response.data)
        }
        getEvent()
    }, [event])
console.log(event)

if (!event){
    return <div className='loading-tag'>Loading.....</div>
}

return (
    <div className='pageDetails-container'>

    <div className='event-cards-details' >
        <img src={event.img} alt={event.title} />


    </div>
    </div>
)




}