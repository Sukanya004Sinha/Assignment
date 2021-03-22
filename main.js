let request= require("request");
let cheerio= require("cheerio");
let path = require("path");
let allMatchobj = require("./AllMatch");
let folderPath=path.join(_dirname, folderName);
let fs = require("fs");
dirCreator(folderPath);

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"
request (url,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        extractAllMatchPageLink(html);
    }
}
console.log("Inside main");
console.log("''''''''''''''''''''''''''");
function extractAllMatchPageLink(html){
    let selTool = cheerio.load(html);
    let nextPageAnchor= selTool(".widget.items.cta-link a");
    let link = nextPageAnchor.attr("href");
    let fullLink = "https://www.espncricinfo.com" + link
    allMatches.pam(fullLink)

}
function dirCreater(folderPath){

}