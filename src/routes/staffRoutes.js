import { Router } from "express";

const staffRoutes = Router();

staffRoutes
  .route("/") // localhost:8000/staff
  .post((req, res, next) => {
    res.json({
      sucesss: true,
      message: "staff created sucessfully",
    });
  })
  .get((req, res, next) => {
    res.json({
      sucesss: true,
      message: "staff read sucessfully",
    });
  });

staffRoutes
  .route("/:id")
  .get((req, res, next) => {
    res.json({
      sucesss: true,
      message: "staff raed sucessfully",
    });
    console.log(11);
  })
  .patch((req, res, next) => {
    res.json({
      sucesss: true,
      message: "satff updated sucessfully",
    });
  })
  .delete((req, res, next) => {
    res.json({
      sucesss: true,
      message: "staff deleted sucessfully",
    });
  });

export default staffRoutes;
