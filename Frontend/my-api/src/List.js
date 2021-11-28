const List = (props) => {

  const responseData = props.requests;
  const loading = props.loading;
  const getdata = props.getdata;

  
  //console.log("Inside the list.js" + (props) + JSON.stringify(responseData));

  return <ul aria-label="ls" className="list-group mb-4">
    {
      responseData.map((data) => (
        <li className="list-group-item" key={data.id}>

            <a onClick={() => getdata(data.id)}  className="page-link">
              {data.subject}
            </a>
          </li>
          )
    )}
        </ul>
}

    export default List;