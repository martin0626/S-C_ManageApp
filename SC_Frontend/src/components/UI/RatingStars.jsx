import { FaStar , FaStarHalfStroke   } from "react-icons/fa6";


export default function RateStars({rate}){
    const starsArr = [1, 2, 3, 4, 5];
    
    return (
        <div className="rating">
            
            {
                starsArr.map(starNum=>{
                    if(starNum <= rate){
                        return <FaStar className="colored"/>
                    }else if((starNum - rate) < 0.9){
                        return <FaStarHalfStroke className="colored"/>
                    }else{
                        return <FaStar/>
                    }
                })
            }
            {/* <FaStar className="colored"/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStarHalfStroke className="colored"/> */}
        </div>
    )
}

