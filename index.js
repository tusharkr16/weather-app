function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('cityweather').value;
    console.log(city);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`)
        .then((apidata) => {
            console.log(apidata)
            return apidata.json();
        })
        .then((data) => {
            const sunrise = data.sys.sunrise;
            const temp = data.main.temp;
            const date = new Date(sunrise* 1000);
            const timestr = date.toLocaleTimeString();

            document.getElementById('print').innerHTML = `temperature is ${temp} °C  <br> sunrise ${timestr}`;
            console.log(data)

            
            if(temp>30<=1){
              
                document.body.style.backgroundColor='linear-gradient(to bottom, #ffffff, #fffc00);'
                document.getElementById('print').innerHTML= `Temperature is ${temp} °C ` <i class""  <br> `sunrise ${timestr}`;
                
            }

            else if(temp>0){
                document.body.style.backgroundColor=' linear-gradient(to right, #005aa7, #fffde4)';
                document.getElementById('print').innerHTML= `Temperature is ${temp} °C ` <i class""  <br> `sunrise ${timestr}`;
            }
            else{
                document.body.style.backgroundColor='-webkit-linear-gradient(to right, #3a7bd5, #00d2ff);'
                document.getElementById('print').innerHTML= `Temperature is ${temp} °C ` <i class""  <br> `sunrise ${timestr}`;
               
            }
        
        })
        .catch((error) => {

            console.log(error)
        })
}


