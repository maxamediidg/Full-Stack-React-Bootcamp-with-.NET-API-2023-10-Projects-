import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Header() {
  return <h1 style={{color:"blue"}}>React Course</h1>;
}

function Footer() {
  return <p>Happy Coding</p>;
}

function MainBody() {
  return (
    <div>
      <p>in this course, we will learn react js by Building Taskopedia</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to walmert</li>
      </ul>
    </div>
  );
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);
 