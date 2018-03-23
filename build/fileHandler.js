/**
 * Created by lzq on 2017/10/18.
 */
const glob = require('glob');

const globPromise = function(pattern,options){
  return new Promise((resolve,reject)=>{

    glob(pattern,options,function(error,files){
      error === null ? resolve(files) : reject(error);
    });
  });
};

module.exports = globPromise;
