import throttle from 'lodash.throttle';

const formKey = 'feedback-form-state';
const form = document.querySelector('form.feedback-form');
const formEmail = document.querySelector('form input');
const formMessage = document.querySelector('form textarea')

let formData = {
    email: '',
    message: ''
};

populateTextarea();

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(formKey, JSON.stringify(formData));
};

function populateTextarea() {

    if (localStorage.getItem(formKey)) {
        formData.email = JSON.parse(localStorage.getItem(formKey)).email;
        formData.message = JSON.parse(localStorage.getItem(formKey)).message;
        formMessage.value = formData.message;
        formEmail.value = formData.email;
        
    } else {
        return;
    };
    
};


form.addEventListener('submit', removeDate);
function removeDate(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    // const objData = JSON.parse(localStorage.getItem(formKey));
    localStorage.removeItem(formKey);
    console.log(formData);
    formData.email = '';
    formData.message = '';
}   




