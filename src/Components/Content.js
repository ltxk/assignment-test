function Content(props) {
    if(props.title)
    {return (
        <div className="Content">{props.title}</div>
    )
    }
    return (<p className="Content">That's all the jokes for today! Come back another day!</p>) ;
  }
  
  export default Content;