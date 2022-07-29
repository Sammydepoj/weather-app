let city=document.getElementById("myinput").value;
const result=document.getElementById("result");
const btn=document.getElementById("search");
let long;
let lat;
window.addEventListener('load', () => {
    
    // Accesing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((city) => {
        // Storing Longitude and Latitude in variables
        long = city.coords.longitude;
        lat = city.coords.latitude;
      });
    }
  });

btn.addEventListener("click",()=>{    
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${long}&appid=6c940af4a9ec829b48953de704db2cdb&units=metric`;

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

