import React from 'react';
import { View , Text, Picker } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Query } from 'react-apollo';
import { Actions } from 'react-native-router-flux';
import query from '../queries/fetchCarMakes';

class Search extends React.Component {
  state = {
    selectedMake : '',
    selectedModel : '',
  };

  renderMakes = (AllMakes) => AllMakes.map((obj) => <Picker.Item  key={obj.name} label={obj.name} value={obj.name} />);

  modelOptionItems(AllMakes){
    const { selectedMake } = this.state;

    if( selectedMake === '') return <Picker.Item label='' value='' />;

    let carModelOptions = AllMakes.find(make => make.name === selectedMake);
    return(carModelOptions.models.map((carModel) => <Picker.Item key={carModel.name} label={carModel.name} value={carModel.name} />));
  }

  updateMake = (make) => {
    this.setState({ selectedMake: make })
  }

  updateModel = (model) => {
    this.setState({ selectedModel: model })
  }

  onSubmit = (AllMakes) => {
    const { selectedMake, selectedModel } = this.state;

    if ( selectedModel === '' || selectedMake === '') return;
    let carModels = AllMakes.find(make => make.name === selectedMake);
    let carModel = carModels.models.find(model => model.name === selectedModel);
    Actions.carShow({ id: carModel.id });
  }

  render() {
    const { selectedMake, selectedModel } = this.state;
    const { textStyle } = styles;

    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <View><Text style={textStyle}>Loading...</Text></View>;
          if (error) return <View><Text style={textStyle}>Sorry something went wrong. Please try again.</Text></View>;

          return (
            <Card>
              <CardSection>
                <Text style={styles.pickerTextStyle}>Please select a car</Text>
              </CardSection>
              <CardSection>
                <Picker
                  style={{ flex: 1 , color: '#DADADA' }}
                  itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
                  itemTextStyle={{ fontSize: 18, color: 'white' }}
                  selectedValue = {selectedMake} onValueChange = {this.updateMake}
                >
                  <Picker.Item label='Please select' value='Please select' />
                  {this.renderMakes(data.AllMakes)}
                </Picker>
              </CardSection>
              <CardSection>
                <Picker
                  style={{ flex: 1, color: '#DADADA' }}
                  itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
                  itemTextStyle={{ fontSize: 18, color: 'white' }}
                  selectedValue = {selectedModel} onValueChange = {this.updateModel}
                >
                  <Picker.Item label='Please select' value='Please select' />
                  {this.modelOptionItems(data.AllMakes)}
                </Picker>
              </CardSection>
              <CardSection>
                <Button
                  onPress = {() => this.onSubmit(data.AllMakes)}
                  disabled={selectedModel === ''}
                >
                  Search
                </Button>
              </CardSection>
            </Card>
          );
        }}
      </Query>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  textStyle: {
    color: '#DADADA',
  },
};

export default Search;
