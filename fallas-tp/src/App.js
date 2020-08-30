import React from 'react';
import './App.css';
import OptionPage from "./OptionPage";
import Suggestion from "./Suggestion";

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            appetite: {
                options: ["Bajo", "Medio", "Alto"],
                selected: null,
                title: "Apetito"
            },
            time: {
                options: ["Bajo", "Medio", "Alto"],
                selected: null,
                title: "Tiempo"
            },
            budget: {
                options: ["Bajo", "Medio", "Alto"],
                selected: null,
                title: "Presupuesto"
            },
            skill: {
                options: ["Amateur", "Profesional"],
                selected: null,
                title: "Habilidad"
            },
            suggestion: "",
            stepPosition: 0,
            steps: null
        };
        this.state.steps = [this.state.appetite, this.state.time, this.state.budget, this.state.skill]
    }

    requestSuggestion = () => {


        fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appetite: this.state.appetite.selected !== null ? this.state.appetite.options.indexOf(this.state.appetite.selected) + 1 : null,
                time: this.state.time.selected !== null ? this.state.time.options.indexOf(this.state.time.selected) + 1 : null,
                budget: this.state.budget.selected !== null ? this.state.budget.options.indexOf(this.state.budget.selected) + 1 : null,
                skill: this.state.skill.selected !== null ? this.state.skill.options.indexOf(this.state.skill.selected) + 1 : null
            })
        });
    };

    nextQuestion = (value) => {
        let step = this.state.steps[this.state.stepPosition];
        step.selected = value;
        this.setState({stepPosition: this.state.stepPosition + 1});
        this.requestSuggestion();
    };

    showSuggestion = () => {
        return <Suggestion key={this.state.suggestion}/>
    };


    render() {
        return (
            <OptionPage step={this.state.steps[this.state.stepPosition]} onNextClick={this.nextQuestion} suggestion={this.state.suggestion}
                        onSuggestionClick={this.showSuggestion} stepPosition={this.state.stepPosition}/>
        );
    }
}

export default App;