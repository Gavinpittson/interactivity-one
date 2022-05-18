console.log('amogus');
let message = document.querySelector('#message')
document.querySelector('form').addEventListener('submit', addMovie);
function addMovie (event) {
   event.preventDefault()   
   let inputField = document.querySelector('input');
   const movie = document.createElement('li');
   const movieTitle = document.createElement('span');
   movieTitle.addEventListener('click', crossOutMovie)
   movieTitle.textContent = inputField.value;
   
   movie.appendChild(movieTitle);
   deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'x';
   deleteBtn.addEventListener("click", deleteMovie);
   movie.appendChild(deleteBtn)
   const list = document.querySelector('ul');
   list.appendChild(movie);
   inputField.value = ''
}

function deleteMovie (event) {
    event.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}

function crossOutMovie (event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = 'Movie Watched!'
    }else{
        message.textContent = 'Movie Added Back!'
    }
}



