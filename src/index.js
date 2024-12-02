const express = require("express");
const path =  require("path");
const app = express();

//console.log(__dirname);

//console.log(path.join(__dirname,"../public"));
const staticPath =  path.join(__dirname, "../public");



// this will let us use the 
app.use(express.static(staticPath));

app.get("/about" , (req ,res) => {
     res.send("you are at the webiste");
});

app.get("/name" , (req ,res) => {
    return res.send('hi');
});

app.listen(5001, () => {
    console.log("lisiting the port at 5001");

});



