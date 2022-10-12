const main = document.getElementById("main");
const p1 = document.getElementById("p-1");
const order = document.getElementById("order");
const logoid = document.getElementById("logoid");
const addBtn = document.getElementById("add-btn");
const cartIcon = document.getElementById("shopping");
let counter = document.getElementById("counter");
let n = +sessionStorage.getItem('n')
counter.innerText = `${n}`;

$(document).ready(function(){
  $('#banner').slick({
    infinite: true,
    dots: true,
    speed: 300,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.slick-prev')
      .html('<i class="fa-solid fa-angle-left"></i>')
      .addClass('my-prev')  
  $('.slick-next')
      .html('<i class="fa-solid fa-angle-right"></i>')
      .addClass('my-next')
  $('.slick-dots').addClass('my-dots')
  $('.slick-dots button').html('')

  $.ajax({
    url: 'https://5d76bf96515d1a0014085cf9.mockapi.io/product',
    type: 'GET',
    data: {
      format: 'json',
    },
    success: function(data, status){
      // console.log(data);
      const clothing = data.filter((i)=>!i.isAccessory);
      const accessories = data.filter((i)=>i.isAccessory);
      // console.log(clothing, accessories);

      const mainCardC = document.getElementById("clothe-section");
      mainCardC.style.cssText = "margin: 5% 5% 0 5%;"
      const mainCardA = document.getElementById("access-section");
      mainCardA.style.cssText = "margin: 5%;"

      const cardClothe = document.getElementById("card-clothe");
      const cardAccess = document.getElementById("card-access");


      for(i in clothing){

        const mainCard = document.createElement("a");
        mainCard.setAttribute("class","clothe-card")

        const Img = document.createElement("img");
        Img.src = clothing[i].preview;
        Img.setAttribute("alt", "Images");
        Img.style.cssText = "width: 100%;"

        const title = document.createElement("div")
        title.innerText = clothing[i].name;
        title.style.cssText = "margin: 10px 10px 0 10px; font-weight: 500;"

        const brand = document.createElement("div")
        brand.innerText = clothing[i].brand;
        brand.style.cssText = "margin: 6px 10px;"

        const price = document.createElement("div")
        price.innerText = `Rs. ${clothing[i].price}`;
        price.style.cssText = "color: green; margin: 6px 10px; font-weight: 600;"

        cardClothe.append(mainCard);
        mainCard.appendChild(Img);
        mainCard.appendChild(title);
        mainCard.appendChild(brand);
        mainCard.appendChild(price);

        if(i == 0){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 1)
            console.log(sessionStorage.getItem('i1'));
          })
        }
        if(i == 1){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 2)
          })
        }
        if(i == 2){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 3)
          })
        }
        if(i == 3){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 4)
          })
        }
        if(i == 4){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 5)
          })
        }
        
      }

      for(i in accessories){
      // console.log(accessories[i].name)

        const mainCard = document.createElement("a");
        mainCard.setAttribute("class","access-card")

        const Img = document.createElement("img");
        Img.src = accessories[i].preview;
        Img.setAttribute("alt", "Images");
        Img.style.cssText = "width: 100%;"

        const title = document.createElement("div")
        title.innerText = accessories[i].name;
        title.style.cssText = "margin: 10px 10px 0 10px; font-weight: 500;"

        const brand = document.createElement("div")
        brand.innerText = accessories[i].brand;
        brand.style.cssText = "margin: 6px 10px;"

        const price = document.createElement("div")
        price.innerText = `Rs. ${accessories[i].price}`;
        price.style.cssText = "color: green; margin: 6px 10px; font-weight: 600;"

        cardAccess.append(mainCard);
        mainCard.appendChild(Img);
        mainCard.appendChild(title);
        mainCard.appendChild(brand);
        mainCard.appendChild(price);

        if(i == 0){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 6)
            console.log(sessionStorage.getItem('i1'));
          })
        }
        if(i == 1){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 7)
            console.log(sessionStorage.getItem('i1'));
          })
        }
        if(i == 2){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 8)
            console.log(sessionStorage.getItem('i1'));
          })
        }
        if(i == 3){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 9)
            console.log(sessionStorage.getItem('i1'));
          })
        }
        if(i == 4){
          mainCard.addEventListener('click', (e)=>{
            mainCard.href = "product-preview/product.html";
            sessionStorage.setItem('i1', 10)
            console.log(sessionStorage.getItem('i1'));
          })
        }
      }
    }
  })
})


// for google search ---------------------------------
const searchIcon = document.getElementById("search-icon");
const gSearch = document.getElementById("g-Search-container1");
const searchContainer = document.getElementById("search-container")
const bigSearchBar = document.getElementById("big-search-bar")

var x = window.matchMedia("(max-width: 550px)")

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
const profileContainer = document.getElementById("profile-container");
const profileIMg = document.createElement("img")
const profile = document.getElementById("profile");
const profileDropdrown = document.getElementById("profile-dropdown");

profileContainer.addEventListener('click', ()=>{
  profileDropdrown.classList.toggle("profile-dropdown")
})


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

