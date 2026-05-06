import { Router } from "express";

const adminRoutes = Router();

adminRoutes
  .route("/") // localhost:8000/adminroutes
  .post((req, res, next) => {
    res.json({
        sucesss:true,
        message:"admin created sucessfully"
    });
  })
  .get((req, res, next) => {
    res.json({
        sucesss:true,
        message:"admin read sucessfully"
    });
    console.log(req.params)
  })

  adminRoutes
  .route("/:id")
  .get((req, res, next)=>{
    res.json({
        sucesss:true,
        message:"admin read sucessfully"
    });
    console.log(req.params);
  })
  .patch((req, res, next)=>{
    res.json({
        sucesss:true,
        message:"admin updated sucessfully"
    });
  })
.delete((req, res, next)=>{
    res.json({
        sucesss:true,
        message:"admin deleted sucessfully"
    });
  })

export default adminRoutes;



