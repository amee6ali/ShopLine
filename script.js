function fetchApiCall(url){
   return fetch(url).then(res=>{
    return res.json()
  })
}

let cartValue 


if(!(localStorage.getItem('cart-count'))) {
  console.log("initialization")
	localStorage.setItem('cart-count',0);
} else {
  cartValue = localStorage.getItem('cart-count');
	localStorage.setItem('cart-count', cartValue);
  console.log("already Have")
  document.querySelector(".cartNum").innerHTML =  cartValue
  console.log("initail updation")
}




fetchApiCall("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then(data=>{

data.forEach(displayArray)
function displayArray(data){
  craeteProduct(data)

}})


const  viewContainer = document.querySelector(".view-container")
viewContainer.innerHTML= ` <div class="productcontainer">
    <div id="cloaths">   </div>
    <div id="accessories"> </div>
</div>`




// Cloath Structure Creation
cloathTitle = document.createElement("div")
cloathTitle.innerHTML=`<h2 class="title">Clothing for Men and Women</h2>`
document.querySelector("#cloaths").appendChild(cloathTitle)
cloathTitle.classList.add("title-parent")


cloathProducts = document.createElement("div")
document.querySelector("#cloaths").appendChild(cloathProducts)
cloathProducts.classList.add("products")


// Accessories Structrue.

accssTitle = document.createElement("div")
accssTitle.innerHTML=`<h2 class="title">Accessories for Men and Women</h2>`
document.querySelector("#accessories").appendChild(accssTitle)
accssTitle.classList.add("title-parent")

accssProducts = document.createElement("div")
document.querySelector("#accessories").appendChild(accssProducts)
accssProducts.classList.add("products")


//product creation & Add in to DOM  function 

function craeteProduct (data){
  
    const productCard = document.createElement("a")
    productCard.href=`product.html?productId=${btoa(data.id)}`
    productCard.classList.add("product-card")
    productCard.id = data.id
    productCard.innerHTML=`<img class="product-image" src="${data.preview}" alt="${data.name}">`
    
    

    //Product Data - Name
    const productCardDetails = document.createElement("div")
    productCardDetails.classList.add("details")
    productCardDetails.innerHTML = `<h3> ${data.name} </h3>`
    productCard.appendChild(productCardDetails)


    //Product Data - Brand
    const productCardBrand = document.createElement("h4")
    productCardBrand.innerHTML=`${data.brand}`
    productCardDetails.appendChild(productCardBrand)


    //Product Data - Price
    const productCardPrice = document.createElement("h5")
    productCardPrice.innerHTML=`Rs. ${data.price}`
    productCardDetails.appendChild(productCardPrice)
       
    
    //add created product to each section accordingly
    data.isAccessory == true ? document.querySelector("#accessories .products").appendChild(productCard) : document.querySelector("#cloaths .products").appendChild(productCard)

}


$(document).ready(function() {
   
  console.log("hii")

  $(".slidercontainer").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });


  console.log("hii")
});


