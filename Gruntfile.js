module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   my_target: {
    //     files: {
    //       'js/script.js': ['/.components/js/*.js']
    //     } 
    //   }
    // },
    concat_css:{
      options:{
        // Task-specific options go here. 
      },
      css: {
        src: ['.components/css/**/*.css'],
        dest:'css/style.css'
      },
    },
		less: {
			options: {
				yuicompress: true,
				compress:true
			},
			bar:{
	      src: ['.components/less/*.less'],
	      dest: '.components/css/style.css'
      }
		},
		compass: {
		  dev: {
				options: {
				  config: 'config.rb'
				}
		  } 
		},
    watch: {
      // run_scripts: {
      //   files: ['js/*.js'],
      //   tasks: ['uglify']
      // }, 
      run_sass: {
        files: ['.components/sass/*.scss'],
        tasks: ['compass:dev']
      }, 
			run_less: {
				files: '.components/less/*.less',
				tasks: 'less'
			},
      run_concat: {
        files: '.components/css/**/*.css',
        tasks: 'concat_css'
      },
    }
  });
  grunt.registerTask('default', 'watch');
}