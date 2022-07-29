
const result=document.getElementById("result");
const btn=document.getElementById("search");
// let long;
// let lat;
// window.addEventListener('load', () => {
    
//     // Accesing Geolocation of User
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((city) => {
//         // Storing Longitude and Latitude in variables
//         long = city.coords.longitude;
//         lat = city.coords.latitude;
//       });
//     }
//   });


btn.addEventListener("click",()=>{  
  
  let city=document.getElementById("myinput").innerHTML;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c940af4a9ec829b48953de704db2cdb`; 


    fetch(`${url}${city}`).then((response)=> response.json()).then((data)=>{
        console.log(data);
        result.innerHTML=
        `
            <div class="word">
                <h3>${data[0].word}</h3>
            </div>
          
        `
    }).catch(()=>{
        result.innerHTML=`<h4 class="error"> Couldn't Find the city, please try another city</h4>`
    })
})


  

  // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=6c940af4a9ec829b48953de704db2cdb

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c940af4a9ec829b48953de704db2cdb&units=metric`;

  // const url=`http://api.weatherapi.com/v1/current.json?key=02c98d856846424b886232150222207&q=${city}`;
