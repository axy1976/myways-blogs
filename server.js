const e = require('express');
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;
const mongo = require('mongoose');
const UserModel = require('./Models/User');
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
    }else {
        return res.json({data:"User not found !"});
    }
});

app.get('/', (req, res) => {
    res.append("ha bhai");
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
