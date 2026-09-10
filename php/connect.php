<?php
// Configuración global del sistema
define( 'DB_HOST', 'localhost' );
define( 'DB_NAME', 'clientes' );
define( 'DB_USER', 'root' );
define( 'DB_PASS', '' );


// Función de conexión a BD

function getDB() {
    static $db = null;
    if ( $db === null ) {
        try {
            $db = new PDO(
                'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
                DB_USER,
                DB_PASS,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch ( PDOException $e ) {
            http_response_code( 500 );
            die( json_encode( [ 'success' => false, 'message' => 'Error de BD' ] ) );
        }
    }
    return $db;
}

// // Headers CORS
// header( 'Access-Control-Allow-Origin: *' );
// header( 'Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS' );
// header( 'Access-Control-Allow-Headers: Content-Type, Authorization, X-Auth-Token' );
// header( 'Content-Type: application/json; charset=UTF-8' );

// if ( $_SERVER[ 'REQUEST_METHOD' ] === 'OPTIONS' ) {
//     http_response_code( 200 );
//     exit;
// }

// // Función para obtener token del header

// function getToken() {
//     $auth = '';

//     // Método 1: HTTP_AUTHORIZATION
//     if ( isset( $_SERVER[ 'HTTP_AUTHORIZATION' ] ) && $_SERVER[ 'HTTP_AUTHORIZATION' ] !== '' ) {
//         $auth = $_SERVER[ 'HTTP_AUTHORIZATION' ];
//     }
//     // Método 2: REDIRECT_HTTP_AUTHORIZATION (Apache rewrite)
//     elseif ( isset( $_SERVER[ 'REDIRECT_HTTP_AUTHORIZATION' ] ) && $_SERVER[ 'REDIRECT_HTTP_AUTHORIZATION' ] !== '' ) {
//         $auth = $_SERVER[ 'REDIRECT_HTTP_AUTHORIZATION' ];
//     }
//     // Método 3: getallheaders (Apache + Nginx)
//     elseif ( function_exists( 'getallheaders' ) ) {
//         $headers = getallheaders();
//         $auth = $headers[ 'Authorization' ] ?? $headers[ 'authorization' ] ?? '';
//     }
//     // Método 4: $_ENV (algunos setups PHP-FPM)
//     elseif ( isset( $_ENV[ 'HTTP_AUTHORIZATION' ] ) && $_ENV[ 'HTTP_AUTHORIZATION' ] !== '' ) {
//         $auth = $_ENV[ 'HTTP_AUTHORIZATION' ];
//     }
//     // Método 5: X-Auth-Token header (siempre lo pasa Apache → HTTP_X_AUTH_TOKEN)
//     if ( $auth === '' && !empty( $_SERVER[ 'HTTP_X_AUTH_TOKEN' ] ) ) {
//         $auth = 'Bearer ' . $_SERVER[ 'HTTP_X_AUTH_TOKEN' ];
//     }
//     // Método 6: X-Auth-Token via getallheaders (fallback)
//     if ( $auth === '' && function_exists( 'getallheaders' ) ) {
//         $headers = getallheaders();
//         $xAuth = $headers[ 'X-Auth-Token' ] ?? $headers[ 'x-auth-token' ] ?? '';
//         if ( $xAuth !== '' ) {
//             $auth = 'Bearer ' . $xAuth;
//         }
//     }
//     // Método 7: token como query param (último recurso, inseguro pero funcional)
//     if ( $auth === '' && isset( $_GET[ 'token' ] ) && $_GET[ 'token' ] !== '' ) {
//         $auth = 'Bearer ' . $_GET[ 'token' ];
//     }

//     if ( $auth === '' ) {
//         return null;
//     }

//     // Extraer token (con o sin Bearer)
//     if ( preg_match( '/Bearer\s+(.+)$/i', $auth, $matches ) ) {
//         return $matches[ 1 ];
//     }

//     return $auth;
// }

// // Generar JWT simple

// function generateJWT( $payload ) {
//     $header = json_encode( [ 'typ' => 'JWT', 'alg' => 'HS256' ] );
//     $payload[ 'iat' ] = time();
//     $payload[ 'exp' ] = time() + JWT_EXPIRATION;
//     $payload[ 'jti' ] = uniqid( mt_rand(), true );

//     $base64Header = rtrim( strtr( base64_encode( $header ), '+/', '-_' ), '=' );
//     $base64Payload = rtrim( strtr( base64_encode( json_encode( $payload ) ), '+/', '-_' ), '=' );

//     $signature = hash_hmac( 'sha256', $base64Header . '.' . $base64Payload, JWT_SECRET, true );
//     $base64Signature = rtrim( strtr( base64_encode( $signature ), '+/', '-_' ), '=' );

//     return $base64Header . '.' . $base64Payload . '.' . $base64Signature;
// }

// // Verificar JWT simple

// function verifyJWT( $token ) {
//     $parts = explode( '.', $token );
//     if ( count( $parts ) !== 3 ) return null;

//     list( $header, $payload, $signature ) = $parts;

//     $validSignature = hash_hmac( 'sha256', $header . '.' . $payload, JWT_SECRET, true );
//     $validSignature = rtrim( strtr( base64_encode( $validSignature ), '+/', '-_' ), '=' );

//     if ( $signature !== $validSignature ) return null;

//     $payloadData = json_decode( base64_decode( strtr( $payload, '-_', '+/' ) ), true );
//     if ( !$payloadData || $payloadData[ 'exp' ] < time() ) return null;

//     return $payloadData;
// }
