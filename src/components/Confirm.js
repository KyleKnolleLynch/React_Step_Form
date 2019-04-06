import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem }from 'material-ui/List';




export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
      //  PROCESS FORM/SUBMIT DATA TO DATABASE  //
    this.props.nextStep();
  }
 
  reverse = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, company, email, city, currentState, bio }} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Comfirm Data is Correct" />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={ firstName }
            /> 
            <ListItem
              primaryText="Last Name"
              secondaryText={ lastName }
            /> 
            <ListItem
              primaryText="Company"
              secondaryText={ company }
            /> 
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            /> 
            <ListItem
              primaryText="City"
              secondaryText={ city }
            /> 
            <ListItem
              primaryText="State"
              secondaryText={ currentState }
            /> 
            <ListItem
              primaryText="Bio"
              secondaryText={ bio }
            /> 
          </List>
          <br/>
          <RaisedButton
            label="Confirm and Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            secondary={true}
            style={styles.button}
            onClick={this.reverse}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}


const styles = {
  button: {
    margin: 15,
   }
}


export default Confirm;