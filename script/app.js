
// Menu Item ---------------------------------------------------
let Product = document.querySelector('.product');
let Company = document.querySelector('.company');
let Connect = document.querySelector('.connect');
let arrow = document.querySelectorAll('.nav-menu li img');

Product.addEventListener('click', function(){
    let contentProduct = document.querySelector('.content-product');
    if (contentProduct.style.display === 'none'){
        contentProduct.style.display = 'flex';
        arrow[0].style.transform = 'rotate(-539deg)';
    }
    else{
        contentProduct.style.display = 'none';
        arrow[0].style.transform = 'rotate(-360deg)';
    }
});
Company.addEventListener('click',  function(){
   let contentCompany =document.querySelector('.content-company');
   if(contentCompany.style.display === 'none'){
       contentCompany.style.display = 'flex';
       arrow[1].style.transform = 'rotate(-539deg)';
   }
   else{
       contentCompany.style.display = 'none';
       arrow[1].style.transform = 'rotate(-360deg)';
   }
});
Connect.addEventListener('click', function(){
    let contentConnect = document.querySelector('.content-connect');
    if(contentConnect.style.display === 'none'){
        contentConnect.style.display = 'flex';
        arrow[2].style.transform = 'rotate(-539deg)';
    }
    else{
        contentConnect.style.display = 'none';
        arrow[2].style.transform = 'rotate(-360deg)';
    }
});
// -----------------------------------------------------------------------

// Menu Button ---------------------------------------------------
let burgerBtn = document.querySelector('img.hamburger-menu');
let closeBtn = document.querySelector('img.close');
let navMenu = document.querySelector('ul.nav-menu');

burgerBtn.addEventListener('click', function(){
    navMenu.classList.toggle('openMenu');
    navMenu.classList.remove('closeMenu');

    burgerBtn.classList.add('closeBtn');
    closeBtn.classList.add('openBtn');
    // closeBtn.classList.remove('closeBtn');
})

closeBtn.addEventListener('click', function(){
    navMenu.classList.toggle('closeMenu');
    navMenu.classList.remove('openMenu');

    burgerBtn.classList.remove('closeBtn');
    closeBtn.classList.remove('openBtn');
    // closeBtn.classList.add('closeBtn');

    let s = screen.width;
    if(s >= 890){
        closeBtn.classList.remove('openBtn');
    }
})
// ------------------------------------------------------------------