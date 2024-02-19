import logo from "../images/react.png";

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }}></img>
      <span className="h2 pt-4 text-white-50">React Course - TaskOpedia</span>
    </div>
  );
}

const subheaderstyle = {
  color: "black",
  backgroundColor: "black",
};

function SubHeader() {
  return (
    <h1 style={{ subheaderstyle }} className="heading1">
      this will be an exciting course
    </h1>
  );
}

const Header =()=> {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

export default Header;
