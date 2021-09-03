const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
const cors = require('cors')

const products = require("./routes/products");

// create app
const app = express();

// use json in app
app.use(express.json());

// use cors to allow requests
app.use(cors());

// set the database address
const db = config.get("db.url");

// connect database using mongoose
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Database Connected !!"))
.catch(() => console.log(error));

// set the API
app.use("/api/products", products);

// set the PORT, & listen requests
const PORT = 5010;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} Port...`);
})
