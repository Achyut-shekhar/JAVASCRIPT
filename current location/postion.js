let btn = document.querySelector(".positionuser");
console.log("chal raha hai");

btn.addEventListener("click",()=>{
    console.log("working");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition);
    } else {
        document.getElementsByClassName("location")[0].innerHTML = "Geolocation is not supported by this browser.";
    }
});



const showposition=(position)=> {
    console.log("working");
    document.getElementsByClassName("location")[0].innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
