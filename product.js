
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

 cartClick()
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
// document.querySelector(".cartNum").innerHTML =  cartValue


function cartClick(){
document.querySelector(".add-cart-btn").addEventListener("click",()=>{
  console.log("clicked")
  cartValue = localStorage.getItem('cart-count')
  cartValue = Number(cartValue) + 1
  localStorage.setItem('cart-count',cartValue)
  document.querySelector(".cartNum").innerHTML =  cartValue
  console.log(cartValue)

})
}



// var myCartData = [];
// var cartIntialValue;

// if(localStorage.getItem('cart-count') == null) {
// 	localStorage.setItem('cart-count', '0');
// } else {
// 	var cartValue = localStorage.getItem('cart-count');
// 	localStorage.setItem('cart-count', cartValue);
// }


