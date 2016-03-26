/*
 $ mocha --compilers js:babel-core/register specs
 */

/*
 * Requires .babelrc
 */

import gulp         from 'gulp'
import babel        from 'babel-core/register'
import mocha        from 'gulp-mocha'
import config       from './gulp.config'
import msg          from 'gulp-messenger';
import handleErrors from './utils/handleErrors'

msg.init({timestamp: true, showPipeFile: false});

gulp.task('test:mocha', function(){
	gulp.src(config.specs.src)
		.on('error', handleErrors)
		.pipe(mocha({
			reporter: 'mocha-unfunk-reporter',
			compilers: {
				js: babel
			}
		}))
		.pipe(msg.flush.success('*** Testing Completed *** '));
});

gulp.task('test',['test:mocha']);
gulp.task('mocha',['test:mocha']);

