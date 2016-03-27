// TASK CONFIGURATION
// task configuration only, use ./config for application configuration

module.exports = {

	defaults: {
		show: true
	},

	copy: {
		assets: [
			{src: './node_modules/bootstrap/dist/css/bootstrap.min.css', dest: './dist/vendor/bootstrap.min.css'},
			{src: './node_modules/bootstrap/fonts/', dest: './dist/fonts'}
		],
		html: {
			src: './src/**/*.html',
			dest: './dist'
		}
	},

	scripts: {
		src: ['.src/js/**/*.js','./src/js/**/*.jsx'],
		entry: './src/js/index.jsx',
		dest: './dist/js',
		filename: 'app.js'
	},

	lint: {
		src:  ['src/js/**/*.js','tasks/**/*.js','specs/**/*Specs.js']
	},

	less: {
		src: './src/less/**/*.less',
		dist: './dist/css',
		filename: 'app.css'
	},

	specs: {
		src: ['specs/**/*Spec.js'],
		openReport: false
	},

	clean: {
		src: ['logs', 'specs/logs','TODO.md','todo.json'],
		dest: './dist'
	},

	todo: {
		src: [
			'./src/js/**/*.js',
			'./specs/**/*.js',
			'./tasks/**/*.js'
		],
		filename: 'TODO.md'
	}

};
