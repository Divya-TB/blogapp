const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost-27017/blogapp');
const Schema =mongoose.Schema;


var userScheme = new Scheme({
    name:String,
    username:String,
    password:String
    
    
})

var user =mongoose.model('uderdatas',userSchema);

module.exports = user;