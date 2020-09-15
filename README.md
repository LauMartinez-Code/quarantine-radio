# Descripción del sitio
Una radio FM va a ofrecer a sus oyentes que indiquen los temas que desean escuchar durante el día y para ello nos contrató para que les programemos un sitio web.

El sitio web debe consistir de **tres** páginas html con el siguiente contenido:

- <u>**Listado de programas**</u>, que muestre la información de aquellos programas que van a recibir pedidos. De cada programa se necesita presentar la foto del conductor.  
Desde esta página debe presentarse un enlace al formulario y otro a la página de programación.

- <u>**Pedido de canciones:**</u> esta página debe mostrar un formulario con controles para que el navegante pueda ingresar:

    - Número del programa, en un control que sólo acepte números entre el 1 y el 10.
    - Nombre del oyente
    - Número de celular del oyente
    - Nombre de la canción

- <u>**Programación**</u>, que muestre una tabla con el horario de cada programa.

Al presionar el botón "*Enviar*" <u>debe verificarse</u> que el número del programa, el nombre del cliente y el nombre de la canción estén todos ingresados. Si se cumple debe mostrarse de alguna forma el texto "**Gracias *NOMBRE*, pediste la canción *CANCION***", reemplazando NOMBRE y CANCION por lo que haya ingresado el usuario. En caso de error presentar un alert
con un mensaje al respecto.

Adicionalmente incluye una pagina extra para ver la transmisión de alguna radio en vivo.

Cada página debe contener enlaces para llegar a las demas.

En este branch el sitio debe ser responsive y utilizar Bootstrap.  
Ademas con la finalidad de interactuar con el usuario, y utilizar javascript, se agrega en el sitio web una adivinanza con hasta 4 intentos.  
**El apartado de adivinanza, deberá:**
- Contener un cuadro texto y un botón.
- Facilitar al usuario 2 pistas si el usuario no acierta en el intento 2 y 3.  
- Informar en todo momento al usuario el nro intentos que le quedan.  
- Informar el resultado final (si acierta o si perdió los 4 intentos).