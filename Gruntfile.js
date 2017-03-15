const srcFolder = 'original_images/';
const distFolder = 'images/';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-tinypng');
  grunt.loadNpmTasks('grunt-contrib-copy');
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
    concat_css: {
      options: {
        // Task-specific options go here.
      },
      css: {
        src: ['.components/css/**/*.css'],
        dest: 'css/style.css'
      },
    },
		less: {
			options: {
				yuicompress: true,
				compress: true
			},
			bar: {
				src: ['.components/less/*.less'],
    		dest: '.components/css/less.css'
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
    },
    tinypng: {
      options: {
          apiKey: 'Rnveu65ir4wnXKcLz6hv7U-L4N-wXquU',
          checkSigs: true,
          sigFile: 'dest/file_sigs.json',
          summarize: true,
          showProgress: true,
          stopOnImageError: true
      },
      compress: {
        expand: true,
        cwd: srcFolder,
        src: ['**/*.png', '**/*.jpg'],
        dest: distFolder,
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: srcFolder,
            src: ['**/*.gif', '**/*.svg', '**/*.xml', '**/*.json', '**/*.ico'],
            dest: distFolder,
          },
        ],
      },
    }
  });
  grunt.registerTask('default', 'watch');
  grunt.registerTask('images', ['tinypng', 'copy']);
};
