const express = require('express');
const path =  require('path');
const app = express();
const exphbs = require("express-handlebars")

const {engine} = require('express-handlebars');
const { title } = require('process');

//console.log(__dirname);

app.engine("handlebars" , exphbs.engine({
    extname: ".handlebars",
    defaultLayout:"main",
    layoutsDir: path.join(__dirname, "views"),
  partialsDir: path.join(__dirname, "views") 
}));// this will define the folder which is the partial folder and where it is stored.

app.set("view engine" , "handlebars");
app.set("views",path.join(__dirname , "views"));
 app.use(express.static(path.join(__dirname, '../public')));

app.get("/navbar", (req, res) => {
    res.render("navbar", { layout: false }); 
  });

  app.get("/homepage.handlebars", (req, res) => {
    res.render("homepage", { title: "main page" });
  });

  app.get("/office", (req, res) => {
    res.render("body", { layout: "main", title:"portfolio" });
  });

  app.get("/portfolia.html", (req, res) => {
    res.render("portfolio.handlebars", { layout: "main", title:"portfolio" });
  });

  //app.get("/", (req, res) => {
    //res.render("main", { layout: "main", title:"portfolio" });
  //})

  app.get("/birthday.html", (req, res) => {
    res.render("birthday.handlebars", { layout: "main", title:"portfolio" });
  });
  

//console.log(path.join(__dirname,"../public"));
//const staticPath =  path.join(__dirname, "../public");

// this will let us use the 

//app.get("/about" , (req ,res) => {
     //res.send("you are at the webiste");});
//app.get("/body", (req, res) => {
       // res.render("body", { layout: true }); 
     // });

app.listen(5002, () => {
    console.log("lisiting the port at 5002");

});



