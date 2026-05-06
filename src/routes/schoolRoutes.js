import { Router } from "express";
import { School } from "../schema/model.js";

const SchoolRoutes=Router();


SchoolRoutes
.route("/")
.post(async (req,res,next)=>{
    let result= await School.create(req.body);

    res.json({
        success:true,
      message:"School created sucessfully",
      result:result,
    });
})

.get(async (req,res,next)=>{
    let result=await School.find({})
    res.json({
         sucesss:true,
      message:"School read successfully",
      result:result,
    })
});

SchoolRoutes
.route("/:id")
.get(async (req,res,next)=>{
    let result=await School.findById(req.params.id);
    res.json({
        sucesss: true,
      message: "School read sucessfully",
      result:result,
    })
})
.patch(async (req,res,next)=>{
     let result=await School.findByIdAndUpdate(req.params.id,req.body,{new:true,})
        res.json({
          sucesss: true,
          message: "School updated sucessfully",
          result:result,
        });
})
.delete(async (req, res, next) => {
    let result=await School.findByIdAndDelete(req.params.id)

    res.json({
      sucesss: true,
      message: "School deleted sucessfully",
      result:result,
    });
  });




export default SchoolRoutes;