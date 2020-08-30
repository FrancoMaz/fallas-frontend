import React from 'react';
import './OptionPage.css';

class OptionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: this.props.step.options[0]
        }
    }

    handleOptionChange = (value) => {
        this.setState({selectedOption: value})
    };

    render() {
        let options = this.props.step.options;
        let title = this.props.step.title;
        let onClick = this.props.onClick;
        return (
            <div className="options">
                <div className="title">{title}</div>
                {options.map(option => {
                    return (
                        <div key={option} className="column">
                            <label>{option}</label>
                            <input type="radio" name={title} value={option}
                                   checked={this.state.selectedOption === option}
                                   onChange={() => { this.handleOptionChange(option)}}/>
                        </div>
                    )
                })}
                <button className="next-button" onClick={() => onClick(this.state.selectedOption)}>Siguiente</button>
            </div>

        );
    }
}

export default OptionPage;