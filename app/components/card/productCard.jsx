export default function ProductCard(props){
    return <div  className={`h-96 w-96 backdrop-blur-sm  bg-white/25 flex flex-col justify-around items-center`}>
        <div className="h-2/3 w-full p-5">
        <img src={props.img} className="h-full w-full object-contain" ></img>
        </div>
        <div className="h-1/3  w-full flex flex-col justify-around items-start px-5">
        <p className="font-bold text-3xl text-orange-900">{props.title}</p>
        <p className="text-sm pb-2">{props.discription}</p>
        </div>
    </div> 
}