const { response, json } = require("express");
const fetch = require('node-fetch');
var express = require('express');
const app = require("../app");
var router = express.Router();


const server = express();
server.listen(9001,()=>console.log("Listening at 9k"));

const username = 'nsragvi@gmail.com';
const password = 'Anasuya@97';
const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;

//app.listen();
// router.get("/", function(req,res,next){
//     res.send("Api is working properly");
// });
router.get("/",function(abc,response,next){
   const fetchers = fetch("https://zccsragviletstry.zendesk.com/api/v2/tickets.json",{
        headers: {
                    Authorization: authorization
                },
    })
        .then((res) => res.json())
        .then((res) =>{

            const fetchdata = res;
            //console.log(fetchdata.tickets);
            response.send(fetchdata.tickets);
        });

        console.log("Fetchers"+JSON.stringify(fetchers));
        
        
    });

module.exports = router;