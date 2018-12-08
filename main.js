'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const contentName = document.querySelector('.content-name');
const textError = document.querySelector('.text-error');


const fetchUser = (userNick) => {
    fetch('https://api.github.com/users/' + userNick)
        .then(response => {
            return response.json();
        })
        
        .then(data => {
            let userFullName = data.name;
            let fullName = userFullName.split(' ');
            let firstName = fullName[0];
            let lastName = fullName[fullName.length - 1];

            input.value='';            

            for (const letter of firstName) {
              contentName.innerHTML += ` <div class="box-list"><li class="listStyle">${letter}</li> </div>`;
            }
            
        })
        .catch(error => 
            textError.innerHTML= `El usuario que ha introducido no existe`);
        
}

const handleNameUser = () => {
    textError.innerHTML = '';
    contentName.innerHTML = '';
    const userSearch = input.value;
    fetchUser(userSearch);
}

btn.addEventListener('click', handleNameUser);