
import { useEffect, useState } from "react"

const WeatherDisplay = () => {
    
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [error, setError] = useState('')
  // const[show,setshow]=useState('')
  const[searching,setSearching]=useState(false)
  const handleCity = (e) => {
    setCity(e.target.value)
  }

  useEffect(() => {

    const fetchData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'de99f8883de34c946b5c083457843aa0'}`;

      try {
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        } 
          const data = await response.json()
          setWeather(data);
          setError("");

        
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setError("Failed to fetch weather data");
      }
    }
      if (searching) {
        fetchData();
        setSearching(false);
      }
    
},[city,searching])




    
  const updateWeather = () => {
    city === '' ? setError('Please Enter the valid City Name...') : city.trim() ? setSearching(true) : null;
  }


  return (
      <div>
      <input type="text" value={city} onChange={handleCity}  className="border border-solid"/>
      {error && <p>{error}</p>}
      {weather && 
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>

        </div>
      }
      <button onClick={updateWeather}>show</button>
    </div>
  )
}

export default WeatherDisplay