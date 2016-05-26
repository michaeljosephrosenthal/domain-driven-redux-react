/* TODO unused and probably the wrong approach
 * The right way to handle different polypacker templates is to make everything in the default overridable, AND have a "webpack template" option. Right now Polypacker is only really suitable for developing "fullstack components", not for the requirements of a webapp or framework
 */

import path from 'path'
import { configBuilder } from 'polypacker'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin'
import template from 'html-webpack-template'

export default function config({title='Bufflehead App', ...settings}){
    process.chdir(process.env.PWD)
    let pwd = './'
    var htmlPlugin = new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template,
        appMountId: 'app',
        title: title,
        filename: 'index.html',
        inject: false,
        window: { settings }
    })
    var fallback = [
        path.join(__dirname, "node_modules"),
        path.join(pwd, "node_modules"),
        path.join(pwd, "node_modules/polypacker/node_modules"),
        path.join(pwd, "node_modules/domain-driven-redux-react/node_modules")
    ]
    return configBuilder({
        entry: './src/index',
        out: 'bundle.js',
        hot: true,
        context: 'BROWSER',
        env: $ES.ENV,
        plugins: [
            htmlPlugin,
            new HtmlWebpackHarddiskPlugin()
        ],
        babelPresets: ['react'],
        overrides: {
            output: {
                path: path.resolve(path.join(pwd, "dist")),
                filename: 'bundle.js',
                publicPath: '/static/'
            },
            resolve: {
                root: path.resolve(pwd),
                modulesDirectories: [ "node_modules", "node_modules/polypacker/node_modules" ],
                extensions: ["", ".json", ".js", ".jsx"],
                fallback,
                alias: {
                    react: path.join(pwd, './node_modules/react'),
                },
            },
            node: {
                __dirname: true,
                fs: 'empty'
            },
            externals: []
        }
    })
}
