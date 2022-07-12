import './spin.css'
import data from './gift'
import { useState } from 'react';
import React from 'react';



const Spin=()=>{
    const size=data.length;
    const rotate=360/size;
    const skewY=90-rotate;
    const timer=5000;
    let currrentRotate=0;
    const [isRotating,setIsRotating]=useState(true)
    const rotateWheel=(currrentRotate,index)=>{
        document.getElementById('wheel').style.transform=`rotate(${currrentRotate-index*rotate-rotate/2}deg)`
    };
    const getGift=(randomNumber)=>{ 
        let currentPercent=0;
        let list=[];
        data.forEach((item,index)=>{
            currentPercent +=item.percent;
            randomNumber<=currentPercent &&list.push({
                ...item,
                index
            })
        })
        return list[0];
    };
    const showTxt=(txt)=>{
        setTimeout(()=>{
            document.getElementById('msg').innerHTML=`You get ${txt.name}`
            console.log(txt);
            setIsRotating(true)
        },timer)
    };
    const start=()=>{
        setIsRotating(false)
        document.getElementById('msg').innerHTML="Vui long chờ trong giây lát"
        const random=Math.random();
        const gift=getGift(random);
        currrentRotate +=360*10;
        rotateWheel(currrentRotate,gift.index)
        showTxt(gift)
    }

    return(
        <div className='main'>
            <div className='main-wheel'>
                <ul className='wheel' id='wheel'>
                    {data.map((item,index)=>(
                        <li className='item'
                            style={{transform:`rotate(${rotate*index}deg) skewY(-${skewY}deg)`}}> 
                                <p className={index%2===0?"text-item": "even"}
                                    style={{transform:`skewY(${skewY}deg) rotate(${rotate/2}deg)`}}>
                                        <b>{item.name}</b>
                                </p>                  
                        </li>
                    ))}
                </ul>
            </div>
            <button 
            disabled={!isRotating}
            className='spin-btn'
            onClick={start}>
                SPIN
            </button>
            <h1 className='msg'
            id='msg'> </h1>
        </div>
    )
}

export default Spin