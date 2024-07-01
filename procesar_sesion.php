<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Procesar los datos del formulario
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Aquí puedes agregar la lógica para autenticar al usuario

    // Redirigir a otra página después de iniciar sesión
    header('Location: index.html');
    exit();
} else {
    // Si el método no es POST, muestra un error
    http_response_code(405);
    echo "Método no permitido";
}
?>
