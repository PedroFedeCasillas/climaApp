import { useNavigate } from "react-router-dom";
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from "react-redux";
import { setScrollY } from "../redux/slices/cities";

import "./WeatherCard.css";

const WeatherCard = (city: any) => {

    const navigate : any = useNavigate();
    const dispatch : any = useDispatch();

    function saveScrollY(){
        dispatch(setScrollY(window.scrollY));
    }

    function onMoreInfo() : void {
        saveScrollY();
        navigate(`/more?q=${city.name}`);
    }

    function onClose(e : any) : void {
        e.stopPropagation();
        city.onClose(city.id);
    }

    return (
        <div className="cardWeather pointer" onClick={onMoreInfo}>
            <IoMdClose className="moreBtnBack" onClick={onClose} />
            <div>
                <div className="pt-4 pb-1">   
                    <img className="cardImg" src={city.icon} alt="404"></img>
                </div>
                <div className="ps-3 pe-3">                   
                    <h1 className={city.name.length < 15 ? "cardTitle" : "cardTitle cardTxt16"}>{city.name}</h1>
                    <span id="cardMax">{city.tempMax}°C</span>
                    <span id="cardMin">{city.tempMin}°C</span>
                    <p>{city.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;