import gulp    from 'gulp'
import config  from './gulp.config'
import todo    from 'gulp-todo'
import msg     from 'gulp-messenger'

gulp.task('todo', () => {
	return gulp.src(config.todo.src)
		.pipe(todo())
		.pipe(gulp.dest('./'))
		.pipe(msg.flush.success(`*** ${config.todo.filename} Updated ***`))
});

