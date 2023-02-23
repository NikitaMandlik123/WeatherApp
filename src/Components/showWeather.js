import React, { useEffect, useState } from 'react'

import '/Users/nikitamandlik/Desktop/github/WeatherApp/src/Components/styles.css'
function ShowWeather({data}){
    const [dynamicBg,setDynamicBg] = useState("")
    const city = data.name;
    const country = data.sys? data.sys.country:null;
    const temp = data.main?data.main.temp:null;
    const pressure = data.main?data.main.pressure:null;
    const visibility = data? data.visibility:null;
    const humidity = data.main? data.main.humidity:null;
    const clouds = data.clouds? data.clouds.all:null;

    const pressureInAtm = (pressure / 1000).toFixed(2);
    const tempInCelcius = (temp / 10).toFixed(2);
    const visibilityInKM = (visibility / 1000).toFixed(2);

    const dynamicBgColor = (temp) =>{
        if(temp<10){
            setDynamicBg("#bbeafa")
        }
        if(temp > 10 && temp <= 30){
            setDynamicBg("#fcfa5b")
        }
        if(temp>30){
            setDynamicBg(" #ff512f")
        }
    }
    useEffect(()=>{
        dynamicBgColor(tempInCelcius);
    },[tempInCelcius]);
    return(
        <div className='showWeather'>
            <div className='weatheer-main'>
                <h1 className='weather-heading'>
                   {city}<br/><span>{country}</span> 
                </h1>
                <h3 className='temp'>Temperature : {tempInCelcius} C</h3>
                <hr/>
                <div className='weather-data'>
                    <p>
                        Pressure<br/>{pressureInAtm} atm
                    </p>
                    <p>
                        Visibility <br/> {visibilityInKM} Km
                    </p>
                    
                </div>
                <div className='weather-data'>
                    <p>
                        Humidity : <br/> {humidity} %
                    </p>
                    <p>
                        Clouds : <br/> {clouds} %
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ShowWeather;

