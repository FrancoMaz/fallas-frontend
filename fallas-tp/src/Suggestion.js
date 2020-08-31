import React from "react";
import './Suggestion.css';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="suggestion">
                <div className="title">{this.props.food.title}</div>
                <img src={require('./images/' + this.props.food.file)} />
            </div>
        )
    }
}

export default Suggestion;