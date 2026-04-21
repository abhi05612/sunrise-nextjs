<?php
// Add this to your WordPress theme's functions.php
// Path: /Applications/XAMPP/htdocs/school-backend/wp-content/themes/<your-theme>/functions.php

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        header('Access-Control-Allow-Origin: http://localhost:3000');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        return $value;
    });
});
