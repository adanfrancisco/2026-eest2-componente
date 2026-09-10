<?php
require_once '../../config.php';


if ( $_SERVER[ 'REQUEST_METHOD' ] !== 'POST' ) {
    http_response_code( 405 );
    die( json_encode( [ 'success' => false, 'message' => 'Método no permitido' ] ) );
}

$input = json_decode( file_get_contents( 'php://input' ), true );
$username = $input[ 'username' ] ?? '';
$password = $input[ 'password' ] ?? '';

if ( empty( $username ) || empty( $password ) ) {
    http_response_code( 400 );
    die( json_encode( [ 'success' => false, 'message' => 'Usuario y contraseña requeridos' ] ) );
}

try {
    $db = getDB();

    // Buscar usuario
    $stmt = $db->prepare( 'SELECT id, username, email, password, nombre, apellido,telefono, direccion, activo FROM usuarios WHERE username = ? OR email = ?' );
    $stmt->execute( [ $username, $username ] );
    $user = $stmt->fetch();

    if ( !$user || $user[ 'password' ] !== $password || !$user[ 'activo' ] ) {
        http_response_code( 401 );
        die( json_encode( [ 'success' => false, 'message' => 'Credenciales inválidas' ] ) );
    }


    echo json_encode( [
        'success' => true,
        'message' => 'Login exitoso',
        'data' => [
            'user' => [
                'id' => $user[ 'id' ],
                'username' => $user[ 'username' ],
                'email' => $user[ 'email' ],
                'nombre' => $user[ 'nombre' ],
                'apellido' => $user[ 'apellido' ],
                'telefono' => $user[ 'telefono' ],
                'direccion' => $user[ 'direccion' ]
            ]
        ]
    ] );

} catch ( Exception $e ) {
    http_response_code( 500 );
    echo json_encode( [ 'success' => false, 'message' => $e->getMessage() ] );
}
