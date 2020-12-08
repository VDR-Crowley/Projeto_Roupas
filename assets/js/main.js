
  let menu = document.querySelector('.menu-hamburger');
  let areaMenu = document.querySelector('nav');
  let ul = document.querySelector('ul')

  menu.addEventListener('click', () => {
    if(areaMenu.classList.contains('newmenu')) {
        areaMenu.classList.remove('newmenu')   
        menu.style.marginLeft = '90px'
        ul.style.width = '0%'
        ul.style.animationName = 'fechar'

    } else {
      areaMenu.classList.add('newmenu')
      menu.style.marginLeft = '-90px'
      ul.style.animationName = 'abrir'
      ul.style.width = '50%'
    }
  });
