import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { IDay } from "./Daylist";

export default function Createword(){
    const days : IDay[] = useFetch('http://localhost:3001/days');
    // history 역할을 해주는 navigate, 현재 위치에서 Link to 사용 없이도 이동을 시켜준다.
    const navigate = useNavigate();
    // 단어 생성으로 네트워크 통신중일때 막 클릭 못하게
    const [isLoading,setisLoading]=useState(false);

    // onSubmit = 이벤트 발생 시 행동, preventDefalut() --> 기본기능(새로고침) 막기
    function onSubmit(e: React.FormEvent){
        e.preventDefault();
        // current = 현재 dom에 접근 가능, value = 값 얻기
        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);
        
        if (!isLoading && dayRef.current && engRef.current && korRef.current){    
            setisLoading(true);

            const day =dayRef.current.value;
            const eng =engRef.current.value;
            const kor =korRef.current.value;

            fetch(`http://localhost:3001/words/`,{
                method : 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone : false
                }),
            })
            .then(res=>{
                if(res.ok){
                    alert("추가되었습니다.");
                    navigate(`/day/${day}`)
                    setisLoading(false);
                }
            })}
    }

    // useRef hook : dom에 접근할 수 있도록 한다. 스크롤 정보나 뭐 그런 정보 가져올 때 사용
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return(
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day=>(
                        <option key={day.id}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button style={
                {opacity: isLoading? 0.3:1,}
            }>{isLoading?"Saving...":"저장"}</button>
        </form>
        

    )
}