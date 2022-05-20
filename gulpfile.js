var gulp = require("gulp"), // Подключаем Gulp
	sass = require("gulp-sass"), //Подключаем Sass пакет,
	// browserSync = require("browser-sync"), // Подключаем Browser Sync
	concat = require("gulp-concat"), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglify-es').default, // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require("gulp-cssnano"), // Подключаем пакет для минификации CSS
	rename = require("gulp-rename"), // Подключаем библиотеку для переименования файлов
	del = require("del"), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require("gulp-imagemin"), // Подключаем библиотеку для работы с изображениями
	pngquant = require("imagemin-pngquant"), // Подключаем библиотеку для работы с png
	cache = require("gulp-cache"), // Подключаем библиотеку кеширования
	exec = require('child_process').exec,
	autoprefixer = require("gulp-autoprefixer"), // Подключаем библиотеку для автоматического добавления префиксов
	sourcemaps = require('gulp-sourcemaps')

const browserSync = require('browser-sync').create();

const js_scripts_watch = 'assets/js-src/**/*.js';
const js_scripts_input = 'assets/js-src/main.js';
const js_plugins_input = 'assets/js-src/plugins/**/*.js';
const js_pages_input = 'assets/js-src/pages/**/*.js';
const js_scripts_output = 'assets/js/';

const scss_styles_watch = 'assets/scss/**/*.scss'
const scss_styles_input = 'assets/scss/main.scss';
const scss_plugins_input = 'assets/scss/plugins/**/*.scss';
const scss_pages_input = 'assets/scss/pages/**/*.scss';
const css_output = 'assets/css/';

// собираем main
gulp.task("sass", function () {
	// Создаем таск Sass
	return gulp
		.src(scss_styles_input) // Берем источник
		.pipe(sourcemaps.init())
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(
			autoprefixer(["last 5 versions", "> 1%", "ie 8", "ie 7"], {
				cascade: true,
			})
		) // Создаем префиксы
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(css_output)) // Выгружаем результата в папку app/css
	// .pipe(browserSync.reload({ stream: true })); // Обновляем CSS на странице при изменении
});
// собираем плагины
gulp.task("scss_plugins", function () {
	return gulp
		.src(scss_plugins_input) // Выбираем файл для минификации
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(cssnano()) // Сжимаем
		.pipe(concat("plugins.min.css")) // Добавляем суффикс .min
		.pipe(gulp.dest(css_output)); // Выгружаем в папку app/css
});

// сборка папки pages
gulp.task("scss_pages", function () {
	return gulp
		.src(scss_pages_input) // Выбираем файл для минификации
		.pipe(sourcemaps.init())
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(cssnano()) // Сжимаем
		// .pipe(concat("plugins.min.css")) // Добавляем суффикс .min
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(css_output + 'pages/')); // Выгружаем в папку app/css
});

// gulp.task("browser-sync", function () {
// 	// Создаем таск browser-sync
// 	browserSync({
// 		proxy: '127.0.0.1:8000',
// 		port: 8000,
// 		notify: false
// 	});
// });

gulp.task("scripts", function () {
	return gulp.src(js_scripts_input)
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest(js_scripts_output));
});

gulp.task("js_plugins", function () {
	return gulp.src(js_plugins_input)
		.pipe(concat("plugins.min.js"))
		.pipe(gulp.dest(js_scripts_output));
});

gulp.task("js_pages", function () {
	return gulp.src(js_pages_input)
		// .pipe(concat("plugins.min.js"))
		.pipe(gulp.dest(js_scripts_output + 'pages/'));
});



gulp.task("watch", function () {
	gulp.watch(scss_styles_watch, gulp.parallel("sass", "scss_plugins", "scss_pages")); // Наблюдение за sass файлами
	gulp.watch(js_scripts_watch, gulp.parallel("scripts", "js_plugins", "js_pages")); // Наблюдение за js файлами
	// gulp.watch(
	// 	[js_plugins_input],
	// 	gulp.parallel("js_plugins")); // Наблюдение за главным JS файлом и за библиотеками

	let files = [
		scss_styles_watch,
		js_scripts_watch,
		'./*.html'
	];
	// browserSync.init(files, {
	// 	server: {
	// 		baseDir: './'
	// 	}
	// });
});


//точка запуска
gulp.task(
	"default",
	gulp.parallel("watch")
);