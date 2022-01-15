console.log("Hello world nodejs 3")
console.log("Hello world serverjs ", 20 + 25);

const express = require('express')
const app = express()
const port = 1000
const path = require('path');


app.get("/", (req, res) => {
    res.send("inside first page")
})

app.get('/index', (req, res) => {
    console.log(path);
    console.log(__dirname);
    //console.log(req);
    //console.log(res);
    res.sendFile(path.join(__dirname, 'file.html'));
})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))