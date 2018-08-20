const path = require('path');

const OUTPUT_PATH = "../src/main/resources/";
const PUBLIC_PATH = "resources/";

module.exports = {
    lintOnSave: false,
    outputDir: `${OUTPUT_PATH}/resources`,
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: true
    },
    chainWebpack: (config) => {
        config.output.publicPath(PUBLIC_PATH);
        config.output.filename('[hash]-[name].js');

        config
            .plugin('html')
            .tap(() => [{
                template: `html-loader!./templates/imports.ftl`,
                filename: `../templates/static_import.ftl`,
            }]);
    },
    configureWebpack: {},
};

