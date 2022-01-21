const e = require('express');
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;
const mongo = require('mongoose');
const UserModel = require('./Models/User');
const BlogModel = require('./Models/Blog');
app.use(express.json());

mongo.connect('mongodb://127.0.0.1:27017/MyWaysBlogs').then(console.log("DB Connected !"));

app.post('/register', async (req,res) => {
    if (req.body.fullname === "" || req.body.email === "" || req.body.phoneno === "" || req.body.password === "" || req.body.cpassword === "") {
        return res.json({data:"All Fields should be filled properly !"})
    }
    if (req.body.password !== req.body.cpassword) {
        return res.json({data:"Both Passwords should be same !"})
    }
    const verify = await UserModel.findOne({email : req.body.email});
    if (verify != null && verify.length !== 0) {
        return res.json({data:"Email Already Exists !"});
    }
    const User = {
        fullname:req.body.fullname,
        email:req.body.email,
        phoneno:req.body.phoneno,
        password:req.body.password,
    };
    const x = await UserModel.create(User);
    if (x.length !== 0) {
        return res.json({data:"Registered Successfully !"});
    }
});

app.post('/login', async (req,res) => {
    if (req.body.email === "" || req.body.password === "") {
        return res.json({data:"All Fields should be filled properly !"})
    }
    const verify = await UserModel.findOne({email : req.body.email,password: req.body.password});
    if (verify != null && verify.length !== 0) {
        return res.json({data:"Login Successfully !",session:{fullname:verify.fullname,email:verify.email}});
    }
    return res.json({data:"User not found !"});
});

app.get('/blogs', async (req, res) => {
    const fetch = await BlogModel.find();
    if (fetch != null && fetch.length !== 0) {
        return res.json({data:"blogs",datas:fetch.reverse()});
    }
    return res.json({data:"No blogs yet !"});
});

app.post('/addBlog', async (req,res) => {
    if (req.body.title === "" || req.body.image === "" || req.body.desc === "") {
        
    }
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
