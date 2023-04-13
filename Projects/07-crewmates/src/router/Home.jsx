import {useState, useEffect} from "react"
import {supabase} from "../../client"
import Card from "../components/Card"
import Summary from "../components/Summary"

function Home() {
    const controller = new AbortController()
    const [crewList, setCrewList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data, err} = await supabase.from("Crewmate").select().order("created_at", {ascending : true})
            setCrewList(data)
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div className="Home">

            <br></br>
            
            <h2>Introducing our crews!</h2>
            <Summary data={crewList}/>

            <br></br>

            <div className="Crews">
                {crewList && crewList.map((crew) => (
                    <Card 
                        key={crew.id}
                        id={crew.id}
                        name={crew.name}
                        color={crew.color}
                        speed={crew.speed}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home