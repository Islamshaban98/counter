import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSync } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "./fonts/Roboto-Regular.ttf";
import IncrementButton from "./components/incrementButton";
import DecrementButton from "./components/decrementButton";

class App extends React.Component {
  state = {
    counter: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    decrementEnabled: true,
  };
  increment = (counterNum) => {
    this.setState((prevState) => {
      const newCounter = prevState[counterNum] + 1;
      return {
        [counterNum]: newCounter,
        decrementEnabled: true,
        counter: prevState.counter + 1,
      };
    });
  };
  decrement = (counterNum) => {
    this.setState((prevState) => {
      console.log(prevState);
      if (prevState[counterNum] > 0) {
        const newCounter = prevState[counterNum] - 1;
        return { [counterNum]: newCounter };
      }
      return { decrementEnabled: false };
    });
  };

  refresh = () => {
    this.setState(() => {
      return { counter: 0, counter1: 0, counter2: 0, counter3: 0, counter4: 0 };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="headDiv">
          <FontAwesomeIcon icon={faShoppingCart} color="black" />
          <div className="itemsDiv">
            {this.state.counter <= 4 ? this.state.counter : 4}
          </div>
          <p style={{ fontFamily: "Roboto" }}>items</p>
        </header>
        <button className="refreshButton" onClick={this.refresh}>
          <FontAwesomeIcon icon={faSync} color="white" />
        </button>
        <div className="buttonDiv">
          {this.state.counter1 === 0 ? (
            <div className="zeroDiv"> Zero </div>
          ) : (
            <div className="countDiv">{this.state.counter1}</div>
          )}
          <IncrementButton increment={this.increment.bind(this, "counter1")} />
          <DecrementButton
            disabled={!this.state.decrementEnabled}
            decrement={this.decrement.bind(this, "counter1")}
          />
        </div>
        <div className="buttonDiv">
          {this.state.counter2 === 0 ? (
            <div className="zeroDiv"> Zero </div>
          ) : (
            <div className="countDiv">{this.state.counter2}</div>
          )}
          <IncrementButton increment={this.increment.bind(this, "counter2")} />
          <DecrementButton
            disabled={!this.state.decrementEnabled}
            decrement={this.decrement.bind(this, "counter2")}
          />
        </div>
        <div className="buttonDiv">
          {this.state.counter3 === 0 ? (
            <div className="zeroDiv"> Zero </div>
          ) : (
            <div className="countDiv">{this.state.counter3}</div>
          )}
          <IncrementButton increment={this.increment.bind(this, "counter3")} />
          <DecrementButton
            disabled={!this.state.decrementEnabled}
            decrement={this.decrement.bind(this, "counter3")}
          />
        </div>
        <div className="buttonDiv">
          {this.state.counter4 === 0 ? (
            <div className="zeroDiv"> Zero </div>
          ) : (
            <div className="countDiv">{this.state.counter4}</div>
          )}
          <IncrementButton increment={this.increment.bind(this, "counter4")} />
          <DecrementButton
            disabled={!this.state.decrementEnabled}
            decrement={this.decrement.bind(this, "counter4")}
          />
        </div>
      </div>
    );
  }
}

export default App;
