module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../**/lens-*.js']
    },
    inlinelint: {
      html: ['../**/lens-*.html']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-lint-inline');

  grunt.registerTask('default', ['jshint']);

}
