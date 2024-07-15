"use client"
import {gsap} from "gsap"
import {useRef } from 'react';
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Lato } from "next/font/google";
import Lottie from "lottie-react";
import homeface from "../../public/homeanimate.json"
import ProductCard from "./card/productCard";
import Title from "./card/title";
import {motion} from "framer-motion"
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Font = Lato({
    subsets:["latin"],
    weight:["900","400"]
})
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
    const ref10 = useRef(null)
    const ref11 = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from(ref1.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref2.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref3.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref4.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref5.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref6.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref11.current,{
            y:-10,opacity:0,
            duration:0.15
        })
        tl.from(ref7.current,{
            opacity:0,
            duration:0.3
        })
        tl.from(ref8.current,{
            opacity:0,
            duration:0.2
        })
        tl.from(ref10.current,{
            opacity:0,
            duration:0.2
        })
        tl.from(ref9.current,{
            opacity:0,
            duration:0.7
        },"-=0.2")
        
    },[])
    return<div className="h-screen flex-grow w-full bg-white snap-y snap-mandatory scroll-smooth overflow-y-scroll ">
        <div className="h-16 w-full  z-10 bg-orange-400/10 shadow-sm fixed top-0 backdrop-blur-sm flex justify-between items-center px-5">
        <div className="h-full flex justify-center  items-center">
        <img ref={ref1} src="https://digitalfortress.in/_next/static/media/logo.7fbc3c85.svg " className="h-2/3"></img>
        </div>
        <div className="w-1/2 flex justify-between items-center font-medium ">
            <Link className="hover:underline  hover:text-orange-500 " ref={ref2} href={"/#home"} >
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
                About 
            </Link>
            <Link className="hover:underline hover:text-orange-500 " ref={ref11} href={"/#contactus"}>
                Contact 
            </Link>
        </div>
        </div>
        <div id="home"  className="h-screen w-full  flex justify-around items-center pt-20 snap-start snap-always bg-orange-50 ">
            <div className="w-3/5 h-2/3 flex flex-col justify-around items-start pl-20">
                <div ref={ref7} className={`${Font.className} w-full font-extrabold text-7xl flex justify-center items-end pb-2 `}>
                Protect Your Digital World with Passwordless Authentication.
                </div>
                <p ref={ref8} className={` text-xl text-orange-500 ${Font.className}`}>DigitalFortress Private Limited offers a secure and convenient passwordless authentication solution to safeguard your online accounts and prevent cyber attacks. Say goodbye to the hassle of remembering passwords and protect your digital identity with ease.</p>
                <button ref={ref10} className="flex justify-center items-center px-3 py-1 bg-orange-500 text-white rounded-lg text-xl">Contact us!</button>
            </div>
            <div ref={ref9} className=" h-full w-2/5 flex justify-center items-center">
            <Lottie animationData={homeface}></Lottie>
            </div>
        </div>
        <div id="products" className="h-screen w-full flex flex-col justify-center items-center bg-orange-200 snap-start snap-always ">
            <Title name="PRODUCTS"></Title>
            <div className="grid grid-cols-3 gap-5">
            <ProductCard name="Mukham" one="AI-based Attendance System" two="Geo Fencing" three="Data Management" four="3D Maps"></ProductCard>
            <ProductCard name="MauthN" one="Flexible device usage for authentication." two="Enhanced security with multimodal and multifactor options." three="Platform-independent advanced multifactor authentication." four="Multiple passwordless authentication factors available for users."></ProductCard>
            <ProductCard name="mIsolate" one="Agentless Security" two="Flexible and Customizable" three="Open-Source Foundations

" four="Complete Endpoint Protection"></ProductCard>
            </div>
        </div>
        <div id="services" className="h-screen w-full flex flex-col justify-center items-center snap-start snap-always bg-orange-50">
            <Title name="SERVICES WE OFFER"></Title>
            <div className="grid grid-cols-3 gap-5">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            </div>
        </div>
        <div id="testimonial" className="h-screen w-full flex flex-col justify-center items-center bg-orange-200 snap-start snap-always">
            <Title name="TESTIMONIALS"></Title>
            <div className="grid grid-cols-3 gap-5">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            </div>
        </div>
        <div id="aboutus" className="h-screen w-full flex flex-col justify-center items-center snap-start snap-always bg-orange-50">
        <Title name="ABOUT US"></Title>
            <div className="w-full h-2/3 flex justify-center items-center">
                <motion.div className=" w-2/3 h-full flex justify-center items-center px-20 text-lg">
                
                </motion.div>
                <div className=" w-1/3 h-full">
                    <img className="h-full  object-cover" src="https://digitalfortress.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMukham-Poster.9f77aa34.png&w=384&q=75">
                    </img>
                </div>
            </div>
        </div>
        <div id="contactus" className="h-screen w-full flex flex-col justify-center items-center snap-start snap-always bg-orange-200 ">
            <Title name="CONTACT US"></Title>
            <div className="w-2/3 shadow-sm h-3/5 flex bg-orange-50 rounded-lg">
            <div className="w-1/2 h-full flex justify-around items-center  flex-col">
                <div className="w-full h-1/3  flex justify-around items-center flex-col">
                <p className="text-2xl font-bold">Want to meet in-person?</p>
                <p>Our office</p>
                <p>VIT-AP CB</p>
                <p>Amaravathi,Andhra Pradesh 522237</p>
                </div>
                <div className="w-full  h-1/3  flex flex-col justify-around items-center">
                    <p className="text-2xl font-bold">Social Links</p>
                    <div className="w-1/2 justify-between items-center flex"><IoLogoLinkedin className="text-4xl cursor-pointer" /><FaInstagramSquare className="text-4xl cursor-pointer" /><FaTwitter className="text-4xl cursor-pointer" /><FaFacebook className="text-4xl cursor-pointer" /></div>
                </div>
            </div>
            <div className="">

            </div>
                <div className="h-full w-1/2 flex  justify-center  items-center">
                <div className="h-4/6 w-2/3 flex flex-col justify-around items-start">
                <p className="font-bold text-2xl">Mail Us</p>
                <div className="flex flex-col"> 
                <label>email</label>
                <input className="rounded-lg w-full p-2 mt-2" type="email"></input>
                </div>
                <div>
                <label>content</label>
                <textarea className="w-full rounded-lg p-2 mt-2"></textarea>
                </div>
                <button className="px-4 py-1 bg-orange-800 text-white rounded-lg">Mail</button>
                </div>
                </div>
                
        
            </div>
        </div>
    </div>
}