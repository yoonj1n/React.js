import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Createday(){
    const days = useFetch('http://localhost:3001/days');
    const navigator = useNavigate();

    function add_day(){
        fetch(`http://localhost:3001/days/`,{
            //`http://localhost:3001/words/`
            method : "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                day: days.length+1
            }),
        }).then(res=>{
            if(res.ok){
                alert('추가되었습니다.');
                navigator('/');
            }
        })
    }



    return(
        <div>
            <h2>현재 일수 : {days.length}일</h2>
            <button onClick={add_day}>Day 추가</button>
        </div>

    )
}