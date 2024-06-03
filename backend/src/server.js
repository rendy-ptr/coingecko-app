const path = require("path")
require("dotenv").config({
    path: path.join(__dirname, "../.env"),
})

const express = require("express")
const cors = require("cors")
const axios = require("axios")

const port = process.env.PORT

const app = express()

app.use(cors())


app.get('/api/test', async (req, res) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=fals")
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
