import React from 'react';
import { Platform} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import Search from './components/Search';
import CarShow from './components/CarShow';

class RouterComponent extends React.Component {
  state = {
    os: '',
  };

  componentDidMount() {
    if (Platform.OS === 'ios' ) {
      this.setState({ os : 'ios'});
    }
  }

  render() {
    const { os } = this.state;
    return (
      <Router sceneStyle={os === 'ios' ? { paddingTop: 65 } : { paddingTop: 25 }}>
        <Scene key="main">
          <Scene
            rightTitle="Search"
            onRight={() => Actions.search()}
            key="home"
            component={Home}
            title="Car of the Week"
            initial
          />
          <Scene
            key="search"
            component={Search}
            title="Search"
          />
          <Scene
            rightTitle="Home"
            onRight={() => Actions.home()}
            key="carShow"
            component={CarShow}
            title="Car Show"
          />
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;