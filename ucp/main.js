window.onscroll = function() {
    stickyHeader();
};

function stickyHeader() {
    // Selecciona el header
    var header = document.querySelector("header");
    // Obtiene la posición actual de scroll
    var sticky = header.offsetTop;

    // Cuando se scrollea, añade la clase 'sticky' al header
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        // Si vuelve a la parte superior, remueve la clase 'sticky'
        header.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function() {

    function toggleAside() {
        var aside = document.getElementById("menuAside");
        // Alternar la clase 'open' para mostrar u ocultar el menú
        aside.classList.toggle('open');
    }

    // Evento para el botón del menú
    var menuButton = document.querySelector('.menu-icon');
    if (menuButton) {
        menuButton.addEventListener('click', toggleAside);
    }

    // Evento para el botón desplegable
    document.getElementById('dropdown-button').addEventListener('click', function() {
        alert('Botón de Despliegue clicado!');
    });
});


let currentIndex = 0;
const newsItems = document.querySelectorAll('.news-item');

function showNewsItem(index) {
    newsItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}

function rotateNews() {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNewsItem(currentIndex);
}

// Mostrar la primera noticia
showNewsItem(currentIndex);
setInterval(rotateNews, 4000); // Cambiar cada 4 segundos

