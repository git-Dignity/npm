大纲
1、准备
2、自定义npm包
3、发布自定义npm包
4、引用npm包
5、更新npm包
6、撤销发布的npm包

博客原文
https://www.cnblogs.com/shcrk/p/10363369.html

1、准备
1.1、注册npm用户
npm官网

1.2、安装nodeJs
Node.js官网

1.3、编辑器
我使用的是编辑器vscode进行操作的，读者也可以打开控制台进入到对应目录中进行操作

2、创建自己的npm包
2.1、创建一个空的文件夹,进入
2.2、创建一个默认的npm包
在当前文件夹中执行控制台命令：

npm init

1、执行npm init之后需要一步一步的填写对应信息，这些信息也就是你的npm的信息,在生成的package.json中会自动填入(如下图)
2、可以执行npm init -y, 这样就会帮你创建一个默认配置的package.json而不需要自己一步步配置

{
  "name": "javascript-tool-class",
  "version": "1.0.15",
  "description": "将常用js工具整合成一个class类",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "zhengzemin",
  "license": "ISC",
  "keywords": [
    "js",
    "tool"
  ]
}


2.3、创建一个index.js文件作为包入口文件（我们在package.json下的main写了入口文件index.js）
当然这是默认的入口文件,如果有其他想法的话，完全可以在package.json中进行修改。


2.4、改进index.js
当然我们不可能就为了打印一个日志而创建一个npm包，我们需要可以引入这个npm包并调用这个包中的一些方法,因此我们队这个npm包中的index.js中的内容进行完善一些。

exports.testDemo = function() {
  console.log("this is test demo!!!!!!");
};

3、发布npm包
3.1、登录npm(添加用户)
添加npm用户,或者说登录你的npm账号
执行： npm adduser
然后会提示你输入你的用户名和密码以及邮箱,如果输入正确会提示你成功登录
提示：Logged in as dignity_(你的用户名) on https://registry.npmjs.org/.显示此作为成功登录的标准


3.2、npm publish
当你成功登录之后,就可以发布你的npm包了。
执行： npm publish
<div align="center">
		<img src="https://raw.githubusercontent.com/git-Dignity/sql/master/img/1.%20%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8A%E7%99%BB%E5%BD%95.png"  height="330" width="695">
	</div>

3.3、注意：
可能你在publish的时候会出现如下错误














