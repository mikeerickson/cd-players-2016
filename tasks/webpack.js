// COPY WEBPACl TASK
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import gulp    from 'gulp'
import webpack from 'gulp-webpack'
import config  from './gulp.config'
import msg     from 'gulp-messenger'

gulp.task('webpack', () => {
	return gulp.src(config.scripts.entry)
		.pipe(webpack( require('../webpack.config.js') ))
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(msg.flush.success(`*** React Files Compiled [${config.scripts.dest}/${config.scripts.filename}] ${new Date()} ***`));

})

