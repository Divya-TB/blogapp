const express = require('express');
const ArticleInfo = require('./src/model/BlogDB');
const cors = require('cors');

// object initialization
const app = express();
// post method
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


// routes
app.post("/Login",(req,res)=>{
    const {email,password} = req.body;
    user.findOne({email:email},(err,user)=>{
        if(user){
            if(password === user.password){
                res.send({message:"Login Success",user:user})
            }else{
                res.send({message:"Wrong Credentials"})
            }

        }else{
            res.send("Not Register ")
        }
    })
});

app.post("/Register",(req,res)=>{
    console.log(req.body);
    const {name,email,password} = req.body;
    user.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already exit"})
        }else{
            const user = new User({name,email,paaword})
            user.save(err=>{
                if(err){
                    req.send(err)
                }else{
                    res.send({message:"successfull"})
                }
            })
        }
    })
});


app.get('/api/article/:name',(req,res) =>{
    // res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    const articleName = req.params.name;
    Articleinfo.findOne({name:articleName}).then(function(article)
{
    res.json(article)
})
})

// upvoates routing
app.post('/api/article/:name/upvotes',(req,res) =>{
    const filter = { name: articleName};
    const update = {$inc : {upvotes : 1}};
    ArticleInfo.findOneAndUpdate(filter,update,{ new : true})
    .then(function(article){
        res.json(article);
    })
    
})

// comment routing
app.post('/api/article/:name/comments',(req,res)=>{
    const articleName= req.params.name;
   const{username,text}= req.body;
   const filter = { name: articleName};
   const update ={$push: {comments: {username,text}}};
   ArticleInfo.findOneAndUpdate(filter,update,{new:true})
   .then(function(article){
       res.json(article);
   })
   
})



    
// DB port number
app.listen(5000,()=>{
    console.log("Listening on port 5000");
});





