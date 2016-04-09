// WEBPACK MODULE
// webpack.js
// Mike Erickson <codedungeon@gmail.com>
// 2016-04-02 - 6:22 PM
// $ npm i -D gulp gulp-webpack gulp-messenger
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import gulp    from 'gulp'
import webpack from 'gulp-webpack'
import config  from './gulp.config'
import msg     from 'gulp-messenger'
import temp    from 'cd-utils'
import size    from 'gulp-size'

let utils = temp({});

let env           = utils.param('type') || 'development';
let isProd        = env === 'production';
let webpackConfig = require('../webpack.config.js');

gulp.task('webpack', () => {
	return gulp.src(webpackConfig.entry)
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(webpackConfig.output.path))
		.pipe(size({title: 'Scripts'}))
		.pipe(
			msg.flush.success(
				`*** React Files Compiled [${config.scripts.dest}/${webpackConfig.output.filename}] ${new Date()} ***`
			));
})

