const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));


app.get('/', (req, res) => {
    var test = {
        test: 1,
        test2: 3,
        test3: "test"
    };

    res.send(test);

});