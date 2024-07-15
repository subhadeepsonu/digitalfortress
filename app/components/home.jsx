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
            <Lottie animationData={homeface
                
            }></Lottie>
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
                Our company, DigitalFortress Private Limited, is poised for substantial growth due to the innovative and high-impact nature of our products, MAuthN and Mukham. MAuthN introduces a revolutionary approach to authentication by eliminating traditional passwords and implementing passwordless multi-factor authentication. It ensures robust identity verification through advanced cryptographic techniques, device attestation, and biometrics, thereby mitigating cyber threats and unauthorized access. Mukham, on the other hand, offers state-of-the-art employee monitoring, streamlining workforce management with features such as facial recognition-based attendance tracking, geo-fencing, an anti-spoofing module, and an AI secretary. The compelling reasons behind our company's high growth potential lie in the fact that both products directly address pressing market demands, such as enhanced cybersecurity and operational efficiency, while ensuring a user-friendly experience. Our adaptability to emerging technologies, comprehensive control, data-driven insights, and competitive advantages further bolster our position in the market, making us the preferred choice for businesses across various industries. We are confident that our commitment to innovation and security will continue to drive our growth and success in the digital realm
                </motion.div>
                <div className=" w-1/3 h-full">
                    <img className="h-full  object-cover" src="https://digitalfortress.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMukham-Poster.9f77aa34.png&w=384&q=75">
                    </img>
                </div>
            </div>
        </div>
        <div id="contactus" className="h-screen w-full flex flex-col justify-center items-center snap-start snap-always bg-orange-200 ">
            <Title name="CONTACT US"></Title>
            <div className="grid grid-cols-3 gap-5">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            </div>
        </div>
    </div>
}