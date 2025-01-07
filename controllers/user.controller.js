let users = require("../models/user.model");
const { v4: uuidv4} = require('uuid');

const getUser = (req,res)=>{

    res.status(200).json(users);

}

const postUser = (req,res)=>{
    const newUser = {
        id:uuidv4(),
        username:req.body.username,
        email:req.body.email
    };
    users.push(newUser); 
    res.status(200).json(users);
}

const putUser = (req,res)=>{
    const userId = req.params.id;
    const {username,email} = req.body;
    users.filter((user)=>user.id === userId).map((selectedUser)=>{
        selectedUser.username = username;
        selectedUser.email = email;
    });
    res.status(202).json(users);
}

const deleteUser = (req,res)=>{
    const userId = req.params.id;
    users = users.filter((user)=>user.id !== userId)
    res.status(200).json(users);
}

module.exports = { getUser,postUser,putUser,deleteUser };
