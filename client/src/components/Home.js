import React from 'react';
import { View , Text, Image } from 'react-native';
import { Card, CardSection } from './common';
import { Query } from 'react-apollo';
import query from '../queries/CarOfTheWeek';

class Home extends React.Component {
  render() {
    const {
      imageStyle
    } = styles;

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
    padding: 5,
    height: 198,
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
