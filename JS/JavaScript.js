document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const newSrc = thumbnail.src;
            mainImage.src = newSrc;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var categoriasMenu = document.getElementById("categoriasMenu");

    document.addEventListener("mousemove", function(event) {
        var posX = event.clientX;
        var posY = event.clientY;
        categoriasMenu.style.transform = "translate(" + posX + "px, " + posY + "px)";
    });
});

</script>
function validarFormulario() {
    var usuario = document.getElementById('usuario').value.trim();
    var contrasena = document.getElementById('contrasena').value.trim();

    if (usuario === '' || contrasena === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    return true;
}
function obtenerDatosAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            var postsContainer = document.getElementById('posts-container');
            data.forEach(post => {
                var postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}
window.onload = function() {
    obtenerDatosAPI();
};
