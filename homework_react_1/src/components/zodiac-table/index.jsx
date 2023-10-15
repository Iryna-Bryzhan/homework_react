import React from "react";
import "./zodiac-table.css"

function ZodiacTable({zodiacSigns}){
    console.log(zodiacSigns)
    return(
        <table>
            <thead>
                <tr>
                    <th>Знак зодіаку</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(zodiacSigns) ? 
                    zodiacSigns.map(function({name, date}, i){
            
                    return(
                        <tr>
                            <td>{name}</td>
                            <td>{date}</td>
                        </tr>
                    ) 
                        
                })
                : console.error("error")
            }
            </tbody>
        </table>
    )
}

export default ZodiacTable