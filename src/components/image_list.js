import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class ImageList extends React.Component {

  componentWillMount () {
    axios.get('https://rallycoding.herokuapp.com/api/muisc_albums').then(response => console.log(response));
  }

  render () {
    return (
      <View>
        <Text>Image List!!!</Text>
      </View>
    );
  }
}

export default ImageList;
