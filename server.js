var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to LTI');
});

app.listen(port, () => {
   console.log("Server listening at port %s", port);
});