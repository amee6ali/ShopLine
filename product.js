
const productId = atob(window.location.search.slice(-4)) 
axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`).then(res=>{
  imageDetaisCration(res.data)

})

function imageDetaisCration(product){

 const mainContainer = document.querySelector("#dynamic-container")
  const imgDiv = document.createElement("div")
  imgDiv.classList.add("img-leftt")
  const mainImg = document.createElement("img")
  mainImg.src = `${product.preview}`
  imgDiv.appendChild(mainImg)
  
  const DetailsDiv = document.createElement("div")
  DetailsDiv.classList.add("data-right")
  const productTextDetails = document.createElement("h1")
  productTextDetails.innerHTML = `<h1>${product.name} </h1>
  <h4>${product.brand} </h4>
  <h4>Price: Rs <span class="primary-clr-bld"> ${product.price} </span> </h4>
  <h4>Description  </h4>
  <h5>${product.description}  </h5>
  <h4>Product Preview </h4>`
  DetailsDiv.append(productTextDetails)
  
    
  const {photos:pImages} = product
  
  const previewImageDiv = document.createElement("div")
  previewImageDiv.classList.add("preview-image")
  DetailsDiv.appendChild(previewImageDiv)
  
  let btn
  
  pImages.forEach((image,i)=>{
      const imageDiv = document.createElement("img")
      imageDiv.src = image
      imageDiv.classList.add("preview-s-image", "previe-image-click")
  
      
      imageDiv.addEventListener("click",(e)=>{
          document.querySelectorAll(".previe-image-click").forEach((i) =>{
              i.classList.remove("active")

          })
          e.target.classList.add("active")
          mainImg.src = e.target.src
      })
  
      i===0 ? imageDiv.classList.add("active") : console.log("..")
      
      previewImageDiv.appendChild(imageDiv)
  })
  
  btn = document.createElement("div")
  btn.innerHTML='Add to Cart'
  btn.classList.add("add-cart-btn")
  DetailsDiv.append(btn)
  
  mainContainer.appendChild(imgDiv)
  mainContainer.appendChild(DetailsDiv)

 cartClick({
   id:product.id,
   name:product.name,
   price:product.price,
   image:product.preview,
   
 }) //Here function call coaded due to 1.button creation is asynch 2.Check Out page argument pass

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

let addedItems={}

function cartClick(details){
document.querySelector(".add-cart-btn").addEventListener("click",()=>{

  cartNumberIncrease(details.id)

  createCartArray(details)

  
})
}

function cartNumberIncrease(){
  cartValue = localStorage.getItem('cart-count')
  cartValue = Number(cartValue) + 1
  localStorage.setItem('cart-count',cartValue)
  document.querySelector(".cartNum").innerHTML =  cartValue
}

let myCartData

function createCartArray(details) {

  console.log(details)


  if (!(window.localStorage.getItem("product-list"))) {
    myCartData = [];
  }

  else {
    myCartData = JSON.parse(window.localStorage.getItem("product-list"));
  }

  if (myCartData.length === 0) {
    var myObj = {
      id: details.id,
      title: details.name,
      count: 1,
      price: details.price,
      image: details.image
    };
    myCartData.push(myObj);
  }

  else if (myCartData.length != 0) {
    var w = 0;
    for (var i = 0; i < myCartData.length; i++) {
      if (myCartData[i].id == details.id) {
        myCartData[i].count = parseInt(myCartData[i].count) + 1;
        w += 1;
      }
    }
    if (w == 0) {
      var myObj = {
        id: details.id,
        title: details.name,
        count: 1,
        price: details.price,
        image: details.image
      };
      myCartData.push(myObj);
    }
  }
  window.localStorage.setItem("product-list",JSON.stringify(myCartData));


}

// -------------------------------------------------------------------------------------------------












