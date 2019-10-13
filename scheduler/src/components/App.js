import React, { Component } from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myName: "Zoe"
    };
  }
  render() {
    return (
      <main className="page bg-white" id="dentistry">
        <div className="container">
          <div className="col-md-12 bg-white">
            <div className="container">
              {this.state.myName}
              <AddAppointments />
              <SearchAppointments />
              <ListAppointments />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
