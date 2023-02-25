import {Configuration} from "webpack";
import path from "path";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import HtmlWebpackPlugin = require("html-webpack-plugin");
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
    entry:{
        index:"./src/index.ts"
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:"./js/[name][chunkhash].js"
    },
    
    module:{
        rules:[
            {
                test:/\.ts$/,use:["babel-loader","ts-loader"]
            },
            {
                test:/\.less/,use:[MiniCssExtractPlugin.loader,"css-loader","less-loader"]
            }
        ]
    },
    plugins:[
       new CleanWebpackPlugin(),
       new MiniCssExtractPlugin({
        filename:"./css/[chunkhash].css"
       }), 
       new HtmlWebpackPlugin({
            template:path.resolve(__dirname,"/public/index.html"),
            chunks:["index"],
            filename:"[name].html"
        })
    ],
    resolve:{
        extensions:[".ts",".js"]
    }
} as Configuration