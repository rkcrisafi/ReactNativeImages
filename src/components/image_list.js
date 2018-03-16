import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';
import Input from './input';
import CardSection from './card_section';
import Card from './card';
import ImageItem from './image_item';


class ImageList extends React.Component {
  state = { page: 1 };

  findImages(e) {
    this.props.fetchImages(e.nativeEvent.text);
  }

  render () {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="Search All"
              onSubmitEditing={(e) => this.findImages(e)}
              label="PIXABAY"
            />
          </CardSection>
          <Text>{this.props.images.total}</Text>
          <CardSection>

          </CardSection>

          <Text>Image List!!!</Text>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images
  };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(ImageList);
