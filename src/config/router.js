import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ImageList from '../components/image_list';
import ImagePage from '../components/image_page';

export const ImageStack = StackNavigator({
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      title: "IMAGES"
    }
  },
  ImagePage: {
    screen: ImagePage,
    navigationOptions: {
      title: "IMAGE DETAILS"
    }
  }
});


export default ImageStack;
