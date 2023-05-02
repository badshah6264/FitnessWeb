    function myfunc(){
        let a = document.getElementById("password");
        var b = document.getElementById("show");
        var c = document.getElementById("hide");

        if (a.type == "password")
            {
                a.type="text";
                b.style.display="block";
                c.style.display="none";
            } else 
                {
                    a.type="password";
                    b.style.display="none";
                    c.style.display="block";
                }
    }



   
