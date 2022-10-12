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

// console.log(JSON.parse(sessionStorage.getItem('i1')));

let i = JSON.parse(sessionStorage.getItem('i1'));

const addBtn = document.getElementById("add-btn");

function getInitialTodoList() {
  const req = new XMLHttpRequest()
    req.open('get', `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${i}`, true)
    req.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status == 200) {
          const productData = JSON.parse(this.responseText)

          const {preview, name, description, brand, price, photos} = productData;
          
          console.log(productData);

          const mainImg = document.getElementById("mainImg");
          const displayImg = document.createElement("img");
          displayImg.classList = "displayImg";
          displayImg.src = preview;

          mainImg.appendChild(displayImg)

          const pName = document.getElementById("name");
          pName.innerText = `${name}`;

          const pBrand = document.getElementById("brand");
          pBrand.innerText = `${brand}`;

          const priceTxt = document.getElementById("priceTxt");
          priceTxt.innerText = `${price}`;

          const descriptionTxt = document.getElementById("description-txt");
          descriptionTxt.innerText = `${description}`;

          const previewImg = document.getElementById("previewImg");

          for(x in photos){
              const Image = document.createElement("img");

              Image.src = `${photos[x]}`;

              previewImg.appendChild(Image)

              Image.addEventListener('pointerdown', ()=>{
                  displayImg.src = Image.src;
                  Image.style.cssText = "border: 2px solid #009688; padding: 4px; border-radius: 6px"
              })

              Image.addEventListener('pointerout', ()=>{
                  Image.style.cssText = "border: none;"
              })
          }
          window.onload = function() {
              document.getElementById("previewImg").children[0].focus();
              document.getElementById("previewImg").children[0].style.cssText = "border: 2px solid #009688; padding: 4px; border-radius: 6px";
          }
        } else {
          console.log('Error:', this.status)
        }
      }
    }
    req.send()
}

getInitialTodoList()

let z = 0;

addBtn.addEventListener('click', (e)=>{
  sessionStorage.setItem('n', ++counter.innerText)
  sessionStorage.setItem(`n${i}`, ++z)
})

z = sessionStorage.getItem(`n${i}`)
let n = +sessionStorage.getItem('n')
counter.innerText = `${n}`;

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
      // console.log(typeof name);
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

