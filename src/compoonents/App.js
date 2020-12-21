import React, {Component} from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {

  constructor() {
    super(); //this method allows us to get information from parent component by using "this" keyword
    this.state = {
      myName: "Chase Parker"
    }
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myName}
                <AddAppointments/>
                <SearchAppointments/>
                <ListAppointments/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
