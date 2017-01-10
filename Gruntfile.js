module.exports = function(grunt) {
 
  grunt.initConfig({
      
      postcss: {
        options: {
          processors: [
            require('postcss-import'),
            require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']}), // add vendor prefixes 
            require('cssnano')() // minify the result 
          ]
        },
        dist: {
          src: 'css/style.css'
        }
      },
      
    
      sass: {
        dist: {
          files: {
            "css/style.css" : "css/style.scss"
          }
        }
      },
      

      watch: {
			sass: {
				files: 'css/*.scss',
				tasks: ['sass']
			},
            postcss: {
                files: 'css/*.scss',
				tasks: ['postcss']
            },
            concat: {
                files: 'app/*.js',
                tasks: ['concat']
            },
            jshint: {
                files: 'app/*.js',
                tasks: ['jshint']
            }
     },
      
    connect: {
        server: {
          options: {
            port: 3000
          }
        }
    },
      
      
    'sw-precache': {
		options: {
			cacheId: 'speechr-cache',
			workerFileName: 'sw.js',
			verbose: true,
		},
		'default': {
			staticFileGlobs: [
				'css/*.css',
				'img/*.{gif,png,jpg}',
				'js/*.js',
			],
		},
		'develop': {
			staticFileGlobs: [
				'font/**/*.{woff,ttf,svg,eot}'
			]
		}
	}

});
    
    
    
    
 

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sw-precache');
  grunt.loadNpmTasks('grunt-contrib-jshint');
    
  grunt.registerTask('default', ['connect', 'jshint', 'watch']);
};