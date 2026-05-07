import { Router } from "express";
import { Student } from "../schema/model.js";

import {
  createStudentController,
  readAllStudentController,
  studentDeleteController,
  studentDetailsController,
  studentUpdateController,
} from "../controller/studentController.js";

const studentRoutes = Router();

studentRoutes
  .route("/")
  .post(createStudentController)
  .get(readAllStudentController);

studentRoutes
  .route("/:id")
  .get(studentDetailsController)
  .patch(studentUpdateController)
  .delete(studentDeleteController);

export default studentRoutes;
