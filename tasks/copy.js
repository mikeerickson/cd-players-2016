// COPY ASSETS TASK
// =============================================================================

import gulp         from 'gulp'
import msg          from 'gulp-messenger'
import handleErrors from './utils/handleErrors'
import plumber      from 'gulp-plumber'
import config       from './gulp.config'
import temp         from 'cd-utils'
import fs           from 'fs'
import path         from 'path'
import fse          from 'fs.extra'
import copy         from 'gulp-copy'

let utils = temp({})

msg.init({showPipeFiles: true})

gulp.task('copy:html', () => {
	return gulp.src('./src/**/*.html')
		.on('error', handleErrors)
		.pipe(plumber())
		.pipe(copy(config.copy.html.dest, {prefix: 1}))
		.pipe(msg.flush.success(`*** ${utils.ellipsis(config.copy.html.src,50)} ***`));
});

gulp.task('copy:assets', () => {
	utils.createDir('./dist')
	utils.createDir('./dist/vendor')
	utils.createDir('./dist/fonts')
	copyAssets(config.copy.assets);
})

function copyAssets(assets) {
	if(typeof(assets) === 'object') {
		assets.forEach(function(asset){
			let src = asset.src;
			let dest = asset.dest;

			if(fs.lstatSync(src).isDirectory()) {
				fse.copyRecursive(src, dest, function(){
					//
				});
			} else {
				if(path.extname(dest).length === 0) {
					dest += '/' + path.basename(src);
				}
				fse.copy(src, dest, function(){
					//
				});
			}
		});
	}
}

