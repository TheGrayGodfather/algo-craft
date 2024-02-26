require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDBSync } = require("./config/db")

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    connectDBSync()
    console.log(`[server] running at ${PORT}`);
})