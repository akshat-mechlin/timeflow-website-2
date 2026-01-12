<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gsap' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'OR<nA {;=ktY#hlTSEaJqR 93h]8N|tN6P%tKK [oRx$Oexk]VZiGqESo)*`OjH!' );
define( 'SECURE_AUTH_KEY',  'XMkI8HO$<tl0YcRp;]!PL:a|M].0ieE|Mqj8R/Y4gO^rm}Lqr4FWcF]nJqr?`w`C' );
define( 'LOGGED_IN_KEY',    '0:jj2gys8f!.@D+zJn#W!UsEjQ:Mu$t1,Aw_y9WU^8P+=@CQ/rdMFPG=:7v$|($2' );
define( 'NONCE_KEY',        'e}Sm,oZ/km3o}vN5Fn`7!v.H9jHb@rZ]i*l%!;>a{KZ??MNt)VhrqBJm-0D-4}Ih' );
define( 'AUTH_SALT',        'ElsJ;v)EXCo;giAQAZwjz=c=H}/<3q/.y|5;1$[11cGT/!)A-GkV!G !(uOBI& X' );
define( 'SECURE_AUTH_SALT', 'mgMT=(,ZAn+56F`LYJ,iWfMO_$r$kE7DUzRVc(sG3Z]d.K2T#NTkmk]~JVXX-`OQ' );
define( 'LOGGED_IN_SALT',   'w/;a./e+ELQ2lhHXAo,fmM_oL&BYrPyNmL6~4hYQv62IVL1qF=Il`9/@~O-i>cZ@' );
define( 'NONCE_SALT',       '+1{,K8,F`Nai-6xmUy`ZM>XMhe:7 ktYr)OP$;N~?VQdw&iu?0Qk:Uf.I]>bXwe8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
