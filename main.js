
const result=document.getElementById("result");
const btn=document.getElementById("search");
// function to be performed when users click the srarch button
btn.addEventListener("click",()=>{ 
    
//   get users input from the html file
  let city=document.getElementById("myinput").value;

//   url to the API
  const url=`https://api.weatherapi.com/v1/current.json?key=02c98d856846424b886232150222207&q=${city}`;



    fetch(`${url}`).then((response)=> response.json()).then((data)=>{
    
        console.log(data);
        // the below informations will be showed as response from the API
        result.innerHTML=
        `
            <div class="word">
                <h3>${data["location"]["name"]}</h3>
                <small>${data["location"]["country"]}</small>
            </div>

                    <div class="weather-icon"><img src="${data['current']['condition']['icon']} " alt=""></div>

            <div class="result-element">

            <div class="condition"><span class="title">Condition:</span><span class="cloud-result">${data["current"]["condition"]["text"]}</span></div>
            <div class="humidity"><span class="title">Humidity:</span><span class="cloud-result">${data["current"]["humidity"]}</span></div>
            <div class="temp"><span class="title">Temperature:</span><span class="cloud-result">${data["current"]["temp_c"]}<span>  degree celcius </span></span></div>
            <div class="latitude"><span class="title">Latitude:</span><span class="cloud-result">${data["location"]["lat"]}</span></div>
            <div class="longitude"><span class="title">Longitude:</span><span class="cloud-result">${data["location"]["lon"]}</span></div>
            <div class="date-n-time"><span class="title">Local Date and Time:</span><span class="cloud-result">${data["location"]["localtime"]}</span></div>

        </div>
        `
    })
    // to be displayed in case there is any error
    .catch(()=>{
        result.innerHTML=`<h4 class="error"> Couldn't Find the city, please try another city</h4>`
    })
})


