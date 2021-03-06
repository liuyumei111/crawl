/**
 * Created by Administrator on 2017/3/26.
 */
let express=require('express');
let Movie=require('./model');
let app=express();
let path=require('path');
//模板引擎设置
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);

app.get('/',function(req,res){
    Movie.find({},function(err,movies){
        res.render('index',{movies:movies})
    })
});
app.listen(8080)