const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));


app.post('/login', (req, res) => {
    console.log(req.body);

    if(req.body.name == "admin" && req.body.password == "1234"){
        res.json({
            "body": "Logged in",
            "statusCode":200,
            "statusMessage": "SUCCESS"
        });
    } else {
        res.json({
            "body": "Could not log in",
            "statusCode":401,
            "statusMessage": "FAILURE"
        });
    }
    

});