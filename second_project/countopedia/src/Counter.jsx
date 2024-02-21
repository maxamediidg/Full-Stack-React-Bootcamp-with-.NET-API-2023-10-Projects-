import React from "react";
import attack from "./images/attack.png";
import defence from "./images/defend.png";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
      gameStatus :"",
      lastPlay :"",
    };
  }

  handleAttack =()=> {
    //alert("Attack clicked");
    this.setState((PrevieousState) => {
      let newcount = PrevieousState.count + Math.round(Math.random() * 10);
      return {
        count:newcount,
        lastPlay:"attack",
        gameStatus : newcount>10? "You won!!":  PrevieousState.gameStatus,
      };
    });
 
  }



  handleDefence=()=> {
    //alert("Defend clicked");
    this.setState((PrevieousState) =>{

let newcount = PrevieousState.count - Math.round(Math.random() * 10);

      return {
        count: newcount,
        lastPlay:"Defense",
        gameStatus : newcount<-10? "You lost!!": PrevieousState.gameStatus,
      };
    })
  }

  handlerandomPlay =()=>{
    let playmode = Math.round(Math.random()); 
    if(playmode ==0){
      this.handleAttack();
    }else{
      this.handleDefence();
    }
   }

handleReset =()=>{
  this.setState(()=>{
return{
  count:0,
  gameStatus :"",
  lastPlay:"",
};
});
};



  render() { 
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count} </h1>
        <p>You win at +10 points and lost at -10 points</p>
        <p>Last play:{this.state.lastPlay} </p>
        <p>Game Status: {this.state.gameStatus} </p>
        <div className="col-6 col-md-3 offset-md-3">
          <img
           style={{width:"100%",
           cursor: "pointer",
           border: "1px solid green",
          }}
          className="p-4 rounded" src={attack}  onClick={this.handleAttack}
           />
        </div>
        <div className="col-6 col-md-3">
          <img
           style={{width:"100%",
           cursor: "pointer",
           border: "1px solid red",
          }}
          className="p-4 rounded" src={defence} onClick={this.handleDefence} 
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
  <button className="btn btn-secondary w-100 mt-2"
    onClick={this.handlerandomPlay}
    >
      Random Play
 </button><br />
  <button className="btn btn-warning w-100 mt-2"
  onClick={this.handleReset} >Reset</button>

        </div>
</div>
      );
      }
      }
