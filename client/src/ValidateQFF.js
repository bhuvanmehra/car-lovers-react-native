import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Input, Button } from './components/common';

class ValidateQFF extends React.Component {
  state = {
    qff: '',
    lastName: '',
    dob: ''
  }

  handleQFF = (text) => {
    this.setState({ qff: text });
  }

  handleLastName = (text) => {
    this.setState({ lastName: text });
  }

  handleDOB = (text) => {
    this.setState({ dob: text });
  }

  handleSubmit = async () => {
    const { qff, lastName, dob } = this.state;
    console.log(`${qff} , ${lastName}, ${dob}`);
    const data = {
      dateOfBirth: dob,
      lastName: lastName,
      qff: qff,
    }
    // const result = await axios.post('http://localhost:3333/my/v1/accounts/ACC01_QPCC_PRIMARY_ACTIVE/additionalCardholders/validate', data);
    const result = await axios.post('https://api.uat.qlfs.io/my/v2/forms/EQQLHH916526/additionalCardholders/validate', data);
    if (result.status === 200) {
      alert('Success. StatusCode 200');
    } else {
      alert('Validation Failed. StatusCode ', result.status);
    }
  }

  render() {
    const { heading } = styles;

    return (
      <View style={styles.container}>
        <View>
          <Text style={heading}>
            Enter your additional cardholder's Frequent Flyer details
          </Text>
        </View>
        <View>
          <Input
            label="Membership number"
            value={this.state.qff}
            onChangeText={qff => this.setState({ qff })}
          />
          <Input
            label="Last name"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
          <Input
            placeholder=" DD / MM / YYYY"
            label="Date of birth"
            value={this.state.dob}
            onChangeText={dob => this.setState({ dob })}
          />
        </View>
        <Button onPress={this.handleSubmit}>
          NEXT
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    margin: 5,
    padding: 5,
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    marginBottom: 20,
  },
  buttonStyle: {
    padding: 10,
    border: 1,
  },
}

export default ValidateQFF;