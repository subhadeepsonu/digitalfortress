"use client"
import {gsap} from "gsap"
import {useRef, useState } from 'react';
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
import Contactus from "../components/contact"
import { useRouter } from "next/navigation";
import ReviewCard from "./card/reviewcard";

const Font = Lato({
    subsets:["latin"],
    weight:["900","400"]
})

export default function HomePage(){
    const [img,setImg]= useState("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")
    const [rotate,Setrotate]= useState("")
    const router = useRouter()
    const [color,setColor] = useState("bg-gradient-to-b from-gray-50 to-orange-200")
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
    return<div className="h-screen flex-grow w-full bg-white snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden">
        <div className="h-16 w-full  z-10 bg-white/15 shadow-sm fixed top-0 backdrop-blur-sm flex justify-between items-center px-5">
        <div className="h-full flex justify-center  items-center">
        <img ref={ref1} src="https://digitalfortress.in/_next/static/media/logo.7fbc3c85.svg" className="h-2/3 "></img>
        </div>
        <div className="w-1/3 flex justify-between items-center font-medium ">
            <Link className="" ref={ref2} href={"/#home"} >
                Home
            </Link>
            <Link className="" ref={ref3} href={"/#products"}>
                Products
            </Link>
            <Link className=" " ref={ref5} href={"/#review"}>
                Reviews
            </Link>
            <Link className=" " ref={ref6} href={"/#aboutus"}>
                About
            </Link>
            <Link className=" " ref={ref11} href={"/#contactus"}>
                Contact
            </Link>
        </div>
        </div>
        <div id="home"  className="h-screen w-full  flex justify-around items-center pt-16 snap-start snap-always bg-gradient-to-t from-gray-50 to-orange-200 ">
            <div className="w-3/5 h-full flex flex-col justify-center items-start pl-20 ">
                <div ref={ref7} className={`${Font.className} tracking-wide flex-col pb-10  leading-tight w-full font-extrabold text-6xl flex justify-center   `}>
                    Protect Your Digital World with Passwordless Authentication.
                </div>
                <p ref={ref8} className={` text-orange-600 font-ligh `}>DigitalFortress Private Limited offers a secure and convenient passwordless authentication solution to safeguard your online accounts and prevent cyber attacks. Say goodbye to the hassle of remembering passwords and protect your digital identity with ease.</p>
                <div ref={ref10} className=" mt-10">
                <button onClick={()=>{
                    router.push("/#contactus")
                }} ref={ref10} className="flex z-10 -2 justify-center rounded-lg items-center px-3 py-1 bg-orange-500 text-white  text-xl">Contact us !</button>
                </div>
            </div>
            <div ref={ref9} className=" h-full w-2/5 flex justify-center items-center">
            <Lottie className="h-2/3"  animationData={homeface}></Lottie>
            </div>
        </div>
        <div id="products"  className={`h-screen w-full flex flex-col justify-center items-center  snap-start snap-always ${color} `}>
            <Title name="PRODUCTS"></Title>
            <div className="grid grid-cols-3 gap-10">
            <div className="cursor-pointer" onMouseEnter={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-rose-200")
            }}
            onMouseLeave={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-orange-200")
            }}
            >
            <ProductCard bg="bg-red-200" name="Mukham" one="AI-based Attendance System" two="Geo Fencing" three="Data Management" four="3D Maps"></ProductCard>
            </div>
            <div className="cursor-pointer" onMouseEnter={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-green-200")
            }}
            onMouseLeave={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-orange-200")
            }}
            >
            <ProductCard bg="bg-green-200" name="MauthN" one="Flexible device usage for authentication." two="Enhanced security with multimodal and multifactor options." three="Platform-independent advanced multifactor authentication." four="Multiple passwordless authentication factors available for users."></ProductCard>
            </div>
            <div className="cursor-pointer" onMouseEnter={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-blue-200")
            }}
            onMouseLeave={()=>{
                setColor("bg-gradient-to-b from-gray-50 to-orange-200")
            }}>
            <ProductCard bg="bg-blue-200" name="mIsolate" one="Agentless Security" two="Flexible and Customizable" three="Open-Source Foundations" four="Complete Endpoint Protection"></ProductCard>
            </div>
            </div>
        </div>
        <div id="review" className="h-screen w-full flex flex-col justify-evenly items-center  bg-gradient-to-t from-gray-50 to-orange-200 snap-start snap-always">
            <div className="flex flex-col justify-center items-center">
            <p className="text-6xl font-semibold mb-2 w-3/4 text-center " >Reviews that speaks volumes.</p>
            <p className="tracking-wide mt-2 text-sm">Dont just take our word for it, hear what people have to say about us</p>
            </div>
            <div className="flex">
            <ReviewCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaFMnnp2jVk3HXJf98HdhFu8L8lCsXAGHaA&s"} star={"⭐⭐⭐⭐⭐"} name={"Subhadeep Thandaka"} productname={"Mukham"}></ReviewCard>
            <ReviewCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHZTQs8ojYjldwZDeEM73Fk6h4BOOXGRL1A&s"} star={"⭐⭐⭐⭐"} name={"Achyut Badyal"} productname={"MauthN"}></ReviewCard>
            <ReviewCard img={"https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"} star={"⭐⭐⭐⭐⭐"} name={"Adithya Sai "} productname={"Mlsolate"}></ReviewCard>
            </div>
        </div>
        <div id="aboutus" className="h-screen w-full flex flex-col justify-center items-center snap-start snap-always bg-gradient-to-b from-gray-50 to-orange-200">
        <div className="flex h-full w-full  justify-around items-center">
        <div className={`h-2/3 w-1/3  ${rotate}`}>
            <img className={`w-full h-full object-cover  `} src={img}></img>
            </div>
            <div className="w-1/2 h-2/3 flex flex-col justify-center items-center">
            <div className="h-1/5 w-full flex justify-start items-center  text-6xl font-semibold ">
                Nice to meet you
               </div>
               <div onMouseEnter={()=>{
                setImg("https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg")
                Setrotate("rotate-3")
               }} onMouseLeave={()=>{
                setImg("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")
                Setrotate("")
               }} className="h-1/5 w-full flex justify-center items-center border-t-2 border-b-2 border-black ">
                1
               </div>
               <div  onMouseEnter={()=>{
                setImg("https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg")
                Setrotate("-rotate-3")
               }} onMouseLeave={()=>{
                setImg("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")
                Setrotate("")
               }} className="h-1/5 w-full flex justify-center items-center  border-b-2 border-black  ">
                2
               </div>
               <div   onMouseEnter={()=>{
                setImg("https://www.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg")
                Setrotate("rotate-3")
               }} onMouseLeave={()=>{
                setImg("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")
                Setrotate("")
               }} className="h-1/5 w-full  flex justify-center items-center border-b-2 border-black ">
                3
               </div>
               <div   onMouseEnter={()=>{
                setImg("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg")
                Setrotate("-rotate-3")
               }} onMouseLeave={()=>{
                setImg("https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649")
                Setrotate("")
               }} className="h-1/5 w-full flex justify-center items-center  border-b-2 border-black ">
                4
               </div>
               
            </div>
            
        </div>
        </div>
        <div id="contactus" className="h-screen w-full flex  justify-around items-center snap-start snap-always bg-gradient-to-t from-gray-50 to-orange-200 ">
           <div className="bg-white/15 backdrop-blur-sm h-96 w-96 flex flex-col justify-evenly items-center rounded-lg">
                        {/* <p className="font-semibold text-3xl">Office</p> */}
                        <div className="flex flex-col justify-center items-start">
                            <p className="font-bold text-lg">VIT-AP</p>
                            <p>VIT-AP Central Block</p>
                            <p>Amravathi,Andhra Pradesh 522237</p>
                        </div>
                      <div>
                        <p className="font-bold text-lg">Follow Us</p>
                        <div className="flex w-[260px] justify-between pt-4 ">
                        <FaFacebook className="text-3xl cursor-pointer hover:scale-125 duration-100 hover:text-orange-400"></FaFacebook>
                        <FaInstagramSquare className="text-3xl cursor-pointer hover:scale-125 duration-100 hover:text-orange-400"></FaInstagramSquare>
                        <FaTwitter className="text-3xl cursor-pointer hover:scale-125 duration-100 hover:text-orange-400"></FaTwitter>
                        <IoLogoLinkedin className="text-3xl cursor-pointer hover:scale-125 duration-100 hover:text-orange-400"></IoLogoLinkedin>
                        </div>
                      </div>
           </div>
           <Contactus></Contactus>
           <div className="bg-white/15 backdrop-blur-sm h-96 w-96 flex flex-col justify-center items-center rounded-lg">
                        {/* <p className="font-semibold text-2xl">Mail</p> */}
                        <div>
                            <p>Careers</p>
                            <p></p>
                        </div>
                        <div>
                            <p>Press</p>
                            <p></p>
                        </div>
           </div>
            
        </div>
    </div>
}