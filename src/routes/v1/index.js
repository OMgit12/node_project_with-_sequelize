const express = require("express")

const v1Routes = express.Router()
const { infoController } = require("../../controllers")

v1Routes.get("/info", infoController.info)

module.exports = v1Routes