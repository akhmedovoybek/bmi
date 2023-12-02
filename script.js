var btn = document.querySelector("#btn");

function calculate() {
    var weight = document.querySelector("#weight").value;
    var height = document.querySelector("#height").value;
    
    var num = weight / ((height*height)/10000);
    num = num.toFixed(1);
    console.log(num);
    document.querySelector(".result").style.display = "block";
    document.querySelector(".result-number").innerHTML = num;
    if (num<=18.5){
        document.querySelector(".result-text").innerHTML = "UNDERWEIGHT";
        document.querySelector(".result-text").style.color = "#F10606";
    }
    else if (num>18.5 && num<=24.9){
        document.querySelector(".result-text").innerHTML = "NORMAL";
        document.querySelector(".result-text").style.color = "#09FF7A";
    }

    else if (num>=25 && num<=29.9){
        document.querySelector(".result-text").innerHTML = "OVERWEIGHT";
        document.querySelector(".result-text").style.color = "#ffef09";
    }
    else if (num>=30){
        document.querySelector(".result-text").innerHTML = "OBESITY";
        document.querySelector(".result-text").style.color = "#F10606";
    }
}
