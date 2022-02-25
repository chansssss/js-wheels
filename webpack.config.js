const path = require('path');
const webpack = require('webpack');
module.exports = (env)=> {
  let pro_path = path.resolve(__dirname,  env.entry)
  let entry = path.resolve(pro_path,'src','index.js')
  return {
    mode: 'production',
    entry: entry,
    output: {
      filename: 'main.js',
      library:{
        type:'umd',
        name: 'AweScroll',
      },
      globalObject: 'this',
      path: path.resolve(pro_path, 'dist'),
    },
  }
};