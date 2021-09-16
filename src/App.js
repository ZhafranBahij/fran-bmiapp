// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Bmi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      bmiValue: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.rankOfWeightness = this.rankOfWeightness.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    let { height, weight, bmiValue } = this.state;
    bmiValue = weight / Math.pow(height / 100, 2);
    let weightness = this.rankOfWeightness(bmiValue);
    alert(`BMI Value: ${bmiValue} \nRank: ${weightness}`);
    event.preventDefault();
  }

  rankOfWeightness(num) {
    if (num < 18.5) {
      return "Under Weight";
    } else if (num < 25) {
      return "Normal Weight";
    } else if (num < 30) {
      return "Overweight";
    } else if (num < 40) {
      return "Obesity";
    } else {
      return "Morbid Obesity";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="mb-3">
          <label for="height" class="form-label">
            Height in cm
          </label>
          <input
            type="number"
            name="height"
            class="form-control"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="weight" class="form-label">
            Weight in kg
          </label>
          <input
            type="number"
            name="weight"
            class="form-control"
            id="weight"
            value={this.state.weight}
            onChange={this.handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function App() {
  return <Bmi />;
}

export default App;
