const express = require("express");
const {logReqRes} = require("./middlewares");
const {connectMongoDB} = require("./connections.js");
const userRouter = require("./routes/user");

// creating instance of app
const app = express();
const PORT = 8000;


// Connection - we have to pass db url
connectMongoDB("mongodb://127.0.0.1:27017/project-01")
    .then(() => console.log("MongoDB connected successfully"));


// middleware - plugin
app.use(express.urlencoded( { extended : false}));
app.use(logReqRes("log.txt"));


// routes
app.use("/api/users", userRouter);


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

