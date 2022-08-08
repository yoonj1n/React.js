// DayList 버튼 클릭 시 접속 페이지 component

import React, { useEffect, useState } from "react";
// 페이지 넘어올때 받아오는 숫자 사용
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){

    //바로 받아서 사용
    const day = useParams().day;
    const [words, setWords] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setWords(data);
        })
    // 여기서 useEffect를 day를 사용했는데 의존성으로 안넣어주면 day가 바꼈을때 업데이트가 잘 안됨 --> day 추가
    },[day]);
    // const wordList = words.filter(word =>(word.day === Number(day)))
    
    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word =>(
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </div>

    )
}