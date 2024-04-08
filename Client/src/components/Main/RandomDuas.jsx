import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function RandomDua() {
    let navigate = useNavigate()

    const showDua = (id) => {
        navigate(`/${id}`)
    }

    const [randomDua, setRandomDua] = useState(null);

    useEffect(() => {
        const getDuas = async () => {
            try {
                const response = await axios.get('http://localhost:3001/duas')
                const duas = response.data;
                const randomIndex = Math.floor(Math.random() * duas.length)
                const selectedDua = duas[randomIndex]
                setRandomDua(selectedDua)
            } catch (error) {
                console.error('Error fetching duas:', error)
            }
        }
        getDuas()
    }, [])

    if (!randomDua) {
        return <div className='loading-tag'>Loading.....</div>
    }

    return (
      
            <div className='dua-cards-home' onClick={() => showDua(randomDua._id)}>
                <p>{randomDua.arabic_text}</p>
                <label>Translation: </label>
                <p>{randomDua.translation}</p>
            </div>
       
    )
}
