import { Student } from "../schema/model.js"

export const createStudentController=async (req,res,next)=>{
    let result= await Student.create(req.body);
    res.json({
        success:true,
        message:"Student created sucessfully",
        result:result
    });

};

export const readAllStudentController=async (req,res,next)=>{
    // let result=await Student.find({});

    let {sort,select,limit,page,...find}=req.query;

     let result=await Student.paginate(find,{
            limit:limit,
            page:page,
            sort:sort,
            select:select,
          })

    res.json({
        success:true,
        message:"Student read sucessfully",
        result:result,
    });
};

export const studentDetailsController=async (req,res,next)=>{
    let result=await Student.findById(req.params.id);
    res.json({
        success:true,
        message:"Student read sucessfuly",
        result:result,
    });

};

export const studentUpdateController=async (req,res,next)=>{
     let result=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({
        success:true,
        message:"Student updated sucessfuly",
        result:result,
    });
}

export const studentDeleteController= async (req,res,next)=>{
     let result=await Student.findByIdAndDelete(req.params.id);
    res.json({
        success:true,
        message:"Student updated sucessfuly",
        result:result,
    });
}