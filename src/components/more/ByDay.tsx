import { IoIosWater } from "react-icons/io";

import "./ByDay.css";

const ByDay = ({list} : any) =>{

    return (
        <div className="d-flex flex-column align-items-center">
            {list?.map((city : any, i : number) => 
                <div key={i} className="d-flex flex-row w-100 justify-content-center align-items-center">
                    <div className="d-flex align-items-center w-100">
                        <span className="byDayDay">{city.day}</span>
                    </div>
                    <div className="d-flex align-items-center w-100">
                        <IoIosWater className="byDayPopIcon"/>
                        <span className="byDayPop pe-1">{city.pop}%</span>
                        <img className="byDayIcon pt-1" src={city.iconDay} alt="404"></img>
                        <img className="byDayIcon pt-1" src={city.iconNight} alt="404"></img>
                    </div>
                    <div className="d-flex justify-content-end align-items-center w-100">
                        <span className="byDayTemp">{city.tempMax}°</span>
                        <span className="ps-1 pe-1">/</span>
                        <span className="byDayTemp">{city.tempMin}°</span>
                    </div>
                </div>
            
            )}            
        </div>
    )
}
export default ByDay;
