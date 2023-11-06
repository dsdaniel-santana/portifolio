// Adicionar um evento de clique ao botão do acordeão
var accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

    // Alterne a classe "hidden" para mostrar/ocultar o conteúdo
    content.classList.toggle('hidden');
  });
});
