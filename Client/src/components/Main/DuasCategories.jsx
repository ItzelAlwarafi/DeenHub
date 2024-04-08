import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function DuasCategories() {
    let navigate = useNavigate()

    const showDuas = (id)=> {
        navigate(`${id}`)

    }

const [duas,setDuas] = useState([])

useEffect(() => {
        const getDuas= async ()=> {
            const response = await axios.get('http://localhost:3001/duas')
            setDuas(response.data)
           
        }
        getDuas()

},[])

console.log(duas)
  
if (!duas){
    return <div className='loading-tag'> Loading.....</div>
}else{
return(
    <div className='duas-list-container'>
     
     {duas.map((dua) => (
    <div className='dua-card' key={dua._id}>
        <p> {dua.arabic_text}</p>
        <label>Transliteration: </label>
          
        <p>{dua.transliteration}</p>
        <labe> Translation </labe>
        <p>{dua.translation}</p>
       
    </div>
))}


    </div>


)


}







}