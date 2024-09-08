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


