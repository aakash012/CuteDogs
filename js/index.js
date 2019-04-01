var btn = document.querySelector("button");
var display1 = document.querySelector("#display1");
var display2 = document.querySelector("#display2");
var display3 = document.querySelector("#display3");
var display4 = document.querySelector("#display4");
btn.addEventListener("click", function () {
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function () {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var n = JSON.parse(XHR.responseText);
            console.log(n.message);
            display1.src = n.message; 
        }
    };
    var url = "https://dog.ceo/api/breeds/image/random"
    XHR.open("GET", url);
    XHR.send();

    var XHR1 = new XMLHttpRequest();
    XHR1.onreadystatechange = function () {
        if (XHR1.readyState == 4 && XHR1.status == 200) {
            var n = JSON.parse(XHR1.responseText);
            console.log(n.message);
            display2.src = n.message;
        }
    };
    var url = "https://dog.ceo/api/breeds/image/random"
    XHR1.open("GET", url);
    XHR1.send();
    
    var XHR2 = new XMLHttpRequest();
    XHR2.onreadystatechange = function () {
        if (XHR2.readyState == 4 && XHR2.status == 200) {
            var n = JSON.parse(XHR2.responseText);
            console.log(n.message);
            display3.src = n.message;
        }
    };
    var url = "https://dog.ceo/api/breeds/image/random"
    XHR2.open("GET", url);
    XHR2.send();
    
    var XHR3 = new XMLHttpRequest();
    XHR3.onreadystatechange = function () {
        if (XHR3.readyState == 4 && XHR3.status == 200) {
            var n = JSON.parse(XHR3.responseText);
            console.log(n.message);
            display4.src = n.message;
        }
    };
    var url = "https://dog.ceo/api/breeds/image/random"
    XHR3.open("GET", url);
    XHR3.send();
})
