import commonConfig from "./webpack.common";
import devConfig from "./webpack.dev";
import productionConfig from "./webpack.production";

module.exports = function () {
    if(process.env["npm_lifecycle_event"] === "pro") {
        const config = {
            ...productionConfig,
            ...commonConfig
        } as any;

        if(productionConfig.plugins && commonConfig.plugins) {
            config.plugins = {
                ...commonConfig.plugins,
                ...productionConfig.plugins
            }
        }

        if(productionConfig.module && commonConfig.module) {
            config.module = {
                ...commonConfig.module,
                ...productionConfig.module
            }
        }

        return config
    } else if(process.env["npm_lifecycle_event"] === "dev") {
        const config = {
            ...devConfig,
            ...commonConfig
        } as any;

        if(devConfig.plugins && commonConfig.plugins) {
            config.plugins = {
                ...commonConfig.plugins,
                ...devConfig.plugins
            }
        }

        if(devConfig.module && commonConfig.module) {
            config.module = {
                ...commonConfig.module,
                ...devConfig.module
            }
        }

        return config
    }
    
}