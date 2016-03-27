/* eslint quotes:0*/

import gulp from 'gulp'
import shell from 'shelljs'

gulp.task('test:jest', () => {
	shell.exec('jest --colors')
})
