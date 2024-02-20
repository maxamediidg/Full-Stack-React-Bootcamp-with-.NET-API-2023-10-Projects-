import React from "react";
import Student from "./components/student/Student";
import StudentReview from "./components/student/StudentReview";

class MainBody extends React.Component () {
  render(){
    const whatwillLearn = "react Js";
    const totalLecture = 3;

     return (
      <div style={{minHeight:"70vh"}}>
        <p style={{ color: "blueviolet", backgroundColor: "lightgray" }}>
          in this course, we will learn{whatwillLearn} by Building Taskopedia
        </p>
        <p>Total lecture - {totalLecture} </p>
        <ul>
          <li>Basic foundation</li>
          <li>Functional and class components</li>
        </ul>
        {/* <div>
          Enter Task:{""}
           <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div> */}
    <Student experience ={2}
     name="asma" 
     headshot="https://api.lorem.space/image/face?w=150&h=152">
        <StudentReview /></Student>
    
    <Student experience ={2} name="nadia" 
    headshot="https://api.lorem.space/image/face?w=150&h=151">
         <StudentReview /></Student>
    <Student  experience ={2} name="jamila" headshot="https://api.lorem.space/image/face?w=150&h=154"/>
      </div>
    );
      }
  }

  export default MainBody