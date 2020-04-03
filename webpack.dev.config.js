var webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:"./src/index.js",
    output:{
        path:__dirname,
        filename:"./release/bund.js"
    },
    //模块
    module:{
        rules:[{
            test:/\.js?$/,   //检查到含有js文件的
            exclude:/(node_modules)/,   //这个是含有node_modules则忽略检查
            loader:'babel-loader'  //检查到js的执行babel-loader，让es6--es5
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
            
          },
          {
            test: /\.(jpeg|jpg|png|gif|svg)$/,
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
    },
    //网页模板的插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          })
        // new webpack.ProvidePlugin({
        //     "$": "jquery",
        //     "jQuery": "jquery",
        //     "window.jQuery": "jquery"
        // })
    ],
    //webpack不会实时更新，而webpack-dev-server会实时更新
    devServer:{
        contentBase:path.join(__dirname,'./release'), //根目录
        open:true,   //自动打开浏览器
        port:9002,
        //请求ajax，不使用跨域，使用代理
        //这里就是代理模式了，无权在9000访问接口，所以使用代理来访问
        proxy:{
            '/api/*':{
                target:'http://127.0.0.1:8888'
            }
        }
    }
}