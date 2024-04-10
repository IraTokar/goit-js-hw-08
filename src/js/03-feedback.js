import throttle from 'lodash.throttle';

const formKey = 'feedback-form-state';
const form = document.querySelector('form.feedback-form');
const formEmail = document.querySelector('form input');
const formMessage = document.querySelector('form textarea')

let formData = {};

populateTextarea();

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(formKey, JSON.stringify(formData));
};

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(formKey));

    if (savedMessage === null) {
        return;
    };
    
    formMessage.value = savedMessage['message'] || '';
    formEmail.value = savedMessage['email'] || '';
};

form.addEventListener('submit', removeDate);
function removeDate(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    const objData = JSON.parse(localStorage.getItem(formKey));
    localStorage.removeItem(formKey);
}