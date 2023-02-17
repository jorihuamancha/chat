/**
 * `tasks/config/copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/copy.js
 *
 */
module.exports = function (grunt) {
  grunt.config.set('copy', {
    dev: {
      files: [
        // * defualt value
        {
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public',
        },
        //* --- CSS ---
        // * copiar bootstrap css
        // ? TODOS LOS CSS A LA CARPETA BOOTSTRAP
        {
          expand: true,
          cwd: './node_modules/bootstrap/dist/css/',
          src: ['bootstrap.min.css'],
          dest: './assets/styles/bootstrap/default',
        },
        // * copiar bootswatch
        // {
        //   expand: true,
        //   cwd: './node_modules/bootswatch/dist/',
        //   src: ['**/*.min.css'],
        //   dest: './assets/styles/bootstrap',
        // },
        // * copiar animate css
        {
          expand: true,
          cwd: './node_modules/animate.css/',
          src: ['**/*.min.css'],
          dest: './assets/styles/animate',
        },
        // * copiar hover css
        {
          expand: true,
          cwd: './node_modules/hover.css/css/',
          src: ['**/*-min.css'],
          dest: './assets/styles/hover',
        },
        //* ---  JS ---
        // * copiar bootstrap js
        {
          expand: true,
          cwd: './node_modules/bootstrap/dist/js/',
          src: ['bootstrap.bundle.min.js'],
          dest: './assets/js/bootstrap',
        },
        // * copiar vue
        {
          expand: true,
          cwd: './node_modules/vue/dist/', //* carpeta donde esta el script
          src: ['vue.global.js'], // * archivo a copiar
          dest: './assets/js/vue', // carpeta destino
        },
        // * copiar axios
        {
          expand: true,
          cwd: './node_modules/axios/dist/',
          src: ['axios.min.js'],
          dest: './assets/js/axios',
        },
      ],
    },
    build: {
      files: [
        {
          expand: true,
          cwd: '.tmp/public',
          src: ['**/*'],
          dest: 'www',
        },
      ],
    },
    beforeLinkBuildProd: {
      files: [
        {
          expand: true,
          cwd: '.tmp/public/hash',
          src: ['**/*'],
          dest: '.tmp/public/dist',
        },
      ],
    },
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // This Grunt plugin is part of the default asset pipeline in Sails,
  // so it's already been automatically loaded for you at this point.
  //
  // Of course, you can always remove this Grunt plugin altogether by
  // deleting this file.  But check this out: you can also use your
  // _own_ custom version of this Grunt plugin.
  //
  // Here's how:
  //
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-copy --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
};
