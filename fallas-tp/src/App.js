import React from 'react';
import './App.css';
import OptionPage from "./OptionPage";

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
            suggestion: {
                title: "",
                file: ""
            },
            stepPosition: 0,
            steps: null,
            possibleSuggestions: [{key: "Omellette", name: "Omelette de atún", file: "omelette.jpeg"}, {key: "Pollo", name: "Pollo", file: "pollo.jpeg"},
                {key: "Milanesa", name: "Milanesa de carne", file: "milanesa.jpg"}, {key: "Noquis", name: "Ñoquis de papa", file:"noquis.jpg"},
                {key: "Tarta", name: "Tarta de espinaca", file: "tarta.png"}],
            showSuggestion: false
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
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                let sug;
                this.state.possibleSuggestions.forEach(suggestion => {
                    if (suggestion.key === response.suggestion) {
                        sug = suggestion;
                    }
                });
                this.setState({suggestion: {title: sug.name, file: sug.file} });
            })
    };

    nextQuestion = (value) => {
        let step = this.state.steps[this.state.stepPosition];
        step.selected = value;
        this.setState({stepPosition: this.state.stepPosition + 1, showSuggestion: false});
        this.requestSuggestion();
    };

    showSuggestion = () => {
        this.setState({showSuggestion: true})
    };


    render() {
        return (
            <OptionPage step={this.state.steps[this.state.stepPosition]} onNextClick={this.nextQuestion} suggestion={this.state.suggestion}
                        onSuggestionClick={this.showSuggestion} stepPosition={this.state.stepPosition} showSuggestion={this.state.showSuggestion}/>
        );
    }
}

export default App;