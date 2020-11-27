const webpack = require('webpack');
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        port:8082,
        // target:'http://192.168.0.3',
        target: 'https://www.easy-mock.com/mock/5fbb4c5082d99e0d979c6843/addlist',//后端的接口地址
        // target: 'http://192.168.0.50:9200',//后端的接口地址
        changeOrigin: true, //开启跨域
        pathRewrite: {
          '^/api': '',//这里即为重写后的地址，baseURL里的地址要换成这个
        },
      },
    }
  },
}