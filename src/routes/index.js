const express = require("express") // in this line we are importing express module
// const express is a function that creates an instance of express application
const v1Routes = require("./v1") // importing the v1 routes from the v1 folder
// v1Routes is a variable that holds the routes from the v1 folder

 

// router is a variable that holds the new router instance 
const router = express.Router() // creating a new router instance of express application Router() is a function that creates a new router object

router.use("/v1", v1Routes) // in this line we are using the v1 routes in the router instance as a middleware function and mounting it on the /v1 path

module.exports = router 