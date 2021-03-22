let request= require("request");
let cheerio= require("cheerio");
let path = require("path");
const {fstat}=require("fs");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
function processAllMatch(url){

    request(url, cb)
    function cb(err, res, html) {
        if(err){
            console.log(err);
        }
        else{
            extractAllScorecardLink(html);
        }
    }
}
function extractAllScorecardLink(html){

    let selTool = cheerio.load(html);
    let scorecardlinkArr = selTool(".a[data-hover-'Scorecard']");
    for(let i=0;i<scorecardLinkArr.length;i++){
        let link = seltool(scorecardlinkArr[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link
    console.log(fullLink)
    }
}
module.exports = {
    pam: processAllMatch
}