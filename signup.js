
    document.querySelector("#button").addEventListener('click',signup)
    var arr1 = JSON.parse(localStorage.getItem("arr1")) || []

    function signup(){
        var name = document.querySelector("#name").value
        var email = document.querySelector("#email").value
        var password = document.querySelector("#pass").value

        var signupdata ={
            name: name,
            email: email,
            password:password
        };
        arr1.push(signupdata)
        localStorage.setItem("arr1",JSON.stringify(arr1))
        console.log(arr1);

        if(name != "" && email!=""&& password !="" ){
            window.location.href = "login.html"
        }


        


        
    }