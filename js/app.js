// Para que estos eventos ocurran cuando la página haya cargado completamente, uso el evento load

window.addEventListener('load', function() {
  // Utilizo este método para que obtenga el primer valor cuyo selector de etiqueta sea button(botón).
  var button = document.querySelector('button'); 
  // El textarea ahora se le selecciona mediante su ID para utilizarlo en la función realizada con jQuery más abajo.
  var textarea = document.getElementById('comment'); 
  // El label ahora se le selecciona mediante su ID para utilizarlo en la función realizada con jQuery más abajo.
  var label = document.getElementById('counter');
  // Estableciendo el evento click al elemento button
  button.addEventListener('click', function() {
    // Condición if else que me permitirá habilitar y desabilitar mi botón dependiendo si tienen contenido o no. 
    if (textarea.value !== '') { // Todo lo que está contenido en el if ocurrirá si es hay algo escrito en el textarea.
      var sectionDivs = document.getElementsByTagName('section')[0]; // Seleccionando a la sección que contendra  a los divs con los comentarios.
      var div = document.createElement('div'); // Creando un div.
      var message = textarea.value; // Encapsulando lo escrito en el textarea en una variable.
      var text = document.createTextNode(message); // Creando un nodo de texto cuyo contenido es el valor de la variable message.
      div.appendChild(text); // Uniendo al nodo de texto 'text' con el nodo de tipo elemento div.
      sectionDivs.appendChild(div); // Uniendo al nodo de tipo elemento div con el nodo de tipo elemento section, para que el div sea contenido dentro de la sección.
      div.classList.add('divText'); // AñadiendOle al div la clase divText(ver CSS).
    } else { // Si no hay nada escrito en el textarea ...
      button.setAttribute('disabled', 'true'); // Le asignamos el atributo disabled(deshabilitado en español)al button cuyo valor es true para que lo deshabilite.
    }
  });
  
  // Utilizando jQuery para estabelecer una función que me permita contar los caracteres de twitter de manera regresiva (de más a menos).
  $(function() {
    var maxLength = 140; // Encerrando en una variable el número máximo de caracteres aceptados.
    var currentCharacters = $('#comment').val().length; // Obteniendo el número de carácteres actuales.
    // Utilizando el método html para establecer a mi etiqueta label cuyo valor de su atributo ID es counter, el valor de la variable maxLength.
    $('#counter').html(maxLength);

    // Estableciendo el evento keyup a mi etiqueta textarea cuyo valor de su atributo ID es comment.
    $('#comment').keyup(function numberOfCharactersEntered() {
      var newCharacters = maxLength - $('#comment').val().length; // Estableciendo como valor a la variable newCharacters la resta entre el número máximo de caracteres aceptados y el número de caracteres ingresados hasta el momento .
      $('#counter').html(newCharacters); // Utilizando el método html para establecer a mi etiqueta label cuyo valor de su atributo ID es counter, el valor de la variable newCharacters
    });
  });
});

