/*
Rest API Json 데이터 들고오기 hook
const data = useFetch(url)
형식으로 사용
*/

import { useEffect, useState } from "react";

export default function useFetch(url: string){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setData(data);
        })
    },[url]);

    return data;
}