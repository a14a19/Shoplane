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
      console.log(accessories[i].name)

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
