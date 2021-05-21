
const localTimestring = (time) => {
    const date = new Date(time * 1000)
    return date.toLocaleTimeString();
}

function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('cityweather').value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.WEATHER_API_KEY}&units=metric`)
        .then((apidata) => {
            console.log(apidata)
            return apidata.json();
        })
        .then((data) => {
            const sunrise = data.sys.sunrise;
            const sunset = data.sys.sunset;
            const temp = data.main.temp;
            const sunriseTime = localTimestring(sunrise);
            const sunsetTime = localTimestring(sunset);
            const humidity = data.main.humidity;
            const minTemp = data.main.temp_min;
            const maxTemp = data.main.temp_max;
            const sunIcon = '<i class="fas fa-sun"></i>';
            const snowIcon = '<i class="fas fa-snowflake"></i>';
            const cloudIcon = '<i class="fas fa-sun"></i>';
            let icon = cloudIcon; 

                     if (temp >= 25 && temp <= 60) {
                             icon = sunIcon;
                           

                         }

                         else if (temp <= 0 && temp >= -20) {
                             icon = snowIcon;
                        }



            document.getElementById('print').innerHTML = `Temperature = ${temp} °C ${icon} <br> sunrise ${localTimestring()}  <br> sunset=${localTimestring()} <br> Max Temperature=${maxTemp} <br> Min Temperature=${minTemp} <br> Humidity=${humidity} <br> `;





        })
        .catch((error) => {

            console.log(error)
        })
}


