import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Header from './components/header';
import ImageList from './components/image_list';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="PIXABAY Images" />
        <ImageList />
      </View>
    </Provider>
  );
};

export default App;
