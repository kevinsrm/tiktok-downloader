require('dotenv').config();
const express = require("express")
const routes = require("./routes")
const app = express()
const port = process.env.PORT || 3000;


app.use("/api", routes)



app.listen(port,()=>{console.log("servidor rodando na porta: " + port)})

