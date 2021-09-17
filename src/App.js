// import logo from "./logo.svg";
import React from "react";
import "./";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Bmi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      bmiValue: 0,
      textWeightness: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.rankOfWeightness = this.rankOfWeightness.bind(this);
  }

  handleChange(event) {
    let result = event.target.value;
    if (result < 0) {
      alert("Please, input a positive integer number!");
      return;
    }
    this.setState({ [event.target.name]: result });
  }

  handleSubmit(event) {
    let { height, weight, bmiValue } = this.state;

    bmiValue = weight / Math.pow(height / 100, 2);
    let weightness = this.rankOfWeightness(bmiValue);
    this.setState({
      textWeightness: (
        <div class="card  bg-black text-white">
          {" "}
          <h4>{weightness}</h4>
          <p>Result of BMI: {bmiValue}</p>
        </div>
      ),
    });
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
      <div>
        <h1 class="text-white mb-5">Body Mass Index</h1>
        <div class="main-card">
          <div class="card mb-5 bg-black text-white">
            <form onSubmit={this.handleSubmit}>
              <div class="mb-3">
                <label for="height" class="form-label">
                  Height in cm
                </label>
                <input
                  required
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
                  required
                  type="number"
                  name="weight"
                  class="form-control"
                  id="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div class=" text-center">
                <button
                  type="submit"
                  class="btn btn-secondary justify-content-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {this.state.textWeightness}
        </div>
      </div>
    );
  }
}

function App() {
  return <Bmi />;
}

export default App;
