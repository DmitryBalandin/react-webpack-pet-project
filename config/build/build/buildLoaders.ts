import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === "development";
    const localClassName = isDev ? '[path][name]__[local]' :
    '[hash:base64:8]';
    const cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            // modules: true,
            modules: {
                auto: true,
                localIdentName: localClassName,
            }
        },


        // options: {
        //     modules: true,
        //     localIdentName: isDev ? '[path][name]__[local]':'[hash:base64:8]',
        // },
    };

    const loaderCss = {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", cssLoaderWithModules, "sass-loader",],
    };

    const loaderTsx = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        loaderCss,
        loaderTsx
    ]
}