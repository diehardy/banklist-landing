'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



const header = document.querySelector('.header')
console.log(header);

let cookieMessage = document.createElement('div') 
cookieMessage.textContent = 'We use a cookie to implement privacy'
cookieMessage.className = 'cookie-message'

header.append(cookieMessage)

let btnCookie = document.createElement('button')
btnCookie.textContent = 'Agree'
btnCookie.className = 'btn--cookie'
btnCookie.addEventListener('click', () => {
  cookieMessage.remove()

})
cookieMessage.append(btnCookie)




let scrollBtns = document.querySelector('.btn--scroll-to')
let section2 = document.getElementById('section--2')


scrollBtns.addEventListener('click', ()=> {
  section2.scrollIntoView({ behavior: 'smooth' })
})


// let navigationLinks = document.querySelectorAll('.nav__link')

// navigationLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault()
//       const idSection =  e.target.getAttribute('href');

//       let chosenSection = document.querySelector(idSection)
//       if(chosenSection) {
//           chosenSection.scrollIntoView({ behavior: 'smooth' })
//       }

//     })
// })


// NAVIGATION


let menu = document.querySelector('.nav__links')
menu.addEventListener('click', function(e) {
  e.preventDefault()
  if(e.target.classList.contains('nav__link')) {
    let chosenSection = document.querySelector(e.target.getAttribute('href'))
    chosenSection.scrollIntoView({ behavior: 'smooth' })
  }
})


// TABS

let parentTabs = document.querySelector('.operations')

let btnsContainer = parentTabs.querySelector('.operations__tab-container')

btnsContainer.addEventListener('click', function (e) {

  let chosenTab = e.target.closest('.operations__tab')

  // guard class
  if(!chosenTab) return;

  chosenTab = chosenTab.dataset.tab;

  btnsContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('operations__tab--active'))
  parentTabs.querySelectorAll('.operations__content').forEach(textContent => textContent.classList.remove('operations__content--active'))


  let chosenBtn = btnsContainer.querySelector(`.operations__tab--${chosenTab}`)
  let chosenContent = parentTabs.querySelector(`.operations__content--${chosenTab}`)

  chosenBtn.classList.add('operations__tab--active')
  chosenContent.classList.add('operations__content--active')

})










// TRAVERSING

// const h1 = document.querySelector('h1')


// // going downwards: child
// console.log('selecting by a nested query selector: ', h1.querySelectorAll('.highlight'));
// console.log('all child nodes:', h1.childNodes);
// const children = h1.children;
// h1.firstElementChild.style.backgroundColor = 'magenta';
// h1.lastElementChild.style.backgroundColor = 'orangered';


// // going upwards: parents

// console.log('parent node: ', h1.parentNode);
// console.log('parent el: ', h1.parentElement);


// console.log(h1.closest('.header__title'));
// //h1.closest('.header').style.background = 'var(--gradient-secondary)'


// // going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// [...h1.parentElement.children].forEach(el => {
//   console.log(el);
//   if (el !== h1) {
//     console.log('match');
//     el.style.backgroundColor = 'blue'
//   } else {
//     console.log('not');

//   }
// }) 


// EVENT PROPAGATION AND BUBBLING

// function generateColor() {

//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min); 
//   }

//   return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
// }


// document.querySelectorAll('.nav__link')
// .forEach(el => {
// el.addEventListener('click',
//   function (e) {
//     e.preventDefault()
//     this.style.backgroundColor = generateColor()
//     console.log('link');
//   }
// )
// })

// document.querySelector('.nav__links').addEventListener('click',
//   function (e) {
//     e.preventDefault()
//     this.style.backgroundColor = generateColor()
//     console.log('links');
//   }
// )

// document.querySelector('.nav').addEventListener('click',
//   function (e) {
//     e.preventDefault()
//     this.style.backgroundColor = generateColor()
//     console.log('menu');
//   }
// )


