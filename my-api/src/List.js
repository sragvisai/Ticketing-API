const List = (props) => {

    const responseData = props.requests;
    console.log("Inside the list.js" + (props) + JSON.stringify(responseData));
    return (
        <div className = " here">
             {
      responseData.map( (data) =>(
        <div className = "preview" key = {data.id}>
          <h2>
            {data.subject}
          </h2>
          <p>Raised by</p>
        </div>
      )
    )}  
        </div>
    );
}

export default List;