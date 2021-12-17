  var arr3 = JSON.parse(localStorage.getItem("arr3")) || JSON.parse(localStorage.getItem("data")) || [] 
        var arr4 = JSON.parse(localStorage.getItem("arr4")) || []
    // console.log(arr3)

displayitem(arr3)


function displayitem(arr3){
    document.querySelector(".container").innerHTML = ""
    arr3.map(function(el){
         var div=document.createElement('div');
         div.setAttribute('class',"sub")
         var div2 = document.createElement('div');
         var name=document.createElement('h5');
         var price=document.createElement('p');
         var img= document.createElement('img');
         var but=document.createElement('button')
         but.textContent = "Add to cart"

         img.setAttribute('src',el.img);
         img.setAttribute('class',"img");
         name.textContent=el.product;
         price.textContent=el.price;
         div2.append(name,price,but);
         div.append(img,div2);
         document.querySelector(".container").append(div);
         but.addEventListener('click',function(){
            console.log(el)
            addtocart(el)
            window.location.href="cart.html"
            
         })

    })
}



    // document.querySelector("#num").addEventListener('onchange',numsort)

    function numsort(){
         
       
        var selected = document.querySelector("#num").value
        if(selected=="low"){
            arr3.sort(function(a,b){
                return Number(a.price)-Number(b.price)
            })
        }
         if  (selected == "high") {
                arr3.sort(function (a, b) {
                    return Number(b.price) - Number(a.price)
                })
            console.log(arr3)
           
        }
         displayitem(arr3)


    }

    function alphasort(){
        var select=document.querySelector("#alpha").value

        console.log(select)
        if(select=="asc"){
            arr3.sort(function(a,b){
                    var u = a.product.toUpperCase();
                    var w = b.product.toUpperCase();
                    return u == w ? 0 : u > w ? 1 : -1;
            })
        }
        if (select == "dsc") {
            arr3.sort(function (a, b) {
                var u = a.product.toUpperCase();
                var w = b.product.toUpperCase();
                return u == w ? 0 : u < w ? 1 : -1;
            })
        }
        console.log(arr3)
        displayitem(arr3)
    }



    var but2 = document.createElement('button')
        but2.textContent = "Your Cart"
    but2.addEventListener('click', function () {
     window.location.href = "cart.html"
    })

    document.querySelector(".cart").append(but2)

    function addtocart(el){

        arr4.push(el)
        localStorage.setItem("arr4",JSON.stringify(arr4))
        console.log(arr4)


    }

           function filterout() {


                var selected = document.querySelector("#filter").value
                console.log(selected)


                var fill = arr3.filter(function (el) {
                     return selected ==el.cat;
                  
                })
                console.log(fill)
                displayitem(fill)
            }

