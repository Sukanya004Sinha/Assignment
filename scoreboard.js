let request= require("request");
let cheerio= require("cheerio");
let path = require("path");
const {fstat}=require("fs");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
request(url, cb)
function cb(err, response, html) {
    if(error){
        console.log(error);
    }
    else{
        extractAllMatchPageLink(html);
    }
}
function extraplayerDetails(html){

    let selTool = cheerio.load(html);
    let detailsElem = selTool(".event .match-info.match-info-MATCH .description");
    let detailText= detailElem.text();
    //console.log(detailText);
    let detailArr= detailText.split(",");
    let venue= detailsArr[1].trim();
    let date= detailsArr[2].trim();
    
    console.log(venue);
    console.log(date);
     let resultelem =selTool(".event .match-info.match-info-MATCH .status-text");
     let result = resultElem.text();
     console.log(result);
     let NameofTeams = selTool(" .Collapsible h5");
     let BatmanTableofTeams= selTool("collapsible .table.batsman");
     for(let i=0;i<NameofTeams.length;i++){
         let cteamName = selTool(NameofTeams[i]).text();
     let allRowsofCurrentTeam = (BatsmanTableofTeams[i]).find("tbody tr");
         for(let j=0;j<allRowsofCurrentTeam.length;j++){
             let allcols = (allRowsofCurrentTeam[j].find)("td");
             if(allcols.length==8){
                 let myTeamName = selTool(cteamName[i]).text().split("INNINGS")[0];
                 myTeamName = myTeamName.trim();
                 let opponentTeamName = i ==0? selTool(cteamName[i]).text() :selTool(cteamName[0]).text();
                 opponentTeamName = opponentTeamName.split("INNINGS")[0].trim();
                  let name = selTool(allcols[0]).text();
                  let runs = selTool(allcols[2]).text();
                  let balls = selTool(allcols[3]).text();
                  let fours = selTool(allcols[5]).text();
                  let sixes = selTool(allcols[6]).text();
                  let sr = selTool(allcols[7]).text();
            console.log(`teamName ${myTeamName} playerName ${name} venue ${venue} Date ${date}
            opponent $(opponentTeamName) result ${result} runs ${runs} ${balls} ${fours} ${sixes}
            ${sr}`);
            console.log("```````````````````````````````````````````");
         
        
     }

     }
    }
}
function processPlayer(myTeamName, name, venue,date,opponentTeamName,result,runs,balls,fours,sixes,sr);
let folderPath = path.join(_dirname,"ipl", myTeamName);

let content =[];
let filePath = path.join(folderPath, name +".json");
if(fs.existsSync(filePath)){
    let buffer = fs.readFileSync(filePath);
    content= JSON.parse(buffer);
    let matchobj = { myTeamName, name, venue,date,opponentTeamName,result,runs,balls,fours,sixes,sr

    }
    fs.writeFileSync(filePath,JSON.stringify(content));
    content.push(matchobj);
}

function dirCreator(folderPath){
    if(fstat.existsSync(folderPath)==false){
        fstat.mkdirSync(folderPath);
    }    }
