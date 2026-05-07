import { Router } from "express";
import { Job } from "../schema/model.js";
import { createJobController, deleteJobController, readAllJobController, jobDetailsController, updateJobController } from "../controller/jobController.js";

const jobRoutes=Router();


jobRoutes
.route("/")
.post(createJobController)

.get(readAllJobController);

jobRoutes
.route("/:id")
.get(jobDetailsController)
.patch(updateJobController)
.delete(deleteJobController);




export default jobRoutes;