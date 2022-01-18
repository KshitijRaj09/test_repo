// console.log("Hello world nodejs 3")
// console.log("Hello world serverjs ", 20 + 25);

const express = require('express')
const app = express()
const port = 1000
const path = require('path');
const { logger } = require('./middlewares/logger');

const { products } = require('./assets/Products');
const res = require('express/lib/response');
const { application } = require('express');

//app.use(express.static('public'));
// app.get("/", (req, res) => {
//     res.send("inside first page /")
// })
// console.log("path.join()", path.join('file.html'));
// console.log("path.resolve()", path.resolve(__dirname, "./public/file.html"));



// app.get('/index', (req, res) => {

//     //console.log(req);
//     //console.log(res);
//     res.sendFile(path.join(__dirname, './public/file.html'));
// })

// app.get('/2.js', (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./2.js"));
// })

//express routes example
app.get("/hello/:productId", (req, res) => {
    //console.log(req);
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));
    res.status(200).json(singleProduct);
})


//express query string exmaple
app.get("/product/query", (req, res) => {
    console.log(req.query);
    let newProducts = [...products];
    const { name: search, limit } = req.query;

    if (search) {
        newProducts = newProducts.filter(product => product.name.startsWith(search))
    }

    if (limit) {
        newProducts = newProducts.slice(0, Number(limit))
    }
    console.log("req.query : ", search, limit)

    if (newProducts.length < 1)
        return res.status(200).json({
            success: "Request is success",
            message: "Product not found"
        })
    return res.status(200).json(newProducts);
})

//app.use is express middleware
app.use("/api", logger);
app.get("/", (req, res) => {
    res.send("Hello");
})

app.get("/home", (req, res) => {
    res.send("home");
})

app.get("/api/person", (req, res) => {
    res.send("Person");
})
app.use(express.json())
app.post("/posttest", (req, res) => {
    console.log(req.body);
    res.send("inside posttest");
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))