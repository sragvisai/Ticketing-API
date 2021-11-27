const fetch = require('node-fetch');
var express = require('express');
//var server_work = require('./functioncalls.js');
var router = express.Router();
require('dotenv').config();

const server = express();
server.listen(9001, () => console.log("Listening at 9k"));

// const username = process.env.user;
// const password = process.env.password;

// const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
// const authorization = `Basic ${encodedBase64Token}`;



// router.get("/", function (abc, response, next) {
//     const fetchers = fetch("https://zccsragviletstry.zendesk.com/api/v2/tickets.json", {
//         headers: {
//             Authorization: authorization
//         },
//     })
//         .then((res) => res.json())
//         .then((res) => {
//             const fetchdata = res;
//             response.send(fetchdata.tickets);
//         });


// });

const username = process.env.user;
const password = process.env.password;

const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;

function server_work(req,response){
    const fetchers = fetch("https://zccsragviletstry.zendesk.com/api/v2/tickets.json", {
        headers: {
            Authorization: authorization
        },
    })
        .then((res) => res.json())
        .then((res) => {
            const fetchdata = res;
            response.send(fetchdata.tickets);
        });
}

router.get("/",server_work);
module.exports = router;