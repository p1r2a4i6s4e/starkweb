var scroll = document.getElementById('drop-down-btn');
var newdrop = document.getElementById('nav-itms');

scroll.addEventListener("click", function (){
    if(newdrop.style.left == '0%'){
        newdrop.style.left = '-100%';
        newdrop.style.transition = '1s';
        newdrop.style.boxShadow = 'none';
    }
    else{
        newdrop.style.left = '0%';
    }
})


///show password 

