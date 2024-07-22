
import express from "express";
import mongoose from "mongoose";
import Bookroute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
const port = 3000
const URI='mongodb://localhost:27017/bookstore';


try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Error",error);
}

app.use("/book",Bookroute);
app.use("/user",userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})