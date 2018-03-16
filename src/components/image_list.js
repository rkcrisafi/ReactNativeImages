import React from 'react';
import { View, Text, TextInput, ListView, ScrollView, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';
import Input from './input';
import CardSection from './card_section';
import Card from './card';
import ImageItem from './image_item';


class ImageList extends React.Component {
  state = { page: 1, text: '' };

  componentWillMount() {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(this.props.images);
}

  findImages(e) {
    this.props.fetchImages(e.nativeEvent.text, this.state.page)//.then(() => this.setState({ page: this.state.page + 1, text: e.nativeEvent.text }));
  }

  loadMoreImages() {
    const { page, text } = this.state;
    if (text) {
      this.props.fetchImages(text, page).then(() => this.setState({ page: page + 1, text: text }));
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
            />
          </CardSection>
          <Text style={{ marginTop: 5, marginBottom: 5, marginLeft: 10 }}>
            {total} {total > 0 ? "Items" : ""}
          </Text>
          <CardSection>
            <FlatList style={{
              flexDirection: 'column',
              height: screenHeight - 150 }}
            
            >
              {hits.map((hit, idx) => (
                <ImageItem key={ idx } image={ hit }/>
              ))}
            </FlatList>
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
