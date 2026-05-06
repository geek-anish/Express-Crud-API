import { Router } from "express";
import { Product } from "../schema/model.js";
const productRoutes = Router();

productRoutes
  .route("/") // localhost:8000
  .post(async (req, res, next) => {
    const  result =  await Product.create(req.body);

     res.json({
      success:true,
      message:"product created sucessfully",
      result:result,
    });

  })

  .get(async (req, res, next) => {
    const result= await Product.find({})
    res.json({
      sucesss:true,
      message:"product read successfully",
      result:result,
    })
    
  });

productRoutes
  .route("/:id")
  .get( async (req, res, next) => {
    let result=await Product.findById(req.params.id);
    res.json({
      sucesss: true,
      message: "product read sucessfully",
      result:result,
    });
    
  })
  .patch(async (req, res, next) => {
    let result=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.json({
      sucesss: true,
      message: "product updated sucessfully",
      result:result,
    });
  })
  .delete(async (req, res, next) => {
    let result=await Product.findByIdAndDelete(req.params.id)

    res.json({
      sucesss: true,
      message: "product deleted sucessfully",
      result:result,
    });
  });

export default productRoutes;
