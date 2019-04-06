import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
 
  reverse = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField hintText="Enter City Name"
            floatingLabelText="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField hintText="Enter State"
            floatingLabelText="State"
            onChange={handleChange('currentState')}
            defaultValue={values.currentState}
          />
          <br/>
          <TextField hintText="Enter Bio"
            floatingLabelText="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            multiLine={true}
          />
          <br/>
          <RaisedButton
            label="Continue"
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


export default FormPersonalDetails