import React, { useState } from "react";

const Tal=()=>{

  const Api_key="2573ff7e0ebf1f7bdb1f22485de51d7b";
  const[City,setCity]=useState("")
  const[Weather,setWeather]=useState(null)
  const[error ,seterror]=useState()
  
  async function wetherdata()
{
  
  try {
    seterror(" ")
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${Api_key}`)
    if(!response.ok) throw new Error("city not found")
  const weathervalue= await response.json()
  setWeather(weathervalue)
  console.log(response)
  } catch (error) {
    setWeather(null)
    seterror(error.message)
    
  }
  
}

    return(
    <div className="bg-images bg-cover  bg-no-repeat min-h-screen flex flex-col items-center justify-center p-4" >
       <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 text-white">
       <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide">
           🌍 Weather Forecast
         </h1>
         <div className="flex flex-col items-center justify-center gap-4">
             <input onChange={(e)=>setCity(e.target.value)}
               onKeyDown={(e)=> e.key === "Enter" && wetherdata()}
             type="text" name="" placeholder="City Name" className="p-3 w-11/12 text-black rounded-xl font-bold outline-none h-10" id="" />
             <button onClick={wetherdata}
             className="bg-white  w-11/12 text-sky-600 font-semibold py-2 rounded-xl  hover:bg-indigo-500" >
             🔍 Search Weather
             </button>
         </div>
         {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        {
          Weather && (
            <div className="mt-6 text-center">
            <img src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} className="mx-auto h-32 w-32 object-contain mb-4" alt="" />
            <h2 className="text-3xl font-bold">{Weather.name}/{Weather.sys.country}</h2>
            <p className="text-xl capitalize">{Weather.weather[0].main}</p>
            <p className="text-xl capitalize">{Weather.weather[0].description}</p>
            <p className="text-5xl font-extrabold mt-2">{Weather.main.temp}°C</p>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-white">
                <div className="bg-white w-24 mr-4 bg-opacity-25 text-black rounded-xl p-2">
                <p className="font-semibold">Humidity</p>
                <p>{Weather.main.humidity}%</p>
                </div>
                <div className="bg-white w-24 mr-4 bg-opacity-25 text-black rounded-xl p-2">
                <p className="font-semibold">Wind</p>
                <p>{Weather.wind.speed} m/s</p>
                </div>
                <div className="bg-white w-24 mr-4 text-black bg-opacity-25 rounded-xl p-2">
                <p className="font-semibold">Clouds</p>
                <p>{Weather.clouds.all}%</p>
              </div>
               
            </div>
          </div>
          )
        }
        
       </div>
    </div>  
    )
}
export default Tal;
