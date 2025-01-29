import { FaStar , FaStarHalfStroke   } from "react-icons/fa6";

type RateProps = {
    rate: number;
}


export default function RateStars({rate}: RateProps){
    const starsArr = [1, 2, 3, 4, 5];
    
    return (
        <div className="rating">
            
            {
                starsArr.map(starNum=>{
                    if(starNum <= rate){
                        return <FaStar key={starNum} className="colored"/>
                    }else if((starNum - rate) < 0.6){
                        return <FaStarHalfStroke key={starNum} className="colored"/>
                    }else{
                        return < FaStar key={starNum} />
                    }
                })
            }
        </div>
    )
}

