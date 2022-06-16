import { Component } from "react";
import LotteryBall from "./LotteryBall";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  handle = () => {
    const tempArr = [];

    for (let i = 0; i < this.props.maxBalls; i++) {
      const max = Math.floor(Math.random() * this.props.maxNum) + 1;
      tempArr.push(max);
    };

    this.setState({ randomNumbebrs: tempArr })
  };

  componentDidMount(){
    this.handle()
  }

  state = {
    maxNum: 40,
    randomNumbebrs: [],
  };
  //   handle = (e) => {
  //     const max = Math.floor(Math.random() * this.props.maxNum);
  //     this.setState({ maxNum: max });
  //   };
  render() {
    
    return (
      <div className="main-body">
        <h1>{this.props.title}</h1>
        {
            this.state.randomNumbebrs.map((randomNumber, index) => <LotteryBall num={randomNumber} key={index}/>)
        }
        <br />
        <br />
        <button className="button" onClick={this.handle}>Feeling Lucky!?</button>
      </div>
    );
  }
}

export default Lottery;
