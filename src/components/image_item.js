import React from 'react';
import { Image, View, Dimensions, TouchableOpacity } from 'react-native';
import CardSection from './card_section';
import ImagePage from './image_page';

const ImageItem = ({ image }) => {


  const { imageURL, imageHeight, imageWidth } = image;
  const aspectRatio = imageHeight / imageWidth;
  const screenWidth = Dimensions.get('window').width;
  console.log(image);
  return (
      <View>
          <Image
            style={{
              width: screenWidth - 20,
              height: (screenWidth - 20) * aspectRatio,
              marginBottom: 10
            }}
            source={{ uri: imageURL }}
          />
      </View>
  )
}

const styles = {
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'stretch'
  }
};

export default ImageItem;
