import { useState } from "react";

const Form = ({setData}) => {
    const [city, setCity] = useState('')

    const getWeather = (city) => {
      
        const key = 'f4833cf990dc92ef43563c9b00da2a78';
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(response => response.json())
        .then((data)=>{
          setData(data)
        })
    }

    return (
      <div className="form">
        <input type="text" onChange={(event) => {
            setCity(event.target.value)

        }}/>
        <button onClick={() => {
            getWeather(city)
        }}>get</button>
      </div>
    )
}
  
export default Form;
  