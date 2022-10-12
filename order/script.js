const order = document.getElementById("order");
const orderPlace = document.getElementById("order-placed");
const cartItems = document.getElementById("cart-items");
const cartPrice = document.getElementById("cart-price");
const totalAmount = document.createElement("div")
const orderBtn = document.createElement("button")
const totalItem = document.getElementById("total-items")
const shopping = document.getElementById("shopping");
let n = +sessionStorage.getItem('n')
counter.innerText = `${n}`;

let n1 = +sessionStorage.getItem('n1')
let n2 = +sessionStorage.getItem('n2')
let n3 = +sessionStorage.getItem('n3')
let n4 = +sessionStorage.getItem('n4')
let n5 = +sessionStorage.getItem('n5')
let n6 = +sessionStorage.getItem('n6')
let n7 = +sessionStorage.getItem('n7')
let n8 = +sessionStorage.getItem('n8')
let n9 = +sessionStorage.getItem('n9')
let n10 = +sessionStorage.getItem('n10')

let totalCartItem = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;

// for google search ---------------------------------
const searchIcon = document.getElementById("search-icon");
const gSearch = document.getElementById("g-Search-container1");
const searchContainer = document.getElementById("search-container")
const bigSearchBar = document.getElementById("big-search-bar")
var x = window.matchMedia("(max-width: 550px)")

// for profile ----------------------------------------------
const profileContainer = document.getElementById("profile-container");
const profileIMg = document.createElement("img")
const profile = document.getElementById("profile");
const profileDropdrown = document.getElementById("profile-dropdown");

// for login ----------------------------------------------
const login = document.getElementById("login")
const logout = document.getElementById("logout")
const loginForm = document.getElementById("login-form")
const logoutForm =document.getElementById("logout-form")
const loginSubmit = document.getElementById("login-submit")
const username = document.getElementById("username");
const password = document.getElementById("password");
const validated = document.getElementById("validated");
const nonValidated = document.getElementById("non-validated");
const logoutNo = document.getElementById("logout-no");
const logoutYes = document.getElementById("logout-yes")
const gicon = document.getElementById("google-login")
const fbicon = document.getElementById("fb-login")
const gTxt = document.getElementById("google-txt")
const fbTxt = document.getElementById("fb-txt")
const googleLoginContainer = document.getElementById("google-login-container")
const fbLoginContainer = document.getElementById("fb-login-container")
const orderLoginPage = document.getElementById("order-login-page");
const orderLoginReq = document.getElementById("order-login-req");
const cartItemZero = document.getElementById("cart-item-zero");


$(document).ready(function(){
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product/')
    .done(function(data, status){
        // console.log(data[0].preview);

        function orderFn(i, n){
                const preContainer = document.createElement("div");
                const txtContainer = document.createElement("div");
                const preImg = document.createElement("img");
                const nameOfOrdre = document.createElement("div");
                const numOfItem = document.createElement("div");
                const priceOfOrder = document.createElement("div");
                preContainer.classList = "order-sub-container";
                preImg.src = `${data[i].preview}`;
                preImg.style.cssText = "width: 80px;"
                nameOfOrdre.classList = "txt-container-name";
                nameOfOrdre.innerText = `${data[i].name}`;
                numOfItem.innerText = `x ${n}`;
                priceOfOrder.innerText = `Amount Rs: ${data[i].price}`;
    
                cartItems.appendChild(preContainer)
                preContainer.appendChild(preImg)
                preContainer.appendChild(txtContainer)
                txtContainer.appendChild(nameOfOrdre)
                txtContainer.appendChild(numOfItem)
                txtContainer.appendChild(priceOfOrder)
        }

        if(n1 > 0) {
            orderFn(0, n1)
        }
        if(n2 > 0) {
            orderFn(1, n2)
        }
        if(n3 > 0) {
            orderFn(2, n3)
        }
        if(n4 > 0) {
            orderFn(3, n4)
        }
        if(n5 > 0) {
            orderFn(4, n5)
        }
        if(n6 > 0) {
            orderFn(5, n6)
        }
        if(n7 > 0) {
            orderFn(6, n7)
        }
        if(n8 > 0) {
            orderFn(7, n8)
        }
        if(n9 > 0) {
            orderFn(8, n9)
        }
        if(n10 > 0) {
            orderFn(9, n10)
        }

        totalItem.innerText = `Total Items: ${n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10}`;
        totalAmount.innerText = `Amount Rs: ${data[0].price * n1 + data[1].price * n2 + data[2].price * n3 + data[3].price * n4 + data[4].price * n5 + data[5].price * n6 + data[6].price * n7 + data[7].price * n8 + data[8].price * n9 + data[9].price * n10}`;
        totalAmount.style.cssText = "font-weight: 500;";
        orderBtn.innerText = `Place Order`;
        orderBtn.classList = "order-btn";

        cartPrice.appendChild(totalAmount)
        cartPrice.appendChild(orderBtn)

        orderBtn.addEventListener('click', ()=>{
            if(sessionStorage.getItem('loggedin') === "true"){
                if(totalCartItem > 0){
                    order.style.cssText = "display: none;";
                    orderPlace.style.cssText = "display: flex;";
                    let n = sessionStorage.setItem('n', 0)
                    counter.innerText = `0`;
                
                    let n2 = +sessionStorage.setItem('n2', 0)
                    let n1 = +sessionStorage.setItem('n1', 0)
                    let n3 = +sessionStorage.setItem('n3', 0)
                    let n4 = +sessionStorage.setItem('n4', 0)
                    let n5 = +sessionStorage.setItem('n5', 0)
                    let n6 = +sessionStorage.setItem('n6', 0)
                    let n7 = +sessionStorage.setItem('n7', 0)
                    let n8 = +sessionStorage.setItem('n8', 0)
                    let n9 = +sessionStorage.setItem('n9', 0)
                    let n10 = +sessionStorage.setItem('n10', 0)

                    orderLoginPage.classList.add('display-none');
                    cartItemZero.classList.add('display-none');
                }
                else {
                    cartItemZero.classList.toggle('display-none')
                }
            }
            else if(sessionStorage.getItem('loggedin') === "false"){
                orderLoginPage.classList.toggle('display-none')
            }
                
        })

        shopping.addEventListener('click', ()=>{
            order.style.cssText = "display: flex;";
            orderPlace.style.cssText = "display: none;";
        })

    })
})
 
// for google search ---------------------------------

function mediaFunction(){
  if(x.matches){
    searchIcon.addEventListener('click', ()=>{
      bigSearchBar.classList.toggle("big-search-bar")
    })
  } else {
    searchIcon.addEventListener('click', ()=>{
      gSearch.classList.toggle("g-search")
      searchIcon.style.cssText = "display: none;"
    })
  }
}

mediaFunction(x);
x.addListener(mediaFunction);

// for profile ----------------------------------------------

profileContainer.addEventListener('click', ()=>{
  profileDropdrown.classList.toggle("profile-dropdown")
})

// for login ----------------------------------------------

loginSubmit.disabled = true;
loginSubmit.style.cssText = "cursor: not-allowed;"

login.addEventListener('click', (e)=>{
  e.preventDefault()
  loginForm.classList.toggle("display-none")
  profileDropdrown.classList.toggle("profile-dropdown")
  // e.stopImmediatePropagation();
})

password.onkeyup = function(){
  let number = /[0-9]/g; lowerCaseLetters = /[a-z]/g; upperCaseLetters = /[A-Z]/g;
  if(password.value.match(number) && password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) && password.value.length >= 8){
    validated.classList.add("display-inline-flex");
    validated.classList.remove("display-none");
    nonValidated.classList.add("display-none");
    nonValidated.classList.remove("display-inline-flex")
    validated.classList.add("valid");
    loginSubmit.disabled = false;
    loginSubmit.style.cssText = "cursor: pointer;"
  } else {
    validated.classList.add("display-none");
    validated.classList.remove("display-inline-flex");
    nonValidated.classList.add("display-inline-flex");
    nonValidated.classList.remove("display-none");
    nonValidated.classList.add("not-valid");
    loginSubmit.disabled = true;
  }
}

loginSubmit.addEventListener('click', (e)=>{
  // e.preventDefault()
  sessionStorage.setItem('loggedin', true);
  loginForm.classList.toggle('display-none');
  login.classList.toggle('display-none')
  logout.classList.toggle('display-none')
})

console.log(username.value);

$(document).ready(function(){
  $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/order')
  .done(function(data, status){
    let myNames = []
    for(x in data){
      const {name, avatar} = data[x]
      myNames.push(name)
    //   console.log(typeof name);
      if(username.value == data[x].id){
        // console.log(data[x].id);
      }
      if(sessionStorage.getItem('loggedin') === "true"){
        profile.classList.add("display-none");
        profileIMg.src = `${avatar}`
        profileIMg.style.cssText = "width: 28px; border-radius: 50%"
        
        profileContainer.appendChild(profileIMg)
        // console.log(data[100]);
      } else if(sessionStorage.getItem('loggedin') === "false"){
        // console.log(false);
        profile.classList.remove("display-none");
        profileIMg.classList.add('display-none')
      }
    }
    // console.log(myNames);
  })
})

// password.focus = function(){
//   validated.classList.toggle("display: none;")
//   nonValidated.style.cssText = "display: none;"
// }

// password.onblur = function(){
//   validated.style.cssText = "display: none;"
//   nonValidated.style.cssText = "display: none;"
// }

logout.addEventListener('click', (e)=>{
  e.preventDefault()
  logoutForm.classList.toggle("display-none");
  logoutForm.classList.add("display-inline-flex")
  profileDropdrown.classList.toggle("profile-dropdown")
})

logoutNo.addEventListener('click', (e)=>{
  e.preventDefault()
  logoutForm.classList.toggle("display-none");
  logoutForm.classList.remove("display-inline-flex")
})

logoutYes.addEventListener('click', (e)=>{
  // e.preventDefault()
  sessionStorage.setItem('loggedin', false)
  logoutForm.classList.toggle("display-none");
  login.classList.toggle('display-none')
  logout.classList.toggle('display-none')
})

if(sessionStorage.getItem('loggedin') === "true"){
  login.classList.add("display-none");
  logout.classList.remove("display-none");
  loginForm.classList.add("display-none");
  logout.classList.remove("display-inline-flex")
  console.log('loggedin');
} else if (sessionStorage.getItem('loggedin') === "false"){
  login.classList.remove("display-none");
  logout.classList.add("display-none");
  console.log('loggedout');
}

orderLoginReq.addEventListener('click', ()=>{
    profileDropdrown.classList.toggle("profile-dropdown")
})