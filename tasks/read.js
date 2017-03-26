/**
 * Created by Administrator on 2017/3/26.
 */
/*
 * url 这是一个要读取的url地址
 * callback 读取成功的回调函数
 * 我们需要读取url的响应体，并且提取其中的电影列表并传给callback
 * */

 var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1&qq-pf-to=pcqq.group';
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports = function (url, callback) {
    request({
        url: url,
        encoding: null
    }, function (err, response, body) {
        //因为响应体是gbk编码的，所以需要转成utf8字符串
        body = iconv.decode(body, 'gbk');
        var movies = [];
        var $ = cheerio.load(body);
        //通过筛选符找出我们想要的电影标题
        $('.keyword .list-title').each(function () {
            var $this = $(this);
            var movie = {
                name: $this.text(),  //电影名称
                url: $this.attr('href') //电影url
            };
            logger(`读取电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err,movies)
    })

};
module.exports(url,function(err,movies){
    console.log(movies)
});