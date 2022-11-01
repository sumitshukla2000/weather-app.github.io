let weather = {
    apiKey : "94b977f66e0243a06e08c09e0ff04c0c",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => 
        this.displayWeather(data));
        // console.log(data));
    },
    displayWeather:function(data){
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp , humidity} = data.main;
        const {speed} = data.wind;
        // console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity :" + humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "Kmph";  
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click" , ()=>{
    // console.log("Hello i am clicked");
    weather.search();
});


document.querySelector(".search-bar").addEventListener("keyup", (event)=>{
    if(event.key=="Enter"){
        weather.search();
    }
})
