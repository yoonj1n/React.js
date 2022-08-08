//  단어 처리
// 데이터 받아와서 이걸 바꾸면서 보여주고싶을땐 state를 사용해서 보여준다.
// 직접적으로 넘겨받는 데이터는 useParams 해서 Pram으로 쓰자!
// 단, Prams는 값을 변동시킬 수 없다.
import React, { useState } from "react";

interface IProbs {
    word: IWord;
}

export interface IWord {
    day: string;
    eng: string;
    kor: string;
    isDone: boolean;
    id: number;
}

export default function Word({word:w}:IProbs){
/*
    word state 를 만든 이유 => 삭제했을때 바로 업데이트가 안됨,
    그래서 복사본 만들어서 --> dataset에서 삭제한 후 복사본 업데이트
    --> 복사본 정보를 받아서 업데이트 됐으면 바로 새로고침 (null return)
    stack pop 처럼 생각하면 될 것 같다.
*/
    const [word, setWord] = useState(w);
    const [isShow, setisShow] = useState(false);
    const [isDone, setisDone] = useState(word.isDone);

    function btnShow(){
        setisShow(!isShow)
    }
    function btnDone(){
        // setisDone(!isDone)
        // PUT 사용해서 API 데이터 바꾸기
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : 'PUT',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        })
        .then(res=>{
            if(res.ok){
                setisDone(!isDone);
            }
        })
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method : "DELETE",
            }).then(res=>{
                if(res.ok){
                    setWord({
                        ...word,
                        id:0,})
                }
            }
            )
        }
    }

    // 새로고침
    if (word.id ===0) return null;

    return(
        <tr className={isDone ? "off":""}>
            <td><input type="checkbox" checked={isDone}
            onChange={btnDone}/></td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={btnShow}>뜻 
                {isShow ? ' 숨기기' : ' 보기'}
                </button>
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>

    )
}