"use client"
import { motion } from "framer-motion"
export default function Title(props){
    return <div initial={{
        opacity:0,
        y:-100
    }} 
    whileInView={{
        opacity:1,
        y:0
    }}
    transition={{
        delay:0.25,
        ease:"easeInOut"
        
    }}
    className="text-5xl font-bold pb-10"
    >
        {props.name}
    </div>
}