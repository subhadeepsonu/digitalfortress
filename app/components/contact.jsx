"use client"
import Lottie from "lottie-react";
import contact from"../../public/contact.json"
import { useRef } from "react";
export default function  ContactUs(){
    const ref1 = useRef(null)
    return <div>
        <Lottie  lottieRef={ref1} className="h-80"  animationData={contact} onComplete={()=>{
            
        }} ></Lottie>
    </div>
}