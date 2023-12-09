import { Component } from "react";
import "./App.css";
import { CommonContext } from "./Component/CommonContext";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main from "./Component/Main";
import UpdateButton from "./Component/UpdateButton";

class App extends Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "pink",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <div className="App">
        <CommonContext.Provider value={this.state}>
          <Header />
          <br />
          <br />
          <br />
          <h1>COmplete and easy example for Context API</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Main />
          <br />
          <br />
          <br />
          <UpdateButton />

          <Footer />
        </CommonContext.Provider>
      </div>
    );
  }
}

export default App;
