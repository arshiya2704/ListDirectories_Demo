import React, { Component } from 'react';
import * as API from './api/API';
import './api/API'
import  GridList from './Components/GridList'

class App extends Component {

    constructor() {
        super();
        this.state = {
            files: []
        };
    }

    showDir(){
        API.getDir().then((res) => {
            console.log("here"+res);
            this.setState({
               files: res
            });
        });
    }

    render() {
    return (
      <div className="App">
          <br/><br/>
          <center>
          <button className="btn btn-primary"  id="menu1" type="button" onClick={() => this.showDir()} >list directories</button>
          </center>
          <br/><br/>
          <GridList files={this.state.files}/>
      </div>
    );
  }
}

export default App;
