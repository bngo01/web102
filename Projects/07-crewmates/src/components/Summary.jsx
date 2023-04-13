import {useEffect} from "react"

function Summary({data}){
    useEffect(() => {}, [data])

    return (
        <div className="Summary">
            <p>Total: {data.length}</p>
        </div>
    )
}

export default Summary