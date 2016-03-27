// WATCH TASK
// =============================================================================

import gulp   from 'gulp'
import config from './gulp.config'
import msg    from 'gulp-messenger'
import temp   from 'cd-utils'

let utils = temp({});

msg.init({timestamp: true})

gulp.task('watch:scripts', ['webpack', 'test:jest', 'test:mocha', 'todo'], () =>{
	let files = [].concat(config.scripts.src, config.scripts.entry, config.lint.src)
	msg.note(`*** Watching Scripts [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(files, ['test:jest', 'test:mocha', 'webpack', 'todo'])
})

gulp.task('watch:styles', ['build:styles'], () => {
	msg.note(`*** Watching Styles [${config.less.src}] ***`)
	gulp.watch(config.less.src,['build:styles'])
})

gulp.task('watch:eslint', ['eslint'], () => {
	let files = [].concat(config.scripts.src, config.scripts.entry, config.lint.src)
	msg.note(`*** Watching Lint Files [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(files, ['webpack','eslint','todo'])
})

gulp.task('watch:html', ['copy:html'], () => {
	let files = [].concat(config.copy.html.src);
	msg.note(`*** Watching HTML Files [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(config.copy.html.src,['copy:html'])
})

gulp.task('watch:all', ['watch:html', 'watch:eslint', 'watch:scripts', 'watch:styles', 'todo'])
gulp.task('watch', ['watch:all'])
