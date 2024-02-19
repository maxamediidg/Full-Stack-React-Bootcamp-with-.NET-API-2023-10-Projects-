const Student = (props) =>{
  return (
    <div className="col-4 p-1">
      <div className="row">Student Enrolled </div>
      <div className="row border">
        <div className="col-2">
          <img src={props.headshot} className="w-100" py-2></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coding Expreirence{props.experience} Years
        </div>
        <div className="col-2">{props.children}</div>
      </div>
    </div>
  );
}

export default Student;
