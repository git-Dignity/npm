const path = require('path');
const merge = require('webpack-merge');
// 引入通用webpack配置文件
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// 对js代码进行混淆压缩的插件
// const uglifyJSPlugin = new UglifyJSPlugin();
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// the path(s) that should be cleaned
let pathsToClean = ['dist'];
// the clean options to use
let cleanOptions = {
  root: path.resolve(__dirname),
  // exclude: ['shared.js'],
  verbose: true,
  dry: false,
};

// 对babel的配置，内容同.babelrc文件
const babelOptions = {
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(js|jsx)(\?.*)?$/,
        loader: 'babel-loader'
      },
    {test:/\.css$/,loader:"style-loader!css-loader"},
 
  ]},
    resolve :{
      extensions :[ '.js' , '.jsx' , '.json' ], //表示这几种文件的后缀名可以省略，按照从前到后的方式来进行补全
      alias: {//表示别名
          '@' : path.join(__dirname,'./src'), //这样，@ 就表示 项目根目录中src 的这一层路径
          '@static' : path.join(__dirname,'./static')
      }
  },
  devtool: 'cheap-module-source-map',
  // plugins: [
  //   uglifyJSPlugin,
  // ],
  // 设置出口文件地址与文件名
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({  // // 打包输出HTML
      title:"javascript-tool-class",
      minify: { // 压缩HTML文件
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true,// 压缩内联css
        hash: true   // hash选项的作用是 给生成的 js 文件一个独特的 hash 值
      },
      filename: 'index.html',
      template: 'index.html'
    })
  ],
});