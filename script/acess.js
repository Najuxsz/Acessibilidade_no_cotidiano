function fechar() {
  
    const caixaAberta = document.getElementById('openAcessibilidade');
    caixaAberta.style.display = 'none'; 
}

function opcoesAces() {
   
    const caixaAberta = document.getElementById('openAcessibilidade');
    caixaAberta.style.display = 'block'; 
}

function aumentarLetra(tamanho) {
    let elementos = document.querySelectorAll('body, h1, h2, h3, p, li, a'); // Seleciona os elementos que deseja
    elementos.forEach((elemento) => {
        let fontSize = parseFloat(window.getComputedStyle(elemento).fontSize); // Converte para número
        elemento.style.fontSize = `${fontSize + tamanho}px`; // Altera o tamanho da fonte
    });
}

function diminuirLetra(tamanho) {

    let elementos = document.querySelectorAll('body, h1, h2, h3, p, li, a');

    elementos.forEach((elemento) => {
        let fontSize = parseFloat(window.getComputedStyle(elemento).fontSize); 
        elemento.style.fontSize = `${fontSize + tamanho}px`;
    });
}

function aumentarEspacoLinhas() {
    const paragrafos = document.querySelectorAll('p'); 
    paragrafos.forEach(paragrafo => {
        let currentLineHeight = parseFloat(window.getComputedStyle(paragrafo).lineHeight); 
        paragrafo.style.lineHeight = `${currentLineHeight + 1}px`; 
    });
}

function diminuirEspacoLinhas() {
    const paragrafos = document.querySelectorAll('p'); 
    paragrafos.forEach(paragrafo => {
        let currentLineHeight = parseFloat(window.getComputedStyle(paragrafo).lineHeight); 
        if (currentLineHeight > 18) { 
            paragrafo.style.lineHeight = `${currentLineHeight - 1}px`;
        }
    });
}


