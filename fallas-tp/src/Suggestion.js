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
                <div className="link-container">
                    <a className="link" href={this.props.food.link} target="_blank">Link a receta</a>
                </div>
                <img className="image" src={require('./images/' + this.props.food.file)}/>
            </div>
        )
    }
}

export default Suggestion;