// TEMPLATES TASK
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import gulp         from 'gulp'
import rt           from 'gulp-react-templates'
import config       from './gulp.config'
import msg          from 'gulp-messenger'
import handleErrors from './utils/handleErrors'

gulp.task('templates', () => {
  return gulp.src(config.templates.src)
    .on('error', handleErrors)
		.pipe(rt())
		.pipe(gulp.dest(config.templates.dest))
		.pipe(msg.flush.success(`*** Templates Built ${config.templates.dest} ***`))
});

gulp.task('rt', ['templates'])
gulp.task('template',['templates'])
