//Weather api

 const apiURL= "//api.openweathermap.org/data/2.5/weather?id=5128581&appid=0d176e289de6d663c753fbd8f6091247&units=imperial";
// const apiURL= "//api.openweathermap.org/data/2.5/weather?zip=80239&appid=0d176e289de6d663c753fbd8f6091247&units=imperial";

fetch (apiURL)
.then((response) => response.json())
.then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("feels").innerHTML=weatherInfo.main.feels_like;
    document.getElementById("windSped").innerHTML=weatherInfo.wind.speed;
    document.getElementById("humid").innerHTML=weatherInfo.main.humidity;
    document.getElementById("sunny").innerHTML=weatherInfo.sys.sunrise;

    const iconcode= weatherInfo.weather[0].icon;
    console.log(iconcode); //optional to test code
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path); //optional to test code

    document.getElementById("weatherIcon").src= icon_path;
    //document.getElementById("sun").innerHTML=weatherInfo.sys.sunrise;
    
});

//movie Imdb
const api2URL= "//www.omdbapi.com/?apikey=a525e77c&i=tt0114709";

fetch (api2URL)
.then((response) => response.json())
.then((movieInfo) => {
    console.log(movieInfo);

    document.getElementById("title").innerHTML=movieInfo.Title;
    document.getElementById("year").innerHTML=movieInfo.Year;
    document.getElementById("plot").innerHTML=movieInfo.Plot;
    document.getElementById("cast").innerHTML=movieInfo.Actors;


});

//name info api

fetch ("testdata.json")
.then((mydata) => mydata.json())
.then((mydata) => {
    console.log(mydata);
    console.log(mydata.gender);
    console.log(mydata.name);
    console.log(mydata.url);

    document.getElementById("first").innerHTML= "Welcome " + mydata.name;
    document.getElementById("second").innerHTML= "You can reach me at " + mydata.url;

});

//ultimo task
//Change the body tag's style so it has a font-family of "Arial, sans-serif"
document.body.style.fontFamily = 'Arial, sans-serif';

//Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('nickname').textContent = 'Princess Bubblegum';
document.getElementById('favorites').textContent = 'Princess Bubblegum';
document.getElementById('hometown').textContent = 'Princess Bubblegum';

//Iterate through each li and change the class to "list-item".
var items = document.getElementsByTagName('li');
for (var i=0; i < items.length; i++) {
    items[i].className = 'list-item';
}
//(In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var myPic = document.createElement('img');
myPic.src = 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
document.body.appendChild(myPic);
