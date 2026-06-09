// Seleciona o botão de inversão de cores
const botaoInverter = document.querySelector('.inversao');

// Adiciona o evento de clique ao botão
botaoInverter.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');
});