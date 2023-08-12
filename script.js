let btn = document.querySelectorAll(".btn");
let display = document.getElementById("display");
let text = "";

let KeyboardInput = (event) => {
    event.preventDefault();
    let e = Number(event.key);
    let value = event.key;
    let newValue = Number(value);

    if (value == "c" || value == "C") {
        display.innerHTML = "00";
        text = "";
    } else if (value === "x" || value == "X") {
        text = text.slice(0, -1);
        if (text.length != 0) {
            display.innerHTML = text;

        } else {
            display.innerHTML = "00";
        }
    } else if (value === "Enter" || value === "=") {
        // if(text.length == 0){
        //     display.innerHTML = "00";
        // }
        // text = text.toString();
        // text = eval(text);
        // display.innerHTML = text;
        // text = text.toString();
        display.innerHTML = "undefined";
    }
    else if (
        Number(newValue) ||
        value == "+" ||
        value == "-" ||
        value == "*" ||
        value == "/" ||
        value == "." ||
        value == "0"
    ) {
        {
            text += value;
        }
        display.innerHTML = text;
        document.getElementById("error").innerHTML ="";

    }else{
        document.getElementById("error").innerHTML ="type a number";
    }
}

let evaluate = (e) => {
    let value = e.target.value;
    if (value == "C") {
        display.innerHTML = "00";
        text = "";
    } else if (value === "X") {
        text = text.slice(0, -1);
        console.log(text.length);
        if (text.length != 0) {
            display.innerHTML = text;

        } else {
            display.innerHTML = "00";
        }
    } else if (value == "=") {
        text = text.toString();
        text = eval(text);
        console.log(text);
        display.innerHTML = text;
        text = text.toString();
    }
    else {
        text += value;
        display.innerHTML = text;
    }
}

btn.forEach(
    element => {
        element.addEventListener("click", evaluate)
    }
);

window.addEventListener("keypress", KeyboardInput)

