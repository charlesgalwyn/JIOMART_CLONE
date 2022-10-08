document.getElementById("orderMsg").style.display = "none";

function refresh() {
    console.log("he refreshed");
    window.location.href = "Index.html";
}
var arr = JSON.parse(localStorage.getItem("checkoutPrices"));
var finalPrice = +arr[0];
var Mrp = +arr[0];
if (+arr[1] != NaN) {
    Mrp += +arr[1];
}
 
var fp = document.getElementById("fP");
var mrp = document.getElementById("mrp");
var dp = document.getElementById("dp");
fp.style.fontWeight = "bold";
fp.style.color = "blue";
fp.textContent = finalPrice + "/-";
mrp.textContent = Mrp + "/-";
dp.textContent = Mrp - finalPrice+ "/-" ;

function radioBtns() {
    var type = document.getElementsByName("select")
 
    if (type[0].checked || type[1].checked || type[2].checked || type[3].checked || type[4].checked) {
        var container = document.getElementById("addUrl");
        container.innerHTML = "";
        var input = document.createElement("input");
        var btn = document.createElement("button");

        input.placeholder = "add your walvar url here"
        btn.innerText = "proceed"
        btn.onclick = function () {
            proceed();
        }
        container.append(input, btn)
    }
    else if (type[5].checked) {
        var container = document.getElementById("addUrl");
        container.innerHTML = "";
        
        var btn = document.createElement("button");
        btn.innerText = "Proceed"
       
        btn.onclick = function () {
            proceed();
        }
        container.append(btn)
    }
}

function proceed() {

    function afterpy() {
        var paymentmsg = document.createElement("div");
        paymentmsg.innerText = "Processing your payment";
        paymentmsg.style.position = "absolute";
        paymentmsg.style.top = "15px";
        paymentmsg.style.left = "575px";
        paymentmsg.style.backgroundColor = "white";
        paymentmsg.style.padding = "10px";
        paymentmsg.style.borderRadius = "3px";
        document.body.append(paymentmsg);
        var count = 0;
        var process1 = setInterval(function () {
            paymentmsg.innerText = "Successful";
            paymentmsg.style.color = "green";
            if (count == 1) {
                var cleard = document.getElementById("updateAfterpy").innerHTML = null;
                paymentmsg.style.display = "none";
                document.getElementById("orderMsg").style.display = "block";
                document.getElementById("orderNo").innerText = randNum();
                document.getElementById("orderNo").style.color = "green";
                function randNum() {
                    return Math.floor((Math.random() * 249037) + 189654);
                }
            }
            count++;
        },4000);
    }
    afterpy();
}

function gotohome() {
    window.location.href = "../homepage/Index.html";
}