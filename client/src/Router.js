import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import Search from './components/Search';
import CarShow from './components/CarShow';

const RouterComponent = () => {
  return (
    <Router sceneStyle= {{ paddingTop: 65 }}>
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
          title="carShow"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;