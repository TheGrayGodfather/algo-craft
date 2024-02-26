require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDBSync } = require("./config/db")
const { createTimeStamp } = require("./config/timestamp.config")

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    connectDBSync()
    console.log(`${createTimeStamp()} [server] running at ${PORT}`);
})