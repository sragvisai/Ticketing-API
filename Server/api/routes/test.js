const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();
require('dotenv').config();

const server = express();
server.listen(9001,()=>console.log("Listening at 9k"));

const username = process.env.user;
const password = process.env.password;

const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;


router.get("/",function(abc,response,next){
    //console.log("Here"+password+username);
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