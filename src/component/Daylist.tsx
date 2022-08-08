//Home에 버튼 연결 Component

// import React, { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
// import dummy from "../db/data.json";

export interface IDay{
    id : number;
    day: number;
}


export default function Daylist(){

    /*
        hook 작성 시 
    */

    // const [days,setDays] = useState([]);
    
    // API 연결, fetch 사용 
    // useEffect(()=>{
    //     fetch('http://localhost:3001/days')
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data=>{
    //         setDays(data);
    //     })
    // },[]);
    const days : IDay[] = useFetch('http://localhost:3001/days');

    //속도가 느릴때 :  느리면 Fetch 로딩이 느리니 length = 0
    if(days.length===0){
        return <span>Loading...</span>
    }
    
    return(
        <div>
            <ul className="list_day">
                {days.map(day =>(
                    <li key = {day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}