const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const products = require("./routes/products");

const db = require("./connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
dotenv.config();

require("dotenv-safe").config();


const app = express();
const port = process.env.PORT;
app.use(jsonParser);
app.use(cors());


app.get("/", (req, res) => {
    res.send({
        message: "Teste Nex Digital 🏅 ",
    });
});

//Database connection

db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log("DB connection error :", err);
    });

//Routes
app.use(authRoute);
// app.use(entriesRoutes);
// app.use(userRoutes);
// app.use(freeDict);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
