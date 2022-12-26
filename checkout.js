let cartProductData 
if(!(window.localStorage.getItem("product-list"))){
  window.localStorage.setItem("product-list",[])
  cartProductData = window.localStorage.getItem("product-list")
}
else{
  cartProductData = JSON.parse(window.localStorage.getItem("product-list"))
}

let totalProductCount = 0
let totalPrice =0


// cartProductData.lenght ? document.querySelector(".cart-products-and-price").innerHTML="Your Cart is Empty" : cartProductData.forEach(CartItemCreation);

 if(cartProductData.length<=0){

  document.querySelector(".cart-products-and-price").innerHTML=`<h2 class="cart-empty"> Your Cart is Empty <i style="color:#009688;padding-left:20px;" class="fa-regular fa-face-frown"></i> </h2>`
   


}
else{
  cartProductData.forEach(CartItemCreation)
  document.querySelector(".price h3").innerHTML=`₹${totalPrice}/-`
}

function CartItemCreation(element,idx){
    totalProductCount += element.count
    let cartProduct = document.createElement("div")
    cartProduct.classList.add("product")
    cartProduct.id=element.id
    totalPrice = totalPrice + (element.price *  element.count)
    cartProduct.innerHTML = `<div class="product-thumb">
                               <img src="${element.image}" alt="">
                            </div>
                            <div class="product-cart-data">
                                <h3>   <a href= product.html?productId=${btoa(element.id)}> ${element.title} </a> </h3>
                                <div class="counts">
                                        <p class="itemNochange itemPlus">+ </p> <h6>x ${element.count}</h6>    <p class="itemNochange itemLess"> -</p>
                                </div>
                               
                                <h5>Amount :${element.count*element.price} </h5>
                            </div>
                            <div class="remove-item">
                            <p id="" oclick= "reload()" class="remove-icon itemDel"> X </p>
                            </div>`

                             document.querySelector(".cart-products-and-price .products").appendChild(cartProduct)

                             
}


document.querySelector("#checkout-container h4").innerHTML = `Total items : ${totalProductCount}` 

$(function(){

// let rmidx
let ToMinizeCount

    // Deletion
    

      let removeelementaddevnt = document.querySelectorAll(".itemDel")        
      removeelementaddevnt.forEach((e=>{
          e.addEventListener("click",(e)=>{

              let ToremoveID = e.target.parentElement.parentElement.id
              cartProductData.forEach((item,idx,arr)=>{
                  if(item.id===ToremoveID){
                      ToMinizeCount=item.count

                      console.log(ToMinizeCount)

                      cartProductData.splice(idx,1)
                      window.localStorage.setItem("product-list",JSON.stringify(cartProductData));
                      cartNumberDecrease(ToMinizeCount)    


                  }
              })
  


             window.location.reload() 
            })

      }))      
          function cartNumberDecrease(ToMinizeCount=1){
            console.log(ToMinizeCount)
            let cartValue = localStorage.getItem('cart-count')
            cartValue = Number(cartValue) - Number(ToMinizeCount)
            localStorage.setItem('cart-count',cartValue)
            document.querySelector(".cartNum").innerHTML =  cartValue
          }  

        let additionaddevnt = document.querySelectorAll(".itemPlus")        
        additionaddevnt.forEach((e=>{
            e.addEventListener("click",(e)=>{
                let parentIDforAddition = e.target.parentElement.parentElement.parentElement.id

                
                cartProductData.forEach((item,idx)=>{
                    if(item.id===parentIDforAddition){                    
                        item.count= item.count+1
                        cartNumberincrease()
                    }
                })
                window.localStorage.setItem("product-list",JSON.stringify(cartProductData));

                window.location.reload()
               
              })


        }))
  
          function cartNumberincrease(){
            let cartValue = localStorage.getItem('cart-count')
            cartValue = Number(cartValue) + 1
            localStorage.setItem('cart-count',cartValue)
            document.querySelector(".cartNum").innerHTML =  cartValue
          }  




          //subtraction


          let subsaddevnt = document.querySelectorAll(".itemLess")        
          subsaddevnt.forEach((e=>{
              e.addEventListener("click",(e)=>{
                  let parentIDforsubs = e.target.parentElement.parentElement.parentElement.id              
                  cartProductData.forEach((item,idx,arr)=>{
                      if(item.id===parentIDforsubs){

                        console.log(parentIDforsubs,item.id,item.count)

                        if(item.count == 1){
                            console.log("parentIDforsubs,item.id,item.count")
                            document.querySelector(".alert").innerHTML="Can't decease count of an item lessthan 1"
                            document.querySelector(".alert").classList.replace("hide","show")
                            setTimeout(() => {
                                document.querySelector(".alert").classList.replace("show","hide")
                                document.querySelector(".alert").innerHTML=""
                            }, 3000);



                        }
                        else{
                            item.count= item.count-1
                            cartNumberDecrease()
                            window.localStorage.setItem("product-list",JSON.stringify(cartProductData));
                            window.location.reload()
                        }
                         
                      }
                  })  
                })
  
          }))
  
  })



  document.querySelector(".orderBtn").addEventListener("click",()=>{
    // localStorage.clear()
  //   cartProductData=[]
    localStorage.setItem('product-list',cartProductData)
   document.querySelector(".cartNum").innerHTML = localStorage.getItem('cart-count')
  })




  