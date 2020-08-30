import React from "react";

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="suggestion">
                <div class="title">{this.props.key}</div>
                <div class="photo"/>
            </div>
        )
    }
}

export default Suggestion;