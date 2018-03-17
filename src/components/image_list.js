import React from 'react';
import { View, Text, TextInput, ListView, ScrollView, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages, clearImages } from '../actions/index';
import Input from './input';
import CardSection from './card_section';
import Card from './card';
import ImageItem from './image_item';


class ImageList extends React.Component {
  state = { page: 1, text: ''};

  componentWillMount() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });
  this.dataSource = ds.cloneWithRows(this.props.images);
}

  findImages(e) {
    this.props.clearImages();
    this.setState({ page: 1, text: e.nativeEvent.text });
    this.props.fetchImages(e.nativeEvent.text, this.state.page);
  }

  loadMoreImages() {
    if (this.state.text !== '' && this.props.images.total > this.state.page * 20) {
      let page = this.state.page + 1;
      console.log(this.state.page);
      this.setState({ page }, () =>
      this.props.fetchImages(this.state.text, this.state.page));
    }
  }

  render () {
    const { total, hits } = this.props.images;
    let screenHeight = Dimensions.get('window').height;
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="Search All"
              onSubmitEditing={(e) => this.findImages(e)}
              label="PIXABAY"
              value={this.state.text}
            />
          </CardSection>
          { total > 0 ? <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: 10 }}>
            {total} { total > 1 ? "Items" : "Item"}
          </Text> : null }
          <CardSection>
            <FlatList style={{
              flexDirection: 'column',
              height: screenHeight - 150 }}
              data={hits}
              renderItem={({item}) => <ImageItem key={ item.id} image={ item }/>}
              onEndReachedThreshold={0}
              onEndReached={() => this.loadMoreImages()}
            />

          </CardSection>

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
  { fetchImages, clearImages }
)(ImageList);
