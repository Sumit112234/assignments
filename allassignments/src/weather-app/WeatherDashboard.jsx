import React, { useEffect, useState } from "react";

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("Delhi");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


  const fetchWeather1 = async () => {
  setLoading(true);
  setError(null);

  try {
   
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = {
      name: city,
      main: {
        temp: 28.5,
        humidity: 65,
      },
      weather: [
        { description: "clear sky", icon: "01d" }
      ],
      wind: { speed: 3.5 },
    };

    setWeather(data);
    document.title = `Temp: ${data.main.temp}°C`;
  } catch (err) {
    setError("Something went wrong while fetching weather data!");
  } finally {
    setLoading(false);
  }
};

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch weather");
      const data = await response.json();
      setWeather(data);
      document.title = `Temp: ${data.main.temp}°C`;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Weather Dashboard</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded"
          placeholder="Enter city name"
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      {loading && <p>Loading weather data...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && !loading && (
        <div className="bg-white rounded-2xl shadow-md p-6 w-80 text-center">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
            className="mx-auto"
          />
          <h3 className="text-3xl font-bold">{weather.main.temp}°C</h3>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
