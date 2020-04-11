import "@babel/polyfill";
import React, { Component }  from "react";
import ReactDom from "react-dom";

class App extends Component {
    render() {
        return <div className="app">hello</div>
    }
}

ReactDom.render(<App />, document.getElementById("root"));
