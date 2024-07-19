const subscribeBtn = document.querySelector('.subscribeBtn');
const dismissBtn = document.querySelector('.dismissBtn');

const successPage = document.querySelector('.success');
const mainPage = document.querySelector('.main');

function emailValidation(mail) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(mail).toLowerCase());
}


function validateEmail() {
    const mail = document.querySelector('#emailInput').value;
    const eMail = document.querySelector('#emailInput')
    const isValid = emailValidation(mail);
    const labelMsg = document.querySelector('#labelMsg')

    if (mail === "" ) {
        labelMsg.textContent = '';
        eMail.style.borderColor = '';
        eMail.style.backgroundColor = '';
        subscribeBtn.disabled = true;
    } else if (isValid) {
        labelMsg.textContent = "Email is Valid";
        labelMsg.style.color = 'green';
        eMail.style.borderColor = 'green'
        eMail.style.backgroundColor ='';
        subscribeBtn.disabled = false;
    } else {
        labelMsg.textContent = 'Input a valid email address'
        labelMsg.style.color = 'red'
        eMail.style.borderColor = 'red'
        eMail.style.backgroundColor = 'pink'
        subscribeBtn.disabled = true;
    }
}

// Validate email when input changes
document.querySelector('#emailInput').addEventListener('input', validateEmail())


// Changes the pages when the button is clicked
subscribeBtn.addEventListener('click', () => {
    const mail = document.querySelector('#emailInput').value;
    document.querySelector('#successMail').textContent = mail;
    successPage.style.display = 'block';
    mainPage.style.display = 'none';
})

dismissBtn.addEventListener('click', () => {
    successPage.style.display = 'none';
    mainPage.style.display = 'flex';
})