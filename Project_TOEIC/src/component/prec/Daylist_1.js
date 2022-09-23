//Home에 버튼 연결 Component

import React from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";

export default function Daylist(){
    console.log(dummy);
    return(
        <div>
            <ul className="list_day">
                {dummy.days.map(day =>(
                    <li key = {day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}