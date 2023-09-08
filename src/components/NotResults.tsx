
import notResults from "../assets/notResults.png";
import "./NotResults.css";

const NotResults = ({ cities }: any) => {

    return (
        <>
            {cities.length === 0 &&
                <div className="cardWeather d-flex flex-column justify-content-center align-items-center p-4">
                    <img className="notResultsImg" src={notResults} alt="404"></img>
                    <h5 className="notResultsDescrip">Hello, search for a city to see the forecast...</h5>
                </div>}
        </>
    );
}

export default NotResults;