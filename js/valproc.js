function valproc(){
// Dropdown abre/fecha ao clicar no link principal
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {
        // se estiver em tela pequena, impede pular de seção
        if (window.innerWidth <= 999) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("active");
        }
    });
});
}
