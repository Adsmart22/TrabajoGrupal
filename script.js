 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  /*
  window.onclick = function(e) {
    if (!e.target.matches('.view_more')) {
    var myDropdown = document.getElementById("dropdown-content");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }*/


  /* Redirigir a formulario de compra */

  let btnCarro = document.getElementById("imgCarrito");

  btnCarro.addEventListener("click", mostrarForm);
  
  function mostrarForm(){
    location.href="./pages/formulario.html";
  }