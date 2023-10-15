import React from "react";
import Title from "../title/title";
import ZodiacTable from "../zodiac-table";
import {data} from "../../data/zodiac"

import "./main.css"


function Main(){
    return(
        <>
        <Title></Title>
        <ZodiacTable zodiacSigns={data.zodiacSigns}></ZodiacTable>
        </>
    )
}

export default Main