/**
 * Created by Administrator on 2017/3/26.
 */

var async = require('async');
var write = require('./write');
var read = require('./read');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var logger=require('debug')('crawl:main');
logger('开始执行任务');
async.waterfall([
    function (callback) {
        read(url, function (err, data) {
            callback(err, data);
        });
    },
    function (movies,callback) {
        write(movies,callback)

    }
],function(err,result){
    logger('全部任务执行完毕')
});

