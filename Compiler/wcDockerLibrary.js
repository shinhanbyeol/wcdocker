require.config({
    baseUrl: "./bower_components",
    packages: [
        {
            name: 'dcl',
            location: './dcl'   //points to bower_components/dcl
        },
        {
            name: 'wcDocker',
            location: '../Code'
        }
    ]
});

require.config({
    config: {}
});

//require docker
require([
    "wcDocker/docker",
    "wcDocker/splitter",
    "wcDocker/tabframe",
    "wcDocker/iframe",
    "wcDocker/ThemeBuilder"
], function (wcDocker, wcSplitter, wcTabFrame, wcIFrame, wcThemeBuilder) {

    //export
    window['wcDocker'] = wcDocker;
    window['wcSplitter'] = wcSplitter;
    window['wcTabFrame'] = wcTabFrame;
    window['wcIFrame'] = wcIFrame;
    window['wcThemeBuilder'] = wcThemeBuilder;
    console.log('exported wcDocker');
}, undefined, true);    // Force synchronous loading so we don't have to wait.