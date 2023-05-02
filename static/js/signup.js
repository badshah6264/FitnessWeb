
    function myfunc1(){
        let a = document.getElementById("password1");
        let b = document.getElementById("show1");
        let c = document.getElementById("hide1");

        if (a.type==="password") {
            a.type="text";
            b.style.display="block";
            c.style.display="none";
        } else {
            a.type="password";
            b.style.display="none";
            c.style.display="block";
        }
    }
    function myfunc2(){
        let a = document.getElementById("password2");
        let b = document.getElementById("show2");
        let c = document.getElementById("hide2");

        if (a.type==="password") {
            a.type="text";
            b.style.display="block";
            c.style.display="none";
        } else {
            a.type="password";
            b.style.display="none";
            c.style.display="block";
        }
    }


 