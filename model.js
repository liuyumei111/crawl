/**
 * Created by Administrator on 2017/3/26.
 */
var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1/2016crawl');
//定义模型骨架
var MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
//定义模型
module.exports=mongoose.model('Movie',MovieSchema);