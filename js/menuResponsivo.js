
   

   function abrir(){
    var nav =  document.querySelector('.responsivo')
    nav.classList.add('menu-active')

    var btnAbrir =  document.querySelector('.abrir-menu');
    btnAbrir.style = 'display: none;'
   }

   
   function fechar(){
    var nav =  document.querySelector('.responsivo')
    nav.classList.remove('menu-active')

    var btnAbrir =  document.querySelector('.abrir-menu');
    btnAbrir.style = 'display: ; '
   }