<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/var/www/u0132319/data/www/healthmarketing.me/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'u0132319_wp940');

/** MySQL database username */
define('DB_USER', 'u0132319_wp940');

/** MySQL database password */
define('DB_PASSWORD', 'S)3!sP9A6p');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'h1qnnijwb68gxpnybeynfecjeemuvrijrcbymhzqzlgujilh2ztbdlrsdjvvxfqf');
define('SECURE_AUTH_KEY',  'xqbwbjzq0sbp3ft2mkiqzggah1dwpgzsg19mcyueyapvqt93xacjotovfj6mqotz');
define('LOGGED_IN_KEY',    '4iodcxjwctm6rbgn7cefiz3d8ktvmkuhw2l8okwxldfppqcr8huhjeljl0kf2hj6');
define('NONCE_KEY',        'jpcrba7jmtxvhnc4xisrpzqyai9xh5iuestog8lxxw8nmsm4sjjfiiimf2ewkwvc');
define('AUTH_SALT',        'bz35wmacl6ewplypqyyks8t0kfalsbkvyqktonwdnnkorafcesvwnhbk53uogmkv');
define('SECURE_AUTH_SALT', 'upxczq2lxnmpygrjpab5jxopahxewfygoepuk9y8zaohqovhjcvybdhdvfedvvqc');
define('LOGGED_IN_SALT',   '2iuwmnba8t1m7jfodbpdzmawo9zatsqmsvt2bh428wbra23h8uqaehdv8o6h0q4f');
define('NONCE_SALT',       'a7zykdxl1q7tbz0ik5ametz9kgfrlvbu9zuhvfvytsyfsxdqiwtm455cfggbdmmc');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'hyc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
