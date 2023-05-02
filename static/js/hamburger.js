


    function hamburgerfunc() 
    {
    
        // const hb = document.getElementById('hamburger');
        const topleft = document.getElementById('topnav-left');
        const topright = document.getElementById('topnav-right');
        const topnv = document.getElementById('topnav');
        const h = document.getElementById('home');

        let pseudoedit = window.getComputedStyle(h,'::before');
        
        if(topleft.style.display === 'none' && topright.style.display === 'none' ){
            h.style.setProperty('--before-top', '410px');
            topnv.style.height='470px';
            topleft.style.display='block';
            topright.style.display='block';
        }else{
            h.style.setProperty('--before-top', '0px');
            topnv.style.height = '55px';
            topleft.style.display = 'none';
            topright.style.display = 'none';
            
        }
    
        
        
    }
    
