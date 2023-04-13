import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {supabase} from "../../client"
import './About.css'

function About ({}) {
    const {id} = useParams()
    const controller = new AbortController()
    const [crewInfo, setCrewInfo] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            const {data, error} = await supabase.from("Crewmate").select().eq("id", id)
            setCrewInfo(data[0])
        }
        fetchData()

        return () => controller.abort()
    }, [])

    return (
        <div className="About">
            <br></br>

            <h2>Detail about the crew</h2>
            {crewInfo != null && (
                <div className="detail-img">
                    <img src={`../src/assets/${crewInfo.color}.png`}/>
                    <div className="detail-crew-info">
                        <p>ID: {crewInfo.id}</p>
                        <p>Name: {crewInfo.name}</p>
                        <p>Speed: {crewInfo.speed}</p>
                        <p>Color: {crewInfo.color}</p>
                        <p>Created at: {crewInfo.created_at.slice(0, 10)}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About