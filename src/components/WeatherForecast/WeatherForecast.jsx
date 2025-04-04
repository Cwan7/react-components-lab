import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx';
import WeatherData from '../WeatherData/WeatherData.jsx'
import  './WeatherForecast.css';

const WeatherListItem = (props) => {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <WeatherIcon img={props.img}
            imgAlt={props.imgAlt}
            />
            <WeatherData 
            conditions={props.conditions}
            time={props.time}
            />
          
        </div>
    );
};

export default WeatherListItem;