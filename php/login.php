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

    // Obtener roles
    $stmt = $db->prepare( 'SELECT r.slug FROM roles r INNER JOIN usuarios_roles ur ON r.id = ur.rol_id WHERE ur.usuario_id = ? AND ur.activo = 1' );
    $stmt->execute( [ $user[ 'id' ] ] );
    $roles = $stmt->fetchAll( PDO::FETCH_COLUMN );

    // Obtener permisos
    $stmt = $db->prepare( 'SELECT DISTINCT p.slug FROM permisos p INNER JOIN roles_permisos rp ON p.id = rp.permiso_id INNER JOIN usuarios_roles ur ON rp.rol_id = ur.rol_id WHERE ur.usuario_id = ? AND ur.activo = 1 AND rp.concedido = 1' );
    $stmt->execute( [ $user[ 'id' ] ] );
    $permissions = $stmt->fetchAll( PDO::FETCH_COLUMN );

    // Cerrar sesiones anteriores
    $stmt = $db->prepare( 'DELETE FROM sesiones WHERE usuario_id = ?' );
    $stmt->execute( [ $user[ 'id' ] ] );

    // Generar token
    $token = generateJWT( [
        'user_id' => $user[ 'id' ],
        'username' => $user[ 'username' ],
        'roles' => $roles,
        'permissions' => $permissions
    ] );

    // Guardar sesión
    $stmt = $db->prepare( 'INSERT INTO sesiones (usuario_id, token, ip_address, user_agent, fecha_expiracion, activa) VALUES (?, ?, ?, ?, DATE_ADD(NOW(), INTERVAL ? SECOND), 1)' );
    $stmt->execute( [
        $user[ 'id' ],
        $token,
        $_SERVER[ 'REMOTE_ADDR' ] ?? '0.0.0.0',
        $_SERVER[ 'HTTP_USER_AGENT' ] ?? 'Unknown',
        JWT_EXPIRATION
    ] );

    echo json_encode( [
        'success' => true,
        'message' => 'Login exitoso',
        'data' => [
            'token' => $token,
            'jwt_expiration' => JWT_EXPIRATION,
            'user' => [
                'id' => $user[ 'id' ],
                'username' => $user[ 'username' ],
                'email' => $user[ 'email' ],
                'nombre' => $user[ 'nombre' ],
                'apellido' => $user[ 'apellido' ],
                'telefono' => $user[ 'telefono' ],
                'direccion' => $user[ 'direccion' ],
                'roles' => $roles,
                'permissions' => $permissions
            ]
        ]
    ] );

} catch ( Exception $e ) {
    http_response_code( 500 );
    echo json_encode( [ 'success' => false, 'message' => $e->getMessage() ] );
}
