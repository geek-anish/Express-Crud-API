import { Product } from "../schema/model.js";

export const createProductController = async (req, res, next) => {
    const  result =  await Product.create(req.body);

     res.json({ 
      success:true,
      message:"product created sucessfully",
      result:result,
    });

  };
export const readAllProductController = async (req, res, next) => {
    // const result= await Product.find({ name:"Mobile"}).select("-name -price")
    // const result= await Product.find({ }).sort("name: -1")

      let {sort,select,limit,page,...find}=req.query //
      // const result= await Product.find(find).sort(sort);

      let result=await Product.paginate(find,{
        limit:limit,
        page:page,
        sort:sort,
        select:select,
      })



    res.json({
      sucesss:true,
      message:"product read successfully",
      result:result,
    })
    
  };
export const productDetailsController = async (req, res, next) => {
    let result=await Product.findById(req.params.id);
    res.json({
      sucesss: true,
      message: "product read sucessfully",
      result:result,
    });
    
  };
export const updateProductController = async (req, res, next) => {
    let result=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,})
    res.json({
      sucesss: true,
      message: "product updated sucessfully",
      result:result,
    });
  } ;
export const deleteProductController = async (req, res, next) => {
    let result=await Product.findByIdAndDelete(req.params.id)

    res.json({
      sucesss: true,
      message: "product deleted sucessfully",
      result:result,
    });
  };
