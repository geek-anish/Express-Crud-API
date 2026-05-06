import { Router } from "express";
import { User } from "../schema/model.js";

const userRoutes=Router();


userRoutes
.route("/")
.post(async (req,res,next)=>{
    let result= await User.create(req.body);

    res.json({
        success:true,
      message:"User created sucessfully",
      result:result,
    });
})

.get(async (req,res,next)=>{
    let result=await User.find({})
    res.json({
         sucesss:true,
      message:"User read successfully",
      result:result,
    })
});

userRoutes
.route("/:id")
.get(async (req,res,next)=>{
    let result=await User.findById(req.params.id);
    res.json({
        sucesss: true,
      message: "User read sucessfully",
      result:result,
    })
})
.patch(async (req,res,next)=>{
     let result=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,})
        res.json({
          sucesss: true,
          message: "User updated sucessfully",
          result:result,
        });
})
.delete(async (req, res, next) => {
    let result=await User.findByIdAndDelete(req.params.id)

    res.json({
      sucesss: true,
      message: "User deleted sucessfully",
      result:result,
    });
  });




export default userRoutes;