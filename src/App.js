import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Components/Header'
import InputCity from './Components/InputCity';
import ShowWeather from './Components/showWeather';
function App() {
  //Use State Functions
  const [error, setError] = useState(false);
  const [inputCity,setInputCity] = useState("")
  const [cityName,setCityName] =useState("")
  const [weatherData , setWeatherData] = useState({})
  
  // eslint-disable-next-line no-template-curly-in-string
  function inputHandler(e){
    setInputCity(e.target.value)
  };
  //Search Button Handler
  function submitHandler(e){
    e.preventDefault()
    setError(false)
    setCityName(inputCity)
  };

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=65165b33c55713f159d4116a1f6fd2ca`
  async function fetchData(URL){
    const response = await fetch(URL)
    const data = await response.json()
    if(data.cod==="404"){
      setError(true);
    }
    else{
      setWeatherData(data)
    }
  }
  useEffect(()=>{
    fetchData(URL)
    },[URL]);
  
  //Getting Input from the InputFunction and setting the Input City to that
 
 
  return (
    <div className="App">
      <div><Header/></div>
      <div><InputCity 
              city = {inputCity} 
              onInputHandler={inputHandler} 
              onSubmitHandler ={submitHandler}
              />
              </div>
      <div>
      {error ? (
        <h3 className="error">No data found :( </h3>
      ) : ( <ShowWeather data ={weatherData}/>)}
      </div>
      </div>
    
    
  );
}

export default App;
