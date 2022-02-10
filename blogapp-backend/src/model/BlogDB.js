const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost-27017/blogapp');
const Schema =mongoose.Schema;


var articleScheme = new Scheme({
    name:String,
    username:String,
    upvotes:Number,
    comments:Array
})

var articleInfo =mongoose.model('articles',articleSchema);

module.exports = articleInfo;