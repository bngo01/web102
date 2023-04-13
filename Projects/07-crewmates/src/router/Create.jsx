import {useEffect, useState} from "react"
import {supabase} from "../../client"
import Form from "../components/Form"

function Create() {
    const controller = new AbortController()
    const [crewInput, setCrewInput] = useState({
        name : "",
        speed : "0",
        color : ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCrewInput ((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await supabase.from("Crewmate").insert(crewInput)
        setCrewInput ({
            name : "",
            speed : "0",
            color : ""
        })
        window.location = "/"
    }

    useEffect(() => {
        return () => controller.abort()
    }, [])

    return (
        <div className="Create">
            <br></br>
            <h2>Be a member of the crew!</h2>
            <Form data={crewInput} onChange={handleChange} onSubmit={handleSubmit}/>
        </div>
    )
}

export default Create