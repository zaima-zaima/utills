import {Configuration} from "webpack";

export default {
    mode:"development",
    devtool:"source-map",
    target:"web",
    devServer:{
        open:true,
        port:3200,
        hot:true
    }
} as Configuration