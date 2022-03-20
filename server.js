const express = require('express');
const path = require('path');
const app = express();
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const { resolve } = require('path');

app.use(express.json());
app.use(express.static(__dirname + '/dist/pizzalasso-demo'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/pizzalasso-demo/index.html'));
});

app.post("/auth", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        const user = { _id: "1", username: "user", password: "password" };    
        if (username === user.username && password === user.password) {          
            const token = jwt.sign(
                { user_id: user._id, username },
                // process.env.TOKEN_KEY,
                "TOKEN_KEY",
                { expiresIn: "2h", }
            );    
            // user.token = token;    
            res.status(200).json({token: token, expires_in: 7200});
        } else
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});

app.post("/save-content", auth, (req, res) => {
    try {
        const { data } = req.body;
        if (!data) {
            res.status(400).send("No content");
        }
        var fs = require('fs');
        var stream = fs.createWriteStream("content.txt");
        stream.once('open', function(fd) {
            stream.write(data);
            stream.end();
        });    
        res.status(200).send({message: "success"});
    } catch (err) {
        console.log(err);
    }
});

app.post("/get-content", auth, (req, res) => {
    try {
        var fs = require('fs');
        const content = fs.readFileSync('content.txt', 'utf8')  
        res.status(200).send({content: content});
    } catch (err) {
        console.log(err);
    }
});

app.listen(process.env.PORT || 8080);