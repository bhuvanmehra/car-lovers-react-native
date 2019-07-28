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
    const { iosStyle, androidStyle, navBarStyle, sceneStyle } = styles;
    return (
      <Router sceneStyle={os === 'ios' ? iosStyle : androidStyle}>
        <Scene key="main">
          <Scene
            titleStyle={sceneStyle}
            rightTitle="Search"
            onRight={() => Actions.search()}
            key="home"
            component={Home}
            title="Car of the Week"
            navigationBarStyle={navBarStyle}
            initial
            leftButtonIconStyle={{tintColor : "white"}}
          />
          <Scene
            titleStyle={sceneStyle}
            leftButtonIconStyle={{tintColor : "white"}}
            key="search"
            component={Search}
            title="Search"
            navigationBarStyle={navBarStyle}
          />
          <Scene
            titleStyle={sceneStyle}
            rightTitle="Home"
            onRight={() => Actions.home()}
            key="carShow"
            component={CarShow}
            title="Car Show"
            navigationBarStyle={navBarStyle}
            leftButtonIconStyle={{tintColor : "white"}}
          />
        </Scene>
      </Router>
    );
  }
};

const styles = {
  iosStyle: {
    paddingTop: 65,
    backgroundColor: 'black',
  },
  androidStyle: {
    paddingTop: 25,
    backgroundColor: 'black',
  },
  navBarStyle: {
    backgroundColor: 'black',
    color: 'black'
  },
  sceneStyle: {
    color: '#DADADA',
  },
}
export default RouterComponent;