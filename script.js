function loginform() {
    const emailref = document.getElementById("email");
    const passwordref = document.getElementById("password");
    const email = emailref.value;
    const password = passwordref.value;
    console.log(email);
    console.log(password);
    if (email === "hammad@gmail.com" && password === "1234") {
        // alert("Login successful");
        const messageref = document.getElementById("message");
        messageref.innerHTML = "you are signed in"
    } else {
        const messageref = document.getElementById("message");
        messageref.innerHTML = "put your correct email or password"

    }
}

async function weatherinfo() {
    const cityref = document.getElementById("city");
    const city = cityref.value;
    // console.log(city);
    const weatherres = await fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`);
    const weather = await weatherres.json();
    const Weatherref = document.getElementById("weathercondition");
    const currenttem = weather.current.temp_c;
    Weatherref.innerHTML=`Today Temperature of ${city} is ${currenttem}`;
}

function contactform() {
    const nameref = document.getElementById("name");
    const name = nameref.value;
    console.log(name);
    const addressref = document.getElementById("Address");
    const Address = addressref.value;
    console.log(Address);
    const numberref = document.getElementById("number");
    const number = Number(numberref.value);
    console.log(number);
    const emailref = document.getElementById("emails");
    const emails = emailref.value;
    console.log(emails);
    const passwordref = document.getElementById("passwords");
    const passwords = passwordref.value;
    console.log(passwords);
    const contactmessageref = document.getElementById("contactmessage");
    contactmessageref.innerHTML = "Contact Form submitted successfully";
}


