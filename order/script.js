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
        })

        shopping.addEventListener('click', ()=>{
            order.style.cssText = "display: flex;";
            orderPlace.style.cssText = "display: none;";
        })

    })
})
 
