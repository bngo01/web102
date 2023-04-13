import {useEffect, useRef} from "react"

function Form ({data, onChange, onSubmit}) {
    const input = useRef(null)

    useEffect(() => {
        return () => {}
    }, [data])

    return (
        <div className="Form">
            <form onSubmit = {onSubmit}>
                <div className="name_input">
                    <label>
                        Name: 
                        <input type="text" name="name" value={data.name} onChange={onChange} ref={input} required/>
                    </label>
                </div>

                <br></br>

                <div className="speed_input">
                    <label>
                        Speed: 
                        <input type="range" min="0" max="10" step="1" name="speed" value={data.speed} onChange={onChange} ref={input}/>
                        <span>{data.speed}</span>
                    </label>
                </div>

                <br></br>

                <div className="color_input">
                    <label>
                        Color: 
                        <input type="radio" id="color" name="color" value="red" onChange={onChange} defaultChecked={data.color === "red" ? true : null} required/>
                    <span>🔴</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="blue" onChange={onChange} defaultChecked={data.color === "blue" ? true : null}/>
                        <span>🔵</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="green" onChange={onChange} defaultChecked={data.color === "green" ? true : null}/>
                        <span>🟢</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="pink" onChange={onChange} defaultChecked={data.color === "pink" ? true : null}/>
                        <span>🦩</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="orange" onChange={onChange} defaultChecked={data.color === "orange" ? true : null}/>
                        <span>🟠</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="yellow" onChange={onChange} defaultChecked={data.color === "yellow" ? true : null}/>
                        <span>🟡</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="black" onChange={onChange} defaultChecked={data.color === "black" ? true : null}/>
                        <span>⚫</span>
                    </label>

                    <label>
                        <input type="radio" id="color" name="color" value="white" onChange={onChange} defaultChecked={data.color === "white" ? true : null}/>
                        <span>⚪</span>
                    </label>
                </div>

                <br></br>

                <input type="submit" className="button"/>
            </form>
        </div>
    )
}

export default Form