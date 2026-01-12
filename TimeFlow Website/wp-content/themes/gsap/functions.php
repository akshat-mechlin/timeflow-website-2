<?php
/**
 * GSAP Theme Functions
 *
 * @package GSAP
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Theme Setup
 */
function gsap_theme_setup() {
    // Add theme support for various features
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ) );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'automatic-feed-links' );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'gsap' ),
    ) );
}
add_action( 'after_setup_theme', 'gsap_theme_setup' );

/**
 * Enqueue scripts and styles
 */
function gsap_theme_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style( 'gsap-style', get_stylesheet_uri(), array(), '1.0.0' );
}
add_action( 'wp_enqueue_scripts', 'gsap_theme_scripts' );

/**
 * Register widget areas
 */
function gsap_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Sidebar', 'gsap' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here.', 'gsap' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'gsap_widgets_init' );

  