import React, { Component } from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";
import { without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: false,
      lastIndex: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }
  deleteAppointment(apt) {
    let temApts = this.state.myAppointments;
    temApts = without(temApts, apt);

    this.setState({
      myAppointments: temApts
    });
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myAppointments: apts
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="dentistry">
        <div className="container">
          <div className="col-md-12 bg-white">
            <div className="container">
              <AddAppointments formDisplay={this.state.formDisplay} />
              <SearchAppointments />
              <ListAppointments
                appointments={this.state.myAppointments}
                deleteAppointment={this.deleteAppointment}
              />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
