 let weather= {
  apiKey:"640823a7cd0206f7569c01210901078f",
  fetchWeather: function(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`)
    .then(data=>{
      return data.json();
    })
    .then(post=>{
      this.displayWeather(post)
    })
    .catch(error=>{
      console.error(error)
    })
  },
  displayWeather: function(data){
    const {name}=data;
    const {temp,humidity,}=data.main;
    const {description, icon, main}=data.weather[0];
    const {speed}= data.wind;
    document.getElementById("city").innerHTML=name;
    document.getElementById("temp").innerHTML=`${temp}&deg;C`;
    document.getElementById("humidity").innerHTML=`${humidity}%`;
    document.getElementById("wind-speed").innerHTML=speed;
    document.getElementById("desc").innerHTML=description;
    document.getElementById("icon").src=`https://openweathermap.org/img/wn/${icon}.png`;
    document.getElementById("weather-type").innerHTML=main

    document.getElementById("weather-info").classList.remove("loading")

    document.body.style.backgroundImage=  "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function(){
    this.fetchWeather(document.getElementById("search-bar").value)
  }
 }

 document.getElementById("search").addEventListener("click", ()=>{
  weather.search();
 })
 document.getElementById("search-bar").addEventListener("keyup", (event)=>{
  if(event.key== "Enter"){
    weather.search();
  }
 })
 weather.fetchWeather("Lagos")