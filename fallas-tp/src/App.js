import React from 'react';
import './App.css';
import OptionPage from "./OptionPage";

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            appetite: {
                options: ["Bajo", "Medio", "Alto"],
                selected: "Bajo",
                title: "Apetito"
            },
            time: {
                options: ["Bajo", "Medio", "Alto"],
                selected: "Bajo",
                title: "Tiempo"
            },
            budget: {
                options: ["Bajo", "Medio", "Alto"],
                selected: "Bajo",
                title: "Presupuesto"
            },
            skill: {
                options: ["Amateur", "Profesional"],
                selected: "Amateur",
                title: "Habilidad"
            },
            suggestion: "",
            stepPosition: 0,
            steps: null
        };
        this.state.steps = [this.state.appetite, this.state.time, this.state.budget, this.state.skill]
    }

    nextQuestion = (value) => {
        let step = this.state.steps[this.state.stepPosition];
        step.selected = value;
        this.setState({stepPosition: this.state.stepPosition + 1});
    };


    render() {
        return (
            <OptionPage step={this.state.steps[this.state.stepPosition]} onClick={this.nextQuestion}/>
        );
    }
}

export default App;