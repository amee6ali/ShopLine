let cartProductData = JSON.parse(window.localStorage.getItem("product-list"))
let totalProductCount = 0
cartProductData.forEach(CartItemCreation);

function CartItemCreation(element){
    totalProductCount += element.count


    let cartProduct = document.createElement("div")
    cartProduct.classList.add("product")
    cartProduct.id=element.id
    cartProduct.innerHTML = `<div class="product-thumb">
                               <img src="${element.image}" alt="">
                            </div>
                            <div class="product-cart-data">
                                <h3>${element.title}</h3>
                                <div class="counts">
                                        <p class="itemNochange itemPlus">+ </p> <h6>x ${element.count}</h6>    <p class="itemNochange itemLess"> -</p>
                                </div>
                               
                                <h5>Amount :${element.count*element.price} </h5>
                            </div>
                            <div class="remove-item">
                            <p id="" class="remove-icon itemDel"> X </p>
                            </div>`

    document.querySelector(".cart-products-and-price .products").appendChild(cartProduct)


}


document.querySelector("#checkout-container h4").innerHTML = `Total items : ${totalProductCount}` 

$(function(){

let rmidx
let ToMinizeCount

    // Deletion
        let removeelementaddevnt = document.querySelectorAll(".remove-icon")        
        removeelementaddevnt.forEach((e=>{
            e.addEventListener("click",(e)=>{
                let ToremoveID = e.target.parentElement.parentElement.id
                cartProductData.forEach((item,idx,arr)=>{
                    if(item.id===ToremoveID){
                        console.log(ToremoveID)
                        ToMinizeCount=item.count
                        rmidx = idx
                        console.log(ToMinizeCount)
                       
                    }
                })
    
                cartProductData.splice(rmidx,1)
                window.localStorage.setItem("product-list",JSON.stringify(cartProductData));
                cartNumberDecreaseInsta(ToMinizeCount)
                window.location.reload()
              })



              

              //To Do : Total payment updation
        }))
  
          function cartNumberDecreaseInsta(ToMinizeCount){
            console.log(ToMinizeCount)
            let cartValue = localStorage.getItem('cart-count')
            cartValue = Number(cartValue) - Number(ToMinizeCount)
            localStorage.setItem('cart-count',cartValue)
            document.querySelector(".cartNum").innerHTML =  cartValue
          }  




        //   addition


        let additionaddevnt = document.querySelectorAll(".itemPlus")        
        additionaddevnt.forEach((e=>{
            e.addEventListener("click",(e)=>{
                let parentIDforAddition = e.target.parentElement.parentElement.parentElement.id
                console.log(parentIDforAddition)

                
                cartProductData.forEach((item,idx,arr)=>{
                    if(item.id===parentIDforAddition){                    
                        item.count= item.count+1
                        cartNumberincrease()
                    }
                })
    

                window.localStorage.setItem("product-list",JSON.stringify(cartProductData));
                window.location.reload()
               
              })

              //To Do : Total payment updation
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
  
                //To Do : Total payment updation
          }))
    
            function cartNumberDecrease(){
              let cartValue = localStorage.getItem('cart-count')
              cartValue = Number(cartValue) - 1
              localStorage.setItem('cart-count',cartValue)
              document.querySelector(".cartNum").innerHTML =  cartValue
            }  










  })








  