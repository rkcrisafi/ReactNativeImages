import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import Header from './components/header';
import ImageList from './components/image_list';
import ImageStack from './config/router';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Header headerText="PIXABAY" />
        <ImageStack />
      </View>
    </Provider>
  );
};

export default App;
