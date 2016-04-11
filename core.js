'use strict';


var menuElem = document.getElementById('mainMenu');
var menuElemTop = menuElem.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop);
var footerElem = document.getElementsByClassName('footer')[0];


window.onscroll = function() {
  //эти 2 переменные нужны для определения, дошел ли пользователь до конца страницы, чтобы сместить меню вверх
  var scrollHeight=document.documentElement.scrollHeight;
  var clientHeight=document.documentElement.clientHeight;
  //кроссбраузерный вариант window.pageYOffset
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  //Если мы уже наверху
  if (menuElem.classList.contains('fixed') && (scrollTop < menuElemTop)){
    menuElem.classList.remove('fixed');
  }
  //если в середине контента
  else if (scrollTop > menuElemTop) {
    menuElem.classList.add('fixed');
  }
  //Пользователь долистал до подвала
  //пододвигаю меню вверх, если элементов в меню достаточно много
  if(menuElem.clientHeight>=clientHeight && (scrollHeight-footerElem.clientHeight-menuElem.clientHeight<=scrollTop)){
    // сколько отодвинуть от низа =  общего скролла высота - текущее наскролленое - сколько не влезло от меню
    var footerHeightВifference = scrollHeight-footerElem.clientHeight-scrollTop-menuElem.clientHeight;
    menuElem.style.top = footerHeightВifference+'px';
  }
  else {
    menuElem.style.top = "0";
  }
};

window.onscroll();