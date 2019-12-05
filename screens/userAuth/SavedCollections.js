import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Label,
  ListItem
} from "native-base";
import TouchableScale from "react-native-touchable-scale";
import * as firebase from "firebase";
import styles from "../../public/styles";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

class DisconnectedSavedCollections extends Component {
  constructor() {
    super();
    this.state = {
      //collections is going to be an array of objects with keys(room names) which contains and array of objects(furniture pieces)
      //ex. collections: [  {bedroom:[{bed}, {night stand}, {rug}], {livingRoom: [{couch}, {rug}]}     ]
      collections: {}
    };
  }
  //make a request to database to fetch collections and set state with them
  componentDidMount() {
    const userGallery = this.props.user.Gallery[0];
    this.setState({ collections: userGallery });
  }

  render() {
    const galleryNames = Object.keys(this.state.collections);
    const numGalleries = Object.keys(this.state.collections).length;
    const galleryInfo = Object.values(this.state.collections);
    console.log("GALLERY INFO", galleryInfo);
    if (!numGalleries) {
      return (
        <ImageBackground
          style={styles.title}
          source={require("../../public/Profile.jpeg")}
        >
          <View style={styles.savedCollectionsTextContainer}>
            <Text style={styles.savedCollectionsTextStyle}>
              You do not have any saved collections. Begin designing to create a
              new collection!
            </Text>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <ImageBackground
          style={styles.title}
          source={require("../../public/Profile.jpeg")}
        >
          <View>
            <Text style={styles.filledSavedTextTitle}>
              Your Saved Collections:
            </Text>
          </View>
          <View>
            {galleryNames.map(name => (
              <ListItem
                key={name}
                button
                onPress={() => console.log("PRESSEDDDD")}
              >
                <Text style={styles.filledSavedCollectionRoomTitles}>
                  {name}
                </Text>
              </ListItem>
            ))}
          </View>
        </ImageBackground>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const SavedCollections = connect(
  mapStateToProps,
  null
)(DisconnectedSavedCollections);

export default SavedCollections;
