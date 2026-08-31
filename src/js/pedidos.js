let form = txtName = document.getElementById('txtName'),
txtSurname = document.getElementById('txtSurname'),
txtTel = document.getElementById('txtTel'),
txtSong = document.getElementById('txtSong'),
errorMessages = document.getElementsByClassName('error'),
overlay = document.getElementById('overlay'),
dialog = document.getElementById('Success'),
btnCerrar = document.getElementsByClassName('btnCerrarDialog');

btnCerrar[0].addEventListener('click', () => {
    overlay.classList.remove('active');
    dialog.classList.remove('active');
    document.getElementById('form').reset();
});

const checkName = () => {
    if(txtName.checkValidity()) {
        errorMessages[0].style.display="none";
        return 1;
    }
    else {
        errorMessages[0].style.display="initial";
        return 0;
    }
};

txtName.addEventListener('input', checkName);

const checkSurname = () => {
    if(txtSurname.checkValidity()) {
        errorMessages[1].style.display="none";
        return 1;
    }
    else {
        errorMessages[1].style.display="initial";
        return 0;
    }
}

txtSurname.addEventListener('input', checkSurname);

const checkTel = () => {
    if(txtTel.checkValidity()) {
        errorMessages[2].style.display="none";
        return 1;
    }
    else {
        errorMessages[2].style.display="initial";
        return 0;
    }
}

txtTel.addEventListener('input', checkTel);

const checkSong = () => {
    if(txtSong.checkValidity()) {
        errorMessages[3].style.display="none";
        return 1;
    }
    else {
        errorMessages[3].style.display="initial";
        return 0;
    }
}

txtSong.addEventListener('input', checkSong);


const validateFields = () => {
    event.preventDefault();

    let sum = 0;
    
    sum += checkName();
    sum += checkSurname();
    sum += checkTel();
    sum += checkSong();

    console.log(sum);
    
    if (sum === 4) {
        let numProgram = document.getElementById('cboProgramas').value;
        let song = document.getElementById('song');
        let message = document.getElementById('message');
        message.innerText = "Gracias " + txtName.value + " tu pedido fue enviado al programa Nº " + numProgram + " exitosamente.";
        song.innerText = txtSong.value;
        overlay.classList.add('active');
        dialog.classList.add('active');
    }
    
}
