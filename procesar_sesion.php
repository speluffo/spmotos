<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];

    // Aquí puedes agregar la lógica para validar el usuario y la contraseña.
    // Por ejemplo, podrías comparar con valores hardcodeados o hacer una consulta a una base de datos.

    if ($usuario === 'admin' && $contrasena === '12345') {
        echo "Inicio de sesión exitoso. ¡Bienvenido, $usuario!";
    } else {
        echo "Usuario o contraseña incorrectos.";
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
