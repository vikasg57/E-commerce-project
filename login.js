 var data = [
            {
                price: 690,
                product: "Striped Round Neck T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
            },
            {
                price: 799,

                product: "Striped Round Neck T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
            },
            {
                price: 899,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
            },
            {
                price: 999,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg",
            },
            {
                price: 1099,

                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
            },
            {
                price: 1299,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
            },
            {
                price: 1399,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
            },
            {
                price: 499,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/10424682/2019/10/30/a034179e-9db3-4a3a-bce0-abae4d1413531572419249956-Roadster-Men-Tshirts-2571572419248675-1.jpg",
            },
            {
                price: 299,

                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
            },
            {
                price: 199,
                product: "Men Printed Cotton T-shirt",
                img:
                    "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/12816440/2021/2/9/d81a95aa-a268-4c7b-9deb-b960ad1586c41612855488092-HERENOW-Men-Tshirts-5601612855486681-1.jpg",
            },
        ];
    document.querySelector("#button").addEventListener('click', login)
    var arr1 = JSON.parse(localStorage.getItem("arr1"))
    console.log(arr1)
   
    var arr2=[]
    function login(){
        var name = document.querySelector("#name").value
        var email = document.querySelector("#email").value
        var password = document.querySelector("#pass").value

        var logindata = {
            name: name,
            email: email,
            password: password
        };

        arr2.push(logindata)
        localStorage.setItem("arr2", JSON.stringify(arr2))
        console.log(arr2);

        if(name=="admin" && email == "admin" && password == "admin" ){
            localStorage.setItem("data",JSON.stringify(data))
            window.location.href= "admin.html"
        }
        else {
                for (var i = 0; i < arr1.length; i++) {
                    if (arr1[i].name==name && arr1[i].email==email && arr1[i].password==password){
                        alert("login successful")
                         localStorage.setItem("data", JSON.stringify(data))
                        window.location.href="product.html"
                        break
                    }
                    else{ 
                        alert("login failed")
                        break
                    }
            }
            }
        

    }
