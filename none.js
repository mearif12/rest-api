require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');


const app = express();
const host = '127.0.0.1';
const port = process.env.PORT || 4500;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.get("/",(req,res)=>{

    res.sendFile(__dirname + '/views/index.html');

});

app.use(userRouter);

app.use((req,res,next)=>{

    res.status(404).json({message:"404 Not Found"});

});
 
app.use((err,req,res,next)=>{

    res.status(500).json({message:"Something broke"});

});



app.listen(port,host,()=>{

    console.log(`The server is running at http://${host}:${port}`);

});
