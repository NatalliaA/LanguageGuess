//detect language code
const franc = require('franc');
//get language fullname
const langs = require('langs');
//output in colors
const colors = require('colors');

const input = process.argv[2];
const langShort = franc(input);
try
{
    const langFull = langs.where('3', langShort).name;
    console.log(("Language code: " + langShort).yellow);
    console.log(("Best guess: " + langFull).green);    
}
catch(err) 
{
    console.log("Language is not defined. Type a longer sample.".red);
    //console.log(err);
}

/* console.log("Language short: " + langShort);
if (langShort === "und")
{console.log("Language is not defined. Type a longer sample.");}
else
{
    const langFull = langs.where('3', langShort).name;
    if(langFull !== undefined)
    {console.log("Best guess:" + langFull);}
    else {console.log("Language is not defined");}
}
  */