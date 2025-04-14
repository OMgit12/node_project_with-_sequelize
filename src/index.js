const express = require("express")

const { ServerConfig, LoggerConfig } = require("./config") // importing ServerConfig from config folder

const app = express()
const apiroutes = require("./routes")

app.use("/api", apiroutes)

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on the port: ${ServerConfig.PORT}`)
    LoggerConfig.info(`Server is running on the port`, "root", {})
})
