    
    var arr4 = JSON.parse(localStorage.getItem("arr4"))  || []
    var sum =0;

        arr4.map(function (el,index) {
                var div = document.createElement('div');
                div.setAttribute('class', "sub")
                var div2 = document.createElement('div');
                var name = document.createElement('h5');
                var price = document.createElement('p');
                var img = document.createElement('img');
               
                var but2 = document.createElement('button')
                
                but2.textContent= "Remove "
                img.setAttribute('src', el.img);
                img.setAttribute('class', "img");
                name.textContent = el.product;
                price.textContent = el.price;
                div2.append(name, price,but2);
                div.append(img, div2);
                document.querySelector(".container").append(div);
               
               
                but2.addEventListener('click',function(){
                    
                    deleteitem(index)
                })

                price = Number(el.price)
                sum += price
                
                 var total = document.querySelector('.total')
            total.innerHTML = "Sub total of cart :"+ sum
         document.querySelector(".items").innerHTML="Items in cart:"+ arr4.length
            })
            var but = document.createElement('button')
            but.textContent = "continue shopping"
            but.addEventListener('click', function () {
                    window.location.href = "product.html"

            })



            document.querySelector(".back").append(but)
             function deleteitem(index) {
                    arr4.splice(index, 1);
                    localStorage.setItem("arr4", JSON.stringify(arr4));
                   
            } 
            
            

            var discount=document.querySelector("#dbutton").addEventListener("click",checkpromo)


            function checkpromo(){
               
                var promo = document.querySelector("#discount").value
                 if (promo === "MASAI30") {
                     
                   var final = sum - (sum*30/100)
                   var para = document.createElement('h2')
                   para.innerHTML = "Final Amount:"+Math.floor(final);
                   document.querySelector("#final").append(para)
                   
                     
                   

                }
                else{
                    var final= sum
                    var para = document.createElement('h2')
                     para.innerHTML = "Final Amount:" + final;
                     document.querySelector("#final").append(para)
                      
                }

            }
