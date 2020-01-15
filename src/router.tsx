import { Actions, Router, Scene, Stack } from 'react-native-router-flux'
import Home from './pages/home'
import React from 'react';

const App = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} />
        </Stack>
    </Router>
);

export default App
