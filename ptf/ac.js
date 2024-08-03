// Variável para armazenar o acordeão aberto
let accordionOpen = null;

var accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var content = this.nextElementSibling;

        // Verificar se já existe um acordeão aberto e se é o mesmo que está sendo clicado
        if (accordionOpen && accordionOpen === this) {
            // Fechar o acordeão aberto
            accordionOpen.classList.remove('active');
            content.classList.add('hidden');
            accordionOpen = null;  // Resetar a variável
        } else {
            // Fechar o acordeão aberto anterior, se houver
            if (accordionOpen) {
                accordionOpen.classList.remove('active');
                accordionOpen.nextElementSibling.classList.add('hidden');
            }

            // Abrir o novo acordeão
            this.classList.toggle('active');
            content.classList.toggle('hidden');
            accordionOpen = this;  // Atualizar a variável para o novo acordeão aberto
        }
    });
});
