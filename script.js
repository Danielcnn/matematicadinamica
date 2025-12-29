  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('overlay'); // Adicionado o overlay

    function toggleMenu() {
        sideMenu.classList.toggle('open');
        menuIcon.style.display = sideMenu.classList.contains('open') ? 'none' : 'block';
        closeIcon.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
        overlay.style.display = sideMenu.classList.contains('open') ? 'block' : 'none';
    }

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu); // Fecha o menu ao clicar fora

    // Fecha o menu quando um link é clicado (útil para links internos)
    const menuLinks = sideMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sideMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});
