import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { View , Text, Image, Modal } from 'react-native';
import { Card, CardSection } from './common';
import query from '../queries/fetchCarByID';

export const currencyFormatter = (num = 0) =>
  `$${Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace('.00', '')}`;

class CarShow extends Component {
  render() {
    const {
      imageStyle,
      textStyle,
      queryTextStyle
    } = styles;

    return (
      <Query query={query} variables={{ id: parseInt(this.props.id) }}>
        {({ loading, error, data }) => {
          if (loading) return <View><Text style={queryTextStyle}>Loading...</Text></View>;
          if (error) return <View><Text style={queryTextStyle}>Sorry something went wrong. Please try again.</Text></View>;

          return (
            <Card>
              <CardSection>
                <Image
                  style={imageStyle}
                  source={{ uri: data.Car.imageUrl }}
                />
              </CardSection>
              <CardSection>
                <View>
                  <Text style={textStyle}>
                    {data.Car.name}
                  </Text>
                  <Text style={textStyle}>
                    {currencyFormatter(data.Car.price)}
                  </Text>
                </View>
              </CardSection>
            </Card>
          );
        }}
      </Query>
    );
  }
}

const styles = {
  imageStyle: {
    padding: 5,
    height: 198,
    flex: 2,
    width: null
  },
  textStyle: {
    color: '#DADADA',
  },
  queryTextStyle: {
    color: '#DADADA',
    marginLeft: 20,
  }
}

export default CarShow;