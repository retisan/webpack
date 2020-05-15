import React, { Component } from "react";
import reactDom from 'react-dom';
import Span from "@components/Span";

class Index extends Component {
    render() {
        return <div><Span></Span></div>;
    }
}

reactDom.render(<Index/>, document.body);
