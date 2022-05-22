import React, { FC, useEffect, useState } from 'react'
import { BsStarFill,BsStar, BsStarHalf } from 'react-icons/bs'

export interface IHBStar {
    max:number,
    total?:number,
    margin?:number,
    padding?:number,
    width?:number
}

const HBStar: FC<IHBStar> = ({max,total,margin,padding,width}) => {

    const [full,setFull] = useState<number>(0);
    const [half,setHalf] = useState<number>(0);

    useEffect(()=>{
        const parseArr = total?.toString().split(".");
        if(parseArr){
            if(parseArr[0]) setFull(parseInt(parseArr[0]))
            if(parseArr[1]) setHalf(parseInt(parseArr[1]))
        }

        console.log(full, half);
        
        
    },[])

    return (
        <div className={`flex m-${margin} w-${width} p-${padding}`} >
            {
                Array(full).fill(null).map((el:number,i:number) =>(
                    <BsStarFill className="text-hb-light-orange" />
                ))
            }
            {
                half > 0 && <BsStarHalf className="text-hb-light-orange"/>
            }
            {
                Array(max-full-1).fill(null).map((el:number,i:number)=>(
                    <BsStar />
                ))
            }
            
        </div>
    )
}

export default HBStar;
