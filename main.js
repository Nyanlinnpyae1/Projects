let weather={
    "apikey": "9a14a857a3cc305366b19c513d331289",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
             + city 
             + "&units=metric&appid=" 
             + this.apikey 
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
         displayWeather: function(data){
          const { name }=data;
     const { icon, description }=data.weather[0];
   const { temp,humidity }=data.main;
     const { speed }=data.wind;    
     console.log(name,icon,description,temp,humidity,speed);
     document.querySelector(".city").innerText = "Weather in " + name;
     document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + ".png";
     document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity" + humidity + "%";
    document.querySelector(".wind").ineerText = "Wind Speed" + speed + "km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});