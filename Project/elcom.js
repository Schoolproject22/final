window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
})

function auth(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email== "admin@gmail.com" && password=="admin123"){
        window.location.assign("Home.html");
        alert("Login Successfully ");
    }
    else{
        alert("Invalid Information ");
        return;
    }
}