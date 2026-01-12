<?php
/**
 * GSAP Child Theme Functions
 *
 * @package GSAP_Child
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// The proper way to enqueue GSAP script in WordPress

// wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
function theme_gsap_script(){
    // The core GSAP library
    wp_enqueue_script( 'gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js', array(), false, true );
    // ScrollTrigger - with gsap.js passed as a dependency
    wp_enqueue_script( 'gsap-st', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js', array('gsap-js'), false, true );
    // Your animation code file - with gsap.js passed as a dependency
    wp_enqueue_script( 'gsap-js2', get_template_directory_uri() . '/js/app.js', array('gsap-js'), false, true );
}

add_action( 'wp_enqueue_scripts', 'theme_gsap_script' );

function allow_svg_uploads($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'allow_svg_uploads');

function allow_rive_uploads($mimes) {
    $mimes['riv'] = 'application/octet-stream';
    return $mimes;
  }
  add_filter('upload_mimes', 'allow_rive_uploads');
  

function load_rive_runtime() {
    wp_enqueue_script(
      'rive-canvas',
      'https://unpkg.com/@rive-app/canvas@2.9.1',
      array(),
      null,
      true
    );
  }
  add_action('wp_enqueue_scripts', 'load_rive_runtime');
  