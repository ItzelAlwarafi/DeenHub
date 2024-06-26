import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function QuranPage() {
    const [quran, setQuran] = useState(null)
    const [edition, setEdition] = useState('')
    const [editionList, setEditionList] = useState([])

    const handleEditionChange = async (e) => {
        const selectedEdition = e.target.value
        setEdition(selectedEdition) 
        
        if (selectedEdition) {
            try {
                const response = await axios.get(`http://api.alquran.cloud/v1/quran/${selectedEdition}`)
                setQuran(response.data);
                console.log('Quran data:', response.data)
            } catch (error) {
                console.error('Error fetching Quran data:', error)
            }
        }
    }

    useEffect(() => {
        const getEditions = async () => {
            try {
                const response = await axios.get('http://api.alquran.cloud/v1/edition')
                setEditionList(response.data.data)
                console.log('Editions:', response.data)
            } catch (error) {
                console.error('Error fetching Quran editions:', error)
            }
        }
        getEditions()
    }, [])

    return (
        <div className='quran-page-container'>
            <Link to='/' className=' links4'  >Back</Link>
            <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
            <h2> Bismillahir Rahmanir Raheem  </h2>
            <select id='edition' value={edition} onChange={handleEditionChange}>
                <option value=''>Select Edition By Name</option>
                {editionList.map(edition => (
                    <option key={edition.identifier} value={edition.identifier}>
                        {edition.englishName} 
                    </option>
                ))}
            </select>
            <div className='quran-display-container'>
                {quran && quran.data && quran.data.surahs && (
                    <ul>
                        {quran.data.surahs.map(surah => (
                            <div key={surah.number} className='surah-card'>
                                 <h3>{surah.number}</h3>
                                <h3>{surah.name}</h3>
                                <p>{surah.englishNameTranslation}</p>
                              
                                {surah.ayahs.map(ayah => (
                                        <div key={ayah.number}>
                                            <p>{ayah.number}</p>
                                            <p>{ayah.text}</p>
                                        </div>
                                        
                                    ))}
                                
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
