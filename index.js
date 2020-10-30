const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//detect language code
const franc = require('franc');
//get language fullname
const langs = require('langs');
//output in colors
const colors = require('colors');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let userinput = "";
let guess = "";
let err = "";


app.get("/", function(req, res){
   res.render("home", {userinput: userinput, guess: guess, err:err});
});

app.post("/guess", function(req, res){
    userinput = "Your text: " + req.body.inputText;
    console.log(userinput);
    const langShort = franc(userinput,  {minLength: 3});
try
{
    const langFull = langs.where('3', langShort).name;
    console.log(("Language code: " + langShort).yellow);
    console.log(("Best guess: " + langFull).green); 
    guess = "Our best guess: " + langFull; 
    err="";
}
catch(e) 
{
    err = "Sorry, we could not guess. Type a longer sample.";
    guess="";
    console.log(err.red);
}
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Serving languege guess on port 3000");
});

