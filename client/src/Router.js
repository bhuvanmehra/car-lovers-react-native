import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ValidateQFF from './ValidateQFF';
import Home from './components/Home';

const RouterComponent = () => {
  return (
    <Router sceneStyle= {{ paddingTop: 65 }}>
      <Scene key="main">
        <Scene
          key="home"
          component={Home}
          title="Car of the Week"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;