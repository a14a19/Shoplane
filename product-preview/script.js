console.log(JSON.parse(sessionStorage.getItem('i1')));

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
