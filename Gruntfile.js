module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../**/th-*.js']
    },
    inlinelint: {
      html: ['../**/th-*.html']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');

  grunt.registerTask('default', ['jshint']);

}