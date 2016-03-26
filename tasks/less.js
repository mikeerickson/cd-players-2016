import gulp   from 'gulp'
import less   from 'gulp-less'
import msg    from 'gulp-messenger'
import config from './gulp.config'
import path   from 'path'
import concat from 'gulp-concat'

gulp.task('less', () => {
	return gulp.src(config.less.src)
		.pipe(concat(config.less.filename))
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest(config.less.dist))
		.pipe(msg.flush.success(`*** LESS Files Compiled [${config.less.dist}/${config.less.filename}] ***`));
})

gulp.task('styles', ['styles'])
gulp.task('build:styles', ['styles'])
