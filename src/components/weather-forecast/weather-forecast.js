import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./weather-forecast.css";

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WeatherForecast = ({ data }) => {
    const currentDay = new Date().getDay();
    const forecastDay = DAYS_OF_WEEK.slice(currentDay, DAYS_OF_WEEK.length).concat(DAYS_OF_WEEK.slice(0,currentDay));
    console.log(forecastDay);

    return (
        <>
            <label className="title">Forcasted Daily Weather</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-forecast">
                                    <img alt="weather" className="weather-icon" src={`weather-icons/${item.weather[0].icon}.png`} />
                                    <label className="DoW">{forecastDay[idx]}</label>
                                    <label className="Description">{item.weather[0].description}</label>
                                    <label className="TempMinMax">{item.main.temp_min}°C/{item.main.temp_max}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="weather-grid">
                                <div className="grid-details">
                                    <label>Pressure</label>
                                    <label>: {item.main.pressure}hPa</label>
                                </div>
                                <div className="grid-details">
                                    <label>Humidity</label>
                                    <label>: {item.main.humidity}%</label>
                                </div>
                                <div className="grid-details">
                                    <label>Wind</label>
                                    <label>: {item.wind.speed} m/s</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                ))}
            </Accordion>
        </>
    )
}
export default WeatherForecast;