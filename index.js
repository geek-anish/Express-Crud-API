console.log("hi i am backend");
/* make express app
make app listen to port
 */

import express, { json } from "express";
import { port } from "./src/config.js";
import firstRoutes from "./src/routes/firstroutes.js";
import adminRoutesRoutes from "./src/routes/adminRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";

import staffRoutes from "./src/routes/staffRoutes.js";
import pagenotfoundmiddleware from "./src/middleware/pagenotfound.mjs";
import errormiddleware from "./src/middleware/errorMiddleware.js";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import userRoutes from "./src/routes/userRoutes.js";
import SchoolRoutes from "./src/routes/schoolRoutes.js";

const app = express();

app.listen(port, () => {
  connectToMongoDb();
  console.log(`application is listening  at port ${port} `);
});

app.use(json()); //making system capable to take json // always place this code in top level;

//app middleware
// app.use((req,res,next)=>{console.log("i am application middleware 1");next();},
// (req,res,next)=>{console.log("i am application middleware 2");next();})
app.use("/", firstRoutes);
app.use("/admin", adminRoutesRoutes);
app.use("/staff", staffRoutes);
app.use("/product", productRoutes);
app.use("/user",userRoutes);
app.use("/school",SchoolRoutes);


// pasge not found middleware

app.use("", pagenotfoundmiddleware);
app.use(errormiddleware);
