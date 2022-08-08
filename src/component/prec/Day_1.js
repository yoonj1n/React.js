// DayList 버튼 클릭 시 접속 페이지 component

import React from "react";
import dummy from "../db/data.json"
// 페이지 넘어올때 받아오는 숫자 사용
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){

    //바로 받아서 사용
    const day = useParams().day;
    const wordList = dummy.words.filter(word =>(word.day === Number(day)))
    
    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word =>(
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </div>

    )
}