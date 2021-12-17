 document.querySelector('button').addEventListener('click',function(){
        window.location.href="product.html"
    })
    document.querySelector("form").addEventListener("submit",addproduct)

     var arr3 = JSON.parse(localStorage.getItem("arr3")) || [];
     displaytable(arr3)
    
    function addproduct(event){
        event.preventDefault()
        var product=document.querySelector("#product").value
        var price = document.querySelector('#price').value
        var img = document.querySelector('#img').value
        var cat= document.querySelector("#cat").value
    


        var productdata={
        product:product,
        cat:cat,
        price:price,
        img:img
         };
         
 
       arr3.push(productdata)
       console.log(arr3)
       localStorage.setItem("arr3",JSON.stringify(arr3))

       displaytable(arr3)
    }

    function displaytable(arr3){

        document.querySelector('.tbody').innerHTML = ""
            arr3.map(function (el, index) {

                var row = document.createElement('tr')
                var td1 = document.createElement('td')
                td1.textContent = el.product
                var td2 = document.createElement('td')
                td2.textContent = el.price
                // var td3= document.createElement('td')
                // td3.textContent=el.img
                var td4 = document.createElement('td')
                td4.textContent = "Delete"
                row.append(td1, td2, td4,)
                document.querySelector('.tbody').append(row)

                td4.addEventListener('click', function () {
                    deleteitem(index)
                })
            }) 
    }
     function deleteitem(index) {
            arr3.splice(index, 1);
            localStorage.setItem("arr3", JSON.stringify(arr3));
            displaytable(arr3)


    }