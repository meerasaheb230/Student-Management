const express=require("express");
const http=require("http");
const mongoose=require("mongoose");
const cors=require("cors");


const app=express();
const server=http.createServer(app);
const PORT=process.env.PORT || 3001;


app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/students",(req,res)=>{
//     res.send("hello-users");
// })


const userRoutes=require("./routes/user.Router/user.router");


app.use("/",userRoutes);


mongoose
  .connect("mongodb+srv://meerasaheb:MM.Zensar230@meerasaheb.7ajzpjx.mongodb.net/students?retryWrites=true&w=majority")
  .then((res) => console.log(`Mongoose connected to db successfully ${res}`))
  .catch((err) =>
    console.error(`Mongoose connection to db failed ${err.message}`)
  );


  server.listen(PORT, () => {
    console.log(`Express application is listening at http://localhost:${PORT}`);
  });