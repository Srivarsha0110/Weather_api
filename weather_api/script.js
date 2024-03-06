



    
 var temp=document.getElementById('temp');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('serchbox')
 var body_img=document.getElementById('body_img');

 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('deatil')
 var error=document.getElementById('error')





    async function checkWeather(city) {
        let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  
    

    
    if (data.weather[0].main=="Clouds") {
        body_img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD08NK8T8Xm6hVLzhUXiM-dDYbtjjLcA2o0A&usqp=CAU'
    }
     else if (data.weather[0].main=='Clear') {
        body_img.src='image/clear.png'
    }
    else if (data.weather[0].main=='Rain') {
        body_img.src='https://media.istockphoto.com/id/1166244112/vector/weather-forecast-layout-design.jpg?s=612x612&w=0&k=20&c=YDrR6PAdZVy9G-xXW2PRe3pQ4X3yyPlWRNTGGnzAh_8='
    }
    else if (data.weather[0].main=='Drizzle') {
        body_img.src='image/darzizzl.png'
    }
    else if (data.weather[0].main=='Mist') {
        body_img.src='image/mist.png'
    }
    else if (data.weather[0].main=='Haze') {
        body_img.src='image/haze.png'
    }
     body_data.style.display='flex';
     deatil.style.display='flex';
   

     }
     

      serchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);
         
      })