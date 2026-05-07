import { Job } from "../schema/model.js";

export const createJobController = async (req, res, next) => {
  const result = await Job.create(req.body);

  res.json({
    success: true,
    message: "Job created sucessfully",
    result: result,
  });
};
export const readAllJobController = async (req, res, next) => {
  const result = await Job.find({});
  res.json({
    sucesss: true,
    message: "Job read successfully",
    result: result,
  });
};
export const jobDetailsController = async (req, res, next) => {
  let result = await Job.findById(req.params.id);
  res.json({
    sucesss: true,
    message: "Job read sucessfully",
    result: result,
  });
};
export const updateJobController = async (req, res, next) => {
  let result = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    sucesss: true,
    message: "Job updated sucessfully",
    result: result,
  });
};
export const deleteJobController = async (req, res, next) => {
  let result = await Job.findByIdAndDelete(req.params.id);

  res.json({
    sucesss: true,
    message: "Job deleted sucessfully",
    result: result,
  });
};
