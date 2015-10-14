module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'public_html/component/js/libs/angular.min.js',
            'public_html/component/js/libs/angular-route.min.js',
            'public_html/component/js/libs/angular-cookies.min.js',
            'public_html/component/js/libs/angular-mocks.js',
//            'public_html/component/*.js',
            'public_html/routing.js',
            'public_html/index.js',
            'public_html/view/**/*.js',
            'public_html/service/**/*.js',
            'public_html/config/**/*.js',
            'test/unit/demotest.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-script-launcher',
            'karma-junit-reporter',
            'karma-chrome-launcher',
//            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }
    });
};
