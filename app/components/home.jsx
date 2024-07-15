"use client"
import {gsap} from "gsap"
import {useRef } from 'react';
import { useGSAP } from "@gsap/react";
import Link from "next/link";
export default function HomePage(){
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(ref1.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref2.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref3.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref4.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref5.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref6.current,{
            y:-50,opacity:0,
            duration:0.3
        })
        tl.from(ref7.current,{
            opacity:0,
            scale:0,
            duration:0.3
        })
        tl.from(ref8.current,{
            opacity:0,
            scale:0,
            duration:0.3
        })
        tl.from(ref9.current,{
            opacity:0,
            scale:0,
            duration:0.5
        })
    },[])
    return<div className="h-[500vh] w-full bg-white">
        <div className="h-20 w-full bg-black/5 shadow-sm fixed top-0 backdrop-blur-lg flex justify-between items-center px-5">
        <div className="h-full flex justify-center  items-center">
        <img ref={ref1} src="https://digitalfortress.in/_next/static/media/logo.7fbc3c85.svg " className="h-2/3"></img>
        </div>
        <div className="w-1/3 flex justify-between items-center ">
            <Link className="hover:underline hover:text-orange-500 " ref={ref2} href={"/#home"} >
                Home
            </Link>
            <Link className="hover:underline hover:text-orange-500 " ref={ref3} href={"/#products"}>
                Products
            </Link>
            <Link className="hover:underline hover:text-orange-500 " ref={ref4} href={"/#services"}>
                Services
            </Link>
            <Link className="hover:underline hover:text-orange-500 " ref={ref5} href={"/#testimonial"}>
                Testimonials
            </Link>
            <Link className="hover:underline hover:text-orange-500 " ref={ref6} href={"/#aboutus"}>
                About Us
            </Link>
        </div>
        </div>
        <div id="home"  className="h-screen w-full  flex justify-around items-center pt-20 ">
            <div className="w-2/3 h-full flex flex-col justify-center items-center pl-20">
                <div ref={ref7} className=" w-full font-extrabold text-7xl flex justify-center items-end pb-2 ">
                Protect Your Digital World with Passwordless Authentication.
                </div>
                <p ref={ref8} className=" text-xl text-orange-500">DigitalFortress Private Limited offers a secure and convenient passwordless authentication solution to safeguard your online accounts and prevent cyber attacks. Say goodbye to the hassle of remembering passwords and protect your digital identity with ease.</p>
            </div>
            <div ref={ref9} className=" h-full w-1/3 flex justify-center items-center">
                <img className="h-96 object-cover" src="https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
        </div>
        <div id="products" className="h-screen w-full flex justify-center items-center ">
            products
        </div>
        <div id="services" className="h-screen w-full flex justify-center items-center ">
            services
        </div>
        <div id="testimonial" className="h-screen w-full flex justify-center items-center ">
            testimonail
        </div>
        <div id="aboutus" className="h-screen w-full flex justify-center items-center ">
            about us
        </div>
    </div>
}