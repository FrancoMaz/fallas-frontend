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
            step: null
        };
        this.state.step = this.state.appetite;
    }

    nextQuestion = (value) => {
        let step = this.state.step;
        step.selected = value;
        this.setState({step: this.state.time})
    };


    render() {
        return (
            <OptionPage step={this.state.step || this.state.appetite } onClick={this.nextQuestion}/>
        );
    }
}

export default App;
