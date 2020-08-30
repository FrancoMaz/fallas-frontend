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

    showSuggestionButton = () => {
        if (this.props.suggestion !== "") {
            return <button className="suggestion-button" onClick={this.props.onSuggestionClick}>Consultar sugerencia</button>
        }
        return "";
    };

    render() {
        let options = this.props.step.options;
        let title = this.props.step.title;
        let onNextClick = this.props.onNextClick;
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
                <button className="next-button" onClick={() => onNextClick(this.state.selectedOption)}>Siguiente</button>
                {this.showSuggestionButton}
            </div>

        );
    }
}

export default OptionPage;