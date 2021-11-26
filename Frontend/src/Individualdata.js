const IndividualData = (props) => {
    const index = props.index;
    const home = props.home;
    const data = props.data;
    //getting the required object to display
    const requiredata = data[index-1];

    //there are some requests where the priority is null
    //so setting the value to not-set
    if(requiredata.priority == null)
    requiredata.priority = 'not set';

    return (
        <div className="info">
            <p>
                Subject : {data[index - 1].subject}
            </p>
            <p>
                Description : {requiredata.description}
            </p>
            <p>
                Priority : {requiredata.priority}
            </p>
            <p>
                Status : {requiredata.status}
            </p>

            <button onClick = {() => home(false)}>HOME</button>
        </div>

    )
}

export default IndividualData;