import React from 'react';
import { View, Image, Text, Dimensions, ScrollView } from 'react-native';
import Card from './card';

class ImagePage extends React.Component {

  render() {
    const { imageURL, userImageURL, user, imageHeight, imageWidth, tags } = this.props.navigation.state.params;
    const { userContainer, userImage, imageStyle } = styles;
    const aspectRatio = imageHeight / imageWidth;
    const screenWidth = Dimensions.get('window').width;
    let theTags = tags.split(', ').map(tag => {
      return <Text>#{tag} </Text>;
    });
    return (
      <ScrollView>
      <Card>
        <View style={userContainer}>
          <Image
            source={{ uri: userImageURL }}
            style={userImage}
          />
          <Text style={{ fontWeight: "700" }}>{user}</Text>
        </View>
        <Image
          source={{ uri: imageURL }}
          style={{
            width: screenWidth - 10,
            height: (screenWidth - 10) * aspectRatio,
            marginTop: 10,
            marginBottom: 10
          }}
        />
        <Text style={{ fontSize: 13 }}>
          {imageHeight}x{imageWidth}
        </Text>
        <Text>{theTags}</Text>
      </Card>
      </ScrollView>
    );
  }
}

const styles = {
  userContainer: {
    flexDirection: 'row',
  },
  userImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {

  }
};

export default ImagePage;
