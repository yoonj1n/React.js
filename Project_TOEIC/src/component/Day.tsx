// DayList 버튼 클릭 시 접속 페이지 component

import React from "react";
// 페이지 넘어올때 받아오는 숫자 사용
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";

export default function Day(){

    //바로 받아서 사용
    const day = useParams().day;
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)
    // const wordList = words.filter(word =>(word.day === Number(day)))
    
    return(
        <div>
            <h2>Day {day}</h2>
            {words.length===0 && <span>Loading...</span>}
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