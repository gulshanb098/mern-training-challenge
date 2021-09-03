const express = require('express');
const cors = require('cors')

const products = require("./routes/products");

// create app
const app = express();

// use json in app
app.use(express.json());

// use cors to allow requests
app.use(cors());

// set the API
app.use("/api/products", products);

// set the PORT, & listen requests
const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} Port...`);
})
