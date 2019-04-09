const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack=require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev=process.env.NODE_ENV;//环境变量
const config = {
	target:'web',
	entry: {
		app:path.resolve(__dirname,'src/index.js'),
		vendor:['vue'],//单独打包第三方框架或插件
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{test: /.vue$/,use:'vue-loader'},
			{test: /\.(js|jsx)$/,loader: 'babel-loader'	},
			{test: /\.mp3$/,loader:'file-loader',	
				options: {
					name:'media/[hash:5].[ext]',//指定打包后的相对路径和名称
				}
			},
			{
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'   // you can specify a publicPath here  by default it use publicPath in webpackOptions.output
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.styl$/i,
				use: [
					isDev=='development'?'style-loader':{
						loader:MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap:true,
						}
					},
					'stylus-loader'
				]
      },
			{ 
				test: /\.(png|jpg|jpeg|gif|svg)$/i, 
				loader: 'url-loader',
					options: {
						limit: 1024, //如果文件小于字节限制，则可以返回DataURL,否则返回data:'xxx....'格式
						name:'media/[hash:5].[ext]',//指定打包后的相对路径和名称
					}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template:'index.html',//位置根目录
			favicon:'assets/hua_icon.png',
			title:'vue2+webpack实现一个简单的todo应用'
	  }),
		new VueLoaderPlugin(),//"vue-loader": "^15.7.0", 之后请确保引入这个插件！
		new webpack.HotModuleReplacementPlugin(),///热模块替换
		new webpack.NoEmitOnErrorsPlugin(),//减少不必要的代码显示
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename:'[id].[hash].css',
		}),
	],
	devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
		port:8000,
		host:'0.0.0.0',//方便手机访问本机ip
		overlay:{//把错误呈现在网页上
			errors:true
		},
		//open:true,//自动打开浏览器
		hot: true,//热模块替换功能，只改变内容，不刷新页面
	},
	devtool:'#cheap-module-eval-source-map', //源映射样式以增强调试过程
};
module.exports=config;