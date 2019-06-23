import React from 'react';
import { View , Text, Image } from 'react-native';
import { Card, CardSection } from './common';
import { Query } from 'react-apollo';
import query from '../queries/CarOfTheWeek';

class Home extends React.Component {
  render() {
    const {
      containerStyle,
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    const image = 'https://www.mazda.com.au/globalassets/settings/vehicle-assets/mx-5/2018-03-ipm/360s/roadster-gt/46v-soul-red-crystal-metallic/b.png';
    const review = 'The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016.';

    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return <View><Text>Loading...</Text></View>;
          if (error) return <View><Text>Something went wrong. Please try again.</Text></View>;
          console.log('data.CarOfTheWeek.review', data.CarOfTheWeek.review);

          return (
            <Card>
              <CardSection>
                <Image
                  style={imageStyle}
                  source={{ uri: data.CarOfTheWeek.model.imageUrl }}
                />
                <View>
                  <Text>{data.CarOfTheWeek.review}</Text>
                </View>
              </CardSection>
            </Card>
          );
        }}
      </Query>


    );
  };
}


const styles = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    padding: 10,
    height: 300,
    flex: 2,
    width: null
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
    marginBottom: 20,
  }
};

export default Home;

