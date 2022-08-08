//Home에 버튼 연결 Component

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import dummy from "../db/data.json";

export default function Daylist(){
    const [days,setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onclick(){
        setCount(count+1);
    }
    
    function onclick2(){
        setDays([
            ...days,
            {
                id : Math.random(),
                day : 1,
            },
        ]);
    }
    
    // useEffect : state 값 바뀐 후 업데이트 되면 동작하는 함수
    /* 
    불필요한 실행을 막기 위해 2번째 매개변수로 배열 [state] 전달
    == 의존성 배열, state count의 변화에만 의존하여 작동

    만약, 최초 한 번만 사용하는거면 빈배열 전달
    */
    useEffect(()=>{
        console.log("count change");
    },[]);
    
    return(
        <div>
            <ul className="list_day">
                {days.map(day =>(
                    <li key = {day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            <button onClick={onclick}>{count}</button>
            <button onClick={onclick2}>Day add</button>
        </div>

    )
}