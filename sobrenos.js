function alternarEstilos() {
    let estilo1 = document.getElementById("sobrenoscss1");
    let estilo2 = document.getElementById("sobrenoscss2");

    if (estilo1.disabled) {
      estilo1.disabled = false;
      estilo2.disabled = true;
    } else {
      estilo1.disabled = true;
      estilo2.disabled = false;
    }
  }