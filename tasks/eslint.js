// BABELIFY TASK
// =============================================================================

import gulp         from 'gulp'
import msg          from 'gulp-messenger'
import eslint       from 'gulp-eslint'
import config       from './gulp.config'
import temp         from 'cd-utils'
import handleErrors  from './utils/handleErrors'

let utils = temp({});

msg.init({showPipeFile: false, timestamp: true})

gulp.task('eslint', () => {
	let files = [].concat(config.scripts.src, config.scripts.main, config.lint.src)

	return gulp.src(config.lint.src)
		.on('error', handleErrors)
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(msg.flush.note('*** Linting Scripts [babel-eslint]: ' + utils.ellipsis(files.toString(),30)));
});

gulp.task('lint', ['eslint']);
