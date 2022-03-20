const express = require('express');
const path = require('path');
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.static(__dirname + '/dist/pizzalasso-demo'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/pizzalasso-demo/index.html'));
});

app.post("/auth", async (req, res) => {
    console.log("req",req);
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        const user = { _id: "1", username: "user", password: "password" };    
        if (username === user.username && password === user.password) {          
            const token = jwt.sign(
                { user_id: user._id, email },
                // process.env.TOKEN_KEY,
                "TOKEN_KEY",
                { expiresIn: "2h", }
            );    
            user.token = token;    
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
});
app.listen(process.env.PORT || 8080);