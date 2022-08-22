let weather= document.getElementById("weather");


let getAPI= fetch("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=640823a7cd0206f7569c01210901078f")
.then(data=>{
  return  data.json();
})
.then(post=>{
    console.log(post)
})
.catch(error=>{
    console.error(error);
})