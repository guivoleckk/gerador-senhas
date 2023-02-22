import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

//pegando botao
const button = document.querySelector('#button');
const text = document.querySelector('h2');
//funcao

button.addEventListener('click', () => {
    const password = nanoid();
    text.innerHTML = password;
});

text.addEventListener('click', (e) => {
    copy(e.target.innerHTML);
    alert('Senha copiada');
});
