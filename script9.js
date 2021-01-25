'use strict';
/*****Assignment part A and B****/
const john = {
    firstName: 'john',
    lastName: 'williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike','Jack','Peter'],
    calAge: function () {
        this.age = 2021 - this.birthyear;
        return this.age;
    },
    getSummary: function() {
        return john.firstName + 'is a ' + john.age + ' years old and has a no drivers license'
    }
}
console.log(john.firstName + 'has three friends ' + john.friends + 'and his best friend is called ' + john.friends[1]); 
console.log(john.getSummary());  

/*******Assignment part 3*******************/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

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
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
