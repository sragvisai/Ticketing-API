import nodeFetch, { RequestInfo, RequestInit } from "node-fetch";
const fetch = (url: RequestInfo, init?: RequestInit) =>  import("node-fetch").then(({ default: fetch }) => nodeFetch(url, init));

const username = 'nsragvi@gmail.com';
const password = 'Anasuya@97';
const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;

fetch('https://zccsragviletstry.zendesk.com/api/v2/tickets.json',{

    headers: {
        Authorization: authorization,
      },

}) 
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })

 