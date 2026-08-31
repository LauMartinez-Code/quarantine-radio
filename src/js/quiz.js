let btnStart = document.getElementById('btnStart'),
form = document.getElementById('adivinando'),
txtResponse = document.getElementById('txtResponse'),
pistas = document.getElementsByClassName('pistas'), // pistas para el usuario
incorrect = document.getElementById('incorrect'), // informa respuestas incorrectas
badge = document.getElementsByClassName('badge'), //muestra los intentos restantes
ObjAdivinanza,
intentos = 4;

btnStart.addEventListener('click', showQuiz);

function showQuiz() {
    let adivinanza = document.getElementById('quiz');   /* <p> dnd se muestra la adivinanza */
    let index = Math.floor(Math.random() * (3 - 0) + 0); /* obtiene un numero random del 0 al 2 */

    let options = [
        {
            quiz: "¿Qué personaje necesita enojarse para transformarse en superhéroe?",
            resp: "hulk",
            pista1: "Cuando lo hace cambia de color",
            pista2: "También destruye todo lo que golpea"
        },
        {
            quiz: "En la primera película de Avengers, ¿contra qué villano se enfrenta el equipo?",
            resp: "loki",
            pista1: "Es Asgardiano, aunque no de sangre.",
            pista2: "También es un experto ilusionista y puede cambiar su aspecto físico a voluntad."
        },
        {
            quiz: "¿Quién es el hijo de Odin que utiliza un arma especial llamada el Mjölnir?",
            resp: "thor",
            pista1: "Dicha arma es lo mismo que se utiliza para golpear clavos.",
            pista2: "Puede crear y controlar rayos y truenos."
        }
    ];

    btnStart.setAttribute('disabled', true);
    btnStart.innerText="Suerte con lo de abajo!";
    
    adivinanza.innerText = options[index].quiz;

    form.style.display = 'initial';
    txtResponse.focus();

    ObjAdivinanza = options[index];
}

function verify(e) {
    
    e.preventDefault();

    if (txtResponse.value.toLowerCase() === ObjAdivinanza.resp) {
        
        endGame('text-success','Correcto!');

        Swal.fire({
            icon: 'success',
            title: 'Así Es!!',
            text: 'Adivinaste',
            footer: '<a href="https://www.instagram.com/quarantineradio.official/" target="_blank">Recuerda publicarlo en Instragram para ganar las entradas</a>'
        });

    }
    else {
        intentos--;

        if(intentos == 0) {
            endGame('text-danger','Perdiste :(');

            badge[0].innerText = intentos;
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Te quedaste sin intentos, la próxima será!',
            });

        }
        else {
            txtResponse.focus();
    
            txtResponse.classList.add('incorrect');
            incorrect.innerText = "Upss... esa respuesta no es!";
    
            setTimeout(() => {txtResponse.classList.remove('incorrect');}, 5000);

            if (intentos === 3) {
                refreshBadge('badge-success', 'badge-primary');
            }
            else if(intentos === 2) {
                
                alertPistas = document.getElementById('alert-pistas');
                alertPistas.classList.remove('d-none');
                alertPistas.style.display = "block";
                
                pistas[0].innerHTML = "<strong>Pista 1</strong> <br/>" + ObjAdivinanza.pista1;
                
                refreshBadge('badge-primary', 'badge-warning');
            }
            else if(intentos === 1) {
                pistas[1].innerHTML = "<strong>Pista 2</strong> <br/>" + ObjAdivinanza.pista2;

                pistas[2].innerText = "Último Intento!";

                refreshBadge('badge-warning', 'badge-danger');
            }
        }
    }   
}

function endGame(textColor, message) {  //acciones que suceden al ganar o perder
    document.getElementById('submit').setAttribute('disabled', true);
    txtResponse.setAttribute('disabled', true);
    incorrect.classList.remove('text-warning');
    incorrect.classList.add(textColor);
    incorrect.innerText = message;
}

function refreshBadge(actual, nuevo) {  //cambia los estilos del contador del boton
    badge[0].classList.remove(actual);
    badge[0].classList.add(nuevo);
    badge[0].innerText = intentos;
}

/* Validacion del Form con Bootstrap */
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('input', function(event) {    // cambiamos submit por input para que valide al escribir 
          form.classList.add('was-validated');
        }, false);

        form.addEventListener('submit', function(event) {   // a su vez mantenemos la verificacion al hacer submit
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
          }
          else {
            verify(event);
          }
         
        }, false);
      });
    }, false);
})();
