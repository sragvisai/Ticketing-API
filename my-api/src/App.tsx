import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from "./interfaces";
import axios, { AxiosResponse } from "axios";
import express, { response } from 'express';
import cors from 'cors';
import ReactDOM from 'react-dom';
import List from './List';


const username = 'nsragvi@gmail.com';
const password = 'Anasuya@97';
const encodedBase64Token = Buffer.from(`${username}:${password}`).toString('base64');
const authorization = `Basic ${encodedBase64Token}`;


// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const lst: any[] = [];
let desc: string[] = [];
const populateData = (data: any) => {
  lst.push(data);
  //console.log(lst[0].count);
}
const adddes = (data: any) => {
  for (let i = 0; i < Number(10); i++) {
    console.log('hi');
    desc.push(data[i].description);
  }


}

let count = 0;
function App() {
  //const count = 0;
  const [responseData, setResponseData] = React.useState(null);
  let [responseCount, setResponseCount] = React.useState('');


  useEffect(() => {
    //async function getdata() {
      
    console.log("Inside the getdata");
    axios.get('https://zccsragviletstry.zendesk.com/api/v2/tickets.json', {
      headers: {
        Authorization: authorization,
      },
    })
  
      .then((response: AxiosResponse) => {

        // console.log('clear');
        // console.log('response', response.data);
        // populateData(response.data);
        // console.log('count', response.data.count);
        // //lets store the # of tickets being retrieved
        // setResponseCount(response.data.count);

        // //lets store the tickets
        // setResponseData(response.data.tickets);

        // //const count = response.data.count;
        // console.log('hello' + JSON.stringify(responseData));
        // console.log("Type" + typeof (response.data.tickets[0].description));
        // adddes(response.data.tickets);
        // //console.log('Response ticket'+resp);
        return response.data;
      })
      .then(odata =>{
        //trying passing the array here itself
        setResponseData(odata.tickets);
        //console.log(responseData);
      });
  },[]);


  //for(let i = 0 ; i <Number( responseCount) ; i++){
  //console.log('hi');
  //desc.push(responseData.tickets[i].description)
  //}
  // const list = responseData.map((responseData) => 
  // <li>{responseData}</li>
  // )
  // ReactDOM.render(
  //   <p>Hello</p> , 
  //   document.getElementById('root')
  // // );
  // const SkipAny: string [] = responseData[0];

  //plan is to create string arrays to store the descriptions and subject every single object

  return (
    <div className="App">
       {/* <header className="App-header">
        {<h1 >  We have a total of #{count} tickets being retrieved
        </h1>}
        <p>Hello</p>
        <ul>
        <li key = {desc.toString()}>
                Here {desc}
              </li>
        </ul>
      </header>  */}

    {responseData && <List requests={responseData}></List>}    
    </div>
  );
}

export default App;
