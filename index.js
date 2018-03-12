import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import ImageList from './src/components/image_list';

const App = () => {
  return (
    <View>
      <Header headerText={'Images'}/>
      <AlbumList />
    </View>
  );
};


AppRegistry.registerComponent('albums', () => App);

