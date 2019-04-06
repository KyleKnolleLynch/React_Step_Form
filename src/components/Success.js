import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {


  render() {
    const { values: {firstName}} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success!" />
          <h2>Congratulations {firstName}, you have successfully signed up.</h2>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


  

export default Success;