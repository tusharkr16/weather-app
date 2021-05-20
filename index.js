function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('cityweather').value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c194c45c83e3d89b18eae23afe5a48c6&units=metric`)
        .then((apidata) => {
            console.log(apidata)
            return apidata.json();
        })
        .then((data) => {
            const sunrise = data.sys.sunrise;
            const sunset= data.sys.sunset;
            const temp = data.main.temp;
            const date = new Date(sunrise* 1000);
            const timestr = date.toLocaleTimeString();
            const humidity = data.main.humidity;
            const minTemp= data.main.temp_min;
            const maxTemp=data.main.temp_max;
           

            document.getElementById('print').innerHTML = `temperature= ${temp} °C  <br> sunrise =${timestr} <br> sunset=${sunset} <br> Max Temperature=${maxTemp} <br> Min Temperature=${minTemp} <br> Humidity=${humidity} <br>`;
            console.log(data)

            
            if(temp<=15 && temp>30){
              
                document.body.style.backgroundColor="linear-gradient(to bottom, #ffffff, #fffc00)";
                document.getElementById('print').innerHTML= `Temperature = ${temp} °C <i class="fas fa-sun"></i> <br> sunrise =${timestr} <br> sunset=${sunset} <br> Max Temperature=${maxTemp} <br> Min Temperature=${minTemp} <br> Humidity=${humidity} `;
                
            }

            else if(temp>14 && temp<0){
                document.body.style.backgroundColor=" linear-gradient(to right, #005aa7, #fffde4)";
                document.getElementById('print').innerHTML= `Temperature is ${temp} °C <i class"<i class="fas fa-cloud-sun"></i>"  <br> sunrise ${timestr}  <br> sunset=${sunset} <br> Max Temperature=${maxTemp} <br> Min Temperature=${minTemp} <br> Humidity=${humidity} <br> `;
            }
            else{
                document.body.style.backgroundColor="linear-gradient(to right, #3a7bd5, #00d2ff)";
                document.getElementById('print').innerHTML= `Temperature is ${temp} °C <i class"<i class="fas fa-snowflake"></i>"  <br> sunrise ${timestr} <br> sunset=${sunset} <br> Max Temperature=${maxTemp} <br> Min Temperature=${minTemp} <br> Humidity=${humidity} <br>`;
               
            }
        
        })
        .catch((error) => {

            console.log(error)
        })
}


