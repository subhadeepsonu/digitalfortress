export default function ReviewCard(props){
    return <div className="h-80 w-96 relative rounded-lg bg-orange-50 mx-10 shadow-sm">
        <div className="absolute h-24 w-24 rounded-full bg-white -top-12 left-36 ">
            <img className="h-full w-full rounded-full object-cover" src={props.img}></img>
        </div>
        <div className="px-5 w-full pt-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas veritatis ullam asperiores. Magnam necessitatibus odit ducimus natus et minus, ipsam quia sint, excepturi nemo unde quibusdam voluptatem enim assumenda qui!natus et minus, ipsam quia sint, 
        </div> 
        <div className="px-5 pt-2">
        {props.star}
        </div>
        <div className="px-5 font-semibold">
            {props.name}
        </div>
        <div className="px-5">
            {props.productname}
        </div>

    </div>
}