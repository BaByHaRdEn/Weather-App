let weather= document.getElementById("weather");


let getAPI= fetch("")
.then(data=>{
  return  data.json();
})
.then(post=>{
    console.log(post)
})
.catch(error=>{
    console.error(error);
})