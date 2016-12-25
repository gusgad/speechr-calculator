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
      
    
//sass
      sass: {
        dist: {
          files: {
            "css/style.css" : "css/style.scss"
          }
        }
    },
      
//watch
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
            }
		},
      
       connect: {
        server: {
          options: {
            port: 3000
          }
        }
    },
      


});
    
    
    
    
 

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-postcss');
    
  grunt.registerTask('default', ['connect', 'watch']);
};