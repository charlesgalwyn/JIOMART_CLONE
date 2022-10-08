if ((localStorage.getItem("signedIUser") != null) && (JSON.parse(localStorage.getItem("signedIUser")) != {})) {
        
        
    let inUser = document.getElementById("in");
    let Name = (JSON.parse(localStorage.getItem("signedIUser")))["Name"];


    let s = document.getElementById('signU')
    s.innerHTML = "";

    inUser.onclick = ()=>{
        let arr=[];
         let ddl2 = document.getElementById('ddl2')
        if(ddl2.textContent == '')
        {
            ddl2.textContent = 'SIGN OUT'
           ddl2.style.padding = '5px'
           ddl2.style.backgroundColor = 'white'
           ddl2.style.cursor='pointer'
           ddl2.onclick = ()=>{
             localStorage.setItem('signedIUser',null);
             localStorage.setItem("cartitems", JSON.stringify(arr));
             window.location.href = 'Index.html'
           }
        }else{
            ddl2.textContent = ''
            ddl2.style.padding = '0'
           ddl2.style.backgroundColor = 'none'
        }
    }

    inUser.setAttribute("id", "loggedIn");
    inUser.textContent = "Hello! " + Name;
}

function sOut() {
    let outDiv = document.getElementById("in");
    let ldiv = document.getElementById("outDiv");
    let obtn = document.createElement("button");

    // let ele = ldiv.children[0];
    // ldiv.removeChild(ele);
    ldiv.innerHTML = "";

    localStorage.setItem("signedIUser", {})
    window.location.href = "../homepage/Index.html";
}

function goTOsignIn() {
    window.location.href = "../signin/signin.html";
}
function goTocart() {
    window.location.href = "../cart/cart.html";
}