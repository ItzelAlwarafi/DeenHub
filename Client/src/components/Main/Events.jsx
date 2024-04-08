import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Events() {
    let navigate = useNavigate()

    const showEvent = (id) => {
        navigate(`/events/${id}`)
    }

    const [randomEvent, setRandomEvent] = useState(null)

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3001/events')
                const events = response.data
                const randomIndex = Math.floor(Math.random() * events.length)
                const selectedEvent = events[randomIndex]
                setRandomEvent(selectedEvent)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }

        getEvents() 

        const interval = setInterval(() => {
            getEvents() // Fetch a new random event every 10 seconds
        }, 10000)

        return () => clearInterval(interval) // Cleanup the interval on component unmount
    }, [])

    if (!randomEvent) {
        return <div className='loading-tag'>Loading.....</div>
    }

    return (
        <div className='event-cards-home' onClick={() => showEvent(randomEvent._id)}>
            <img src={randomEvent.img} alt={randomEvent.title} />
        </div>
    )
}
