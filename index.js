// importing dotenv
// When application is running first we need to import environmental variables
// 1.
require('dotenv').config()

// import database connection
// 9.
require('./config/db')


// import express
// 2.
const express = require('express')


// import router
// 10.
const router = require('./Routes/router')


// importing cors  -- to connect two different origins
// 3.
const cors = require('cors')

// cookie parser
const cookieParser = require('cookie-parser')



// creating server using express
// 4.
const shopServer = express()


// use cors in server
// 5.
shopServer.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))


// use parse  -- JS to Json & Vice-versa -- json is the parse
// 6.
shopServer.use(express.json())

// use cookie-parse
shopServer.use(cookieParser())


// use router
// 11.
shopServer.use("/api", router)


// Customising PORT  -- if the port 4000 is not free, the .env will provide another port 
// 7.
const PORT = 4000 || process.env.PORT


// Running the server
// 8.
shopServer.listen(PORT,() => {
    console.log(`shopServer started at port : ${PORT}`);
})