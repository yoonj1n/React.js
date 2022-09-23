import React from 'react';
import { useState } from 'react';
import UserName from './UserName';

export default function Hello({age}){
    const [name, setName] = useState('Mike');
    const msg = age>19? "성인입니다.":"아님";

    return (
        <div>
            <h1>{name} age = {age} : {msg}</h1>
            <UserName name={name} />
            <button onClick={()=>{setName(name ==="Mike"?"J":"Mike")}}>change</button>
        </div>
    )
    }
