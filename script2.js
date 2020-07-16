
  function obtenerCombo(){
    let comboEntrega = document.getElementById("confirmSend").value;
    let sectionTienda = document.getElementById("listadoTiendas");
    let sectionDom = document.getElementById("domicilio");
    
    if( comboEntrega == "tienda"){
        sectionTienda.style.display = "block";
    }
    else if( comboEntrega == "dom"){
        sectionTienda.style.display = "none";
        sectionDom.style.display = "block";
    }
    else {
        sectionTienda.style.display = "none";
        sectionDom.style.display = "none";
    }
  }
  

