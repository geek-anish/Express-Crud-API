/* 
work of backend is to make an api
to make api first we have to make
router
and use that router in index.js

making api means
    define response for particular req

    api is known by
        url and method

*/

import { Router } from "express";
const firstRoutes = Router();

firstRoutes
  .route("/") // localhost:8000
  .post((req, res, next) => {
    console.log("a");
    res.json("a");
  })
  .get((req, res, next) => {
    console.log(" i am first middleware");
    //next();
    // console.log(req.body);
    let err=new Error("this is my err msg");
    next(err);
  },
  (err,req,res,next)=>{console.log("i am err middleware1");
    console.log(err.message);
    next();
  },

(req,res,next)=>{console.log("i am second middleware");next();},
(req,res,next)=>{console.log("i am third middleware");}

)
  .patch((req, res, next) => {
    console.log("a");
  })
  .delete((req, res, next) => {
    console.log("a");
  });

firstRoutes
  .route("/shop/:a/b/:id") // localhost:8000/shop/any/b/any
  .post((req, res, next) => {
    console.log("a shop");
    console.log(req.body);
    res.json(req.body)
  })
  .get((req, res, next) => {
    console.log("b shop ");
  })
  .patch((req, res, next) => {
    console.log("c shop");
  })

firstRoutes
  .route("/bus/:id1/a/:id2") 
  .post((req,res,next)=>{
console.log("first")
console.log(req.query)//[Object: null prototype] { name: 'niyan', addresss: 'ktm' }
console.log(req.params)//[Object: null prototype] { id1: '1', id2: '2' }
console.log(req.body) //{ name: 'Mobile', price: 1000, quantity: 11, isDamage: false }
res.json(req.body)
  })// localhost:8000/shop/any/b/any


export default firstRoutes;

/* 
url
locaolhost:8000/product/:a?name=niyan&addresss=ktm
url=route?query
route=locaolhost:8000/product/:a   here product is stattic whereas :a is dynamic route
query=name=niyan&addresss=ktm...    data are separated by &
every thing in url is string
in url use kabak-case

*/
/* 
middleware (it is a fun which has req,res,next)
      how to trigger middleware next()
middleware based on parameter
    normal middleware
        (req,res,next)=>{}
          next() is used to call normal middleware
    eroor middleware

      (err,req,res,next)=>{}
        next(error) is used to call error middleware


    middleware based on location
      route middleware
      application middlware
        appl middleware will run for ever route


    what happen when api is hit
      it execute middleware application (main file)
      when api is hit first it execute normal middleware

    application middleware is also known as global middleware


*/