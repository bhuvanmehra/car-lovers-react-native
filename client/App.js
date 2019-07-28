import React from 'react';
import { AppRegistry } from 'react-native';
// import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Router from './src/Router';
import ApolloClient from 'apollo-boost';

// Create the client as outlined in the setup guide
// const client = new ApolloClient();

// Create the client as outlined in the setup guide
const client = new ApolloClient({
  uri: 'https://cars-lovers-graphql.herokuapp.com/graphql',
  // uri: 'http://localhost:4000/graphql',
  // uri: 'http://10.1.40.115:4000/graphql',
  // uri: 'http://192.168.1.107:4000/graphql',
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
