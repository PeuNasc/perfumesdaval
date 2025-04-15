function alternarEstilos() {
    let estilo1 = document.getElementById("css1");
    let estilo2 = document.getElementById("css2");
  
    if (!estilo1 || !estilo2) return;
  
    if (estilo1.disabled) {
      estilo1.disabled = false;
      estilo2.disabled = true;
      localStorage.setItem("tema", "claro");
    } else {
      estilo1.disabled = true;
      estilo2.disabled = false;
      localStorage.setItem("tema", "escuro");
    }
  }
  
  window.addEventListener("load", () => {
    let estilo1 = document.getElementById("css1");
    let estilo2 = document.getElementById("css2");
    let temaSalvo = localStorage.getItem("tema");
  
    if (!estilo1 || !estilo2) return;
  
    if (temaSalvo === "escuro") {
      estilo1.disabled = true;
      estilo2.disabled = false;
    } else {
      estilo1.disabled = false;
      estilo2.disabled = true;
    }
  });
  