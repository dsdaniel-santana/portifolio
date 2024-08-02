// Variável para armazenar o acordeão aberto
let accordionOpen = null;

var accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Verificar se já existe um acordeão aberto
        if (accordionOpen) {
            accordionOpen.classList.remove('active');
            accordionOpen.nextElementSibling.classList.add('hidden');
        }

        // Atualizar o acordeão aberto
        accordionOpen = this;

        // Toggle da classe 'active' e mostrar/ocultar o conteúdo
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        content.classList.toggle('hidden');
    });
});
