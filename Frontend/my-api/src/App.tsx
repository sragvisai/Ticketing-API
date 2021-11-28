import React, { useState, useEffect } from 'react';
import './App.css';
import axios, { AxiosResponse } from "axios";
import List from './List';
import Pagination from './pagination';
import IndividualData from './Individualdata';

function App2() {
  const [responseData, setResponseData] = useState([]);
  const [loading,setLoading] = useState(true);

  //as we are looking to start with the first page
  const [ currentPage, setCurrentPage] = useState(1);

  //setting the number of lists per page
  const [postsperPage , setpostsPerPage] = useState(25);

  //variables that help to display data about the selected request
  //setting the initial value to false as we need to show the whole list at firs render
  const [individualData , setindividualData] = useState(false);
  const [indvidual_index , setindvidual_index] = useState(-1);

  //to set error status , initially lets set that to false
  const [errorstatus , seterrorstatus] = useState(false);
  const[errormsg , seterrormsg] = useState('no error');

  //change page
  const paginate = (pageNumber : number) => setCurrentPage(pageNumber);
  const getback = (val : boolean) =>{
    setindividualData(val);
  }

  //sets the indexes for the item to be displayed
  const getdata = (index : number) =>{
    //set the value to true as we need to show details on a
    //specific ticket
    setindividualData(true);
    
    //setting the index of the requested ticket details
    setindvidual_index(index);
  }

  useEffect(() => {
    
    //we can set the loading to true
    setLoading(true);
    axios.get('http://localhost:9000/server')
  
      .then((response: AxiosResponse) => {
        //console.log("Response receieved"+response.data);
        return response.data;
      })

      .then(odata =>{
        setResponseData(odata);
      })

      //handling errors
      .catch((error) => {
        // Error
        seterrorstatus (true);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            seterrormsg('Observered an issue while retrieving data from server..please check your credentials and try again');
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the 
            // browser and an instance of
            seterrormsg('Some issue with the request being made..please check again');
        } else {
            // Something happened in setting up the request that triggered an Error
            seterrormsg('Unable to retrieve data please make sure you got everythin right');
        }
        // console.log(error.config);
      });
      
            
     setLoading(false);    
     
     //setting the dependency array to empty
  },[]);

  const indexoflast = currentPage * postsperPage ;
  const indexoffirst = indexoflast - postsperPage;

  //lets slice the data by taking the first and last index
  let currentPosts : string[] =  [];
  if(responseData!=null){
    currentPosts = responseData.slice(indexoffirst,indexoflast);
  }

  const check_ifallgood = () =>{
    
    if(errorstatus)
    return false;
    else{
      if(!responseData){
        seterrormsg("The response we got is nothing");
        return false;
      }
      
    }

    return true;
  }
  return (
    <div className="container mt-5">
      {check_ifallgood() && !individualData && <h1 className= "text-primary mb-3"> 
        Ticket Requests
      </h1>}
      {check_ifallgood() && individualData && <h1 className= "text-primary mb-3"> 
        Ticket Details
      </h1>}
    {loading && <h2>Loading....</h2>}
    {!check_ifallgood() && <h3 className = "text-error mb-3"> {errormsg} </h3>}
    {check_ifallgood() && !individualData && <List requests={currentPosts} loading ={loading} getdata ={getdata}></List>} 
    {check_ifallgood() && !individualData && <Pagination postsperPage={postsperPage} totalPosts={responseData.length} paginate={paginate}></Pagination>}
    {check_ifallgood() && individualData && <IndividualData index ={indvidual_index} home = {getback} data ={responseData} ></IndividualData>} 
    </div>
  );
}

export default App2;
