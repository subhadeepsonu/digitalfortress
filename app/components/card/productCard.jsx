"use client"
import {motion} from "framer-motion"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
export default function ProductCard(props){
    return <div className="bg-black hover:scale-105 duration-150 ">
     <div 
    className={`h-96 w-96 -translate-x-2 -translate-y-2  border-2 border-orange-800 ${props.bg} flex flex-col justify-around items-start text-amber-950`}>
        <div className="flex w-full h-1/6 justify-between items-center px-5">
        <p className=" flex justify-center items-center  text-center text-4xl font-semibold">{props.name}</p>
        <Link className="underline flex justify-center items-center" href={""}>know more<IoIosArrowRoundForward className=" text-2xl -rotate-45" /></Link>
        </div>
      
        <div className="h-5/6 w-full flex flex-col justify-around items-start px-5  ">
            <p className="flex"><TiTick className=" text-orange-800  text-2xl" />{props.one}</p>
            <p className="flex"><TiTick className=" text-orange-800 text-2xl" />{props.two}</p>
            <p className="flex"><TiTick className=" text-orange-800 text-2xl" />{props.three}</p>
            <p className="flex"><TiTick className=" text-orange-800 text-2xl" />{props.four}hah</p>
        </div>
    </div>    
    </div>  
}