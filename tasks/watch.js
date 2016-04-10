// WATCH TASK
// =============================================================================

import gulp   from 'gulp'
import config from './gulp.config'
import msg    from 'gulp-messenger'
import temp   from 'cd-utils'

let utils = temp({})
let files = []
let run   = utils.param('r') || utils.param('run') || false

msg.init({timestamp: true})

// if we supplied run flag ( -r || --run )
if (run) { msg.warn('*** Running Tasks: Enabled ***') }

// used in gulp.tasks below (returns either task arrays or empty array)
let runTasks = (tasks) => {return (run) ? tasks : [] }

gulp.task('watch:dev', runTasks(['webpack']), () =>{
  files = [].concat(config.scripts.src, config.scripts.entry)
	msg.note(`*** Dev Mode [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(files, ['webpack'])
})

gulp.task('watch:scripts', runTasks(['webpack', 'test:jest', 'test:mocha']), () =>{
	files = [].concat(config.scripts.src, config.scripts.entry, config.lint.src)
	msg.note(`*** Watching Scripts [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(files, ['test:jest', 'test:mocha', 'webpack'])
})

gulp.task('watch:styles', runTasks(['build:styles']), () => {
	msg.note(`*** Watching Styles [${config.less.src}] ***`)
	gulp.watch(config.less.src,['build:styles'])
})

gulp.task('watch:eslint', runTasks(['eslint']), () => {
	files = [].concat(config.scripts.src, config.scripts.entry, config.lint.src)
	msg.note(`*** Watching Lint Files [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(files, ['webpack','eslint','todo'])
})

gulp.task('watch:html', runTasks(['copy:html']), () => {
	files = [].concat(config.copy.html.src);
	msg.note(`*** Watching HTML Files [${utils.ellipsis(files.toString(),50)}] ***`)
	gulp.watch(config.copy.html.src,['copy:html'])
})

// add a few aliases for less typing
gulp.task('watch:all', ['watch:html', 'watch:eslint', 'watch:scripts', 'watch:styles', 'todo'])
gulp.task('watch',     ['watch:all'])
gulp.task('dev',       ['watch:dev'])
