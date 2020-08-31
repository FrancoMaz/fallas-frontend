import React from 'react';
import './OptionPage.css';
import Suggestion from "./Suggestion";

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
        if (this.props.suggestion.title !== "" && this.props.file !== "") {
            return <button className="suggestion-button" onClick={() => this.props.onSuggestionClick()}>Consultar sugerencia</button>
        }
        return "";
    };

    showNextButton = () => {
        let onNextClick = this.props.onNextClick;
        if (this.props.stepPosition < 3) {
            return <button className="next-button"
                           onClick={() => onNextClick(this.state.selectedOption)}>Siguiente</button>
        }
        return "";
    };

    showSuggestion = () => {
      if (this.props.showSuggestion) {
          return <Suggestion food={this.props.suggestion}/>
      }
    };

    showOptions = () => {
        if (this.props.stepPosition <= 3) {
            let options = this.props.step.options;
            let title = this.props.step.title;
            return (
                <div className="optionsGiven">
                    <div className="title">{title}</div>
                    <div className="options">
                        {options.map(option => {
                            return (
                                <div key={option} className="option">
                                    <label>{option}</label>
                                    <input type="radio" name={title} value={option}
                                           checked={this.state.selectedOption === option}
                                           onChange={() => {
                                               this.handleOptionChange(option)
                                           }}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="buttons">
                        {this.showNextButton()}
                        {this.showSuggestionButton()}
                    </div>
                </div>
            )
        }
        return "";
    };

    render() {

        return (
            <div className="optionPage">
                {this.showOptions()}
                {this.showSuggestion()}
            </div>

        );
    }
}

export default OptionPage;