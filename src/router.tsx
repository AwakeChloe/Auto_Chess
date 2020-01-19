import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import Login from './pages/login'
import React from 'react';

const App = () => (
  <Router>
    <Stack key="root">
        <Scene key="login" component={Login} />
    </Stack>
  </Router>
);

export default App
