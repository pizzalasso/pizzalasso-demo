const express = require('express');
const path = require('path');
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.static(__dirname + '/dist/pizzalasso-demo'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/pizzalasso-demo/index.html'));
});

app.listen(process.env.PORT || 8080);

app.post("/authenticate", async (req, res) => {
    try {
        const { username, password } = req.body;
  
        if (!(username && password)) {
            res.status(400).send("username and password required");
        }
        const user = { _id: "1", username: "user", password: "password" };
  
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                { expiresIn: "2h", }
            );
            // save user token
            user.token = token;
            // user
            res.status(200).json(user);
        }
        res.status(400).send("invalid credentials");
    } catch (err) {
      console.log(err);
    }
});