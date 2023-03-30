import React from "react"
import TableRow from "./TableRow.jsx"

const ForecastList = ({ list }) => {
    let heading = ["Date", "Low", "High", "Avg Clouds", "Weather Description"]
    let body = []

    if (list != null) {
        for (let i = 0; i < 7; i++){
            body.push([
                list.data[i]["valid_date"],
                list.data[i]["min_temp"]+"ºC",
                list.data[i]["max_temp"]+"ºC",
                list.data[i]["clouds_mid"],
                [list.data[i].weather.description]
            ])
        }
    }

    return (
        <div className="forecast-cont">
            <h2>Next 7-day Forecast:</h2>
            <table>
                <thead>
                    <tr>
                        {heading.map((head, headID) => (
                            <th key={headID}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((rowContent, rowID) => (
                        <TableRow key={rowID} rowContent={rowContent} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ForecastList;