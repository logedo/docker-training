const express = require('express');
const path = require('path')
const port = 7071;
const app = express();

app.use(express.static('/app/dist'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});


app.listen(port, () => {
    console.log("Server is listening on port "+port);
});
