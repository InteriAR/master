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
  Label
} from "native-base";
import * as firebase from "firebase";
import styles from "../../public/styles";
import { Button } from "react-native-elements";

class SavedCollections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //collections is going to be an array of objects with keys(room names) which contains and array of objects(furniture pieces)
      //ex. collections: [  {bedroom:[{bed}, {night stand}, {rug}], {livingRoom: [{couch}, {rug}]}     ]
      collections: []
    };
  }
  //make a request to database to fetch collections and set state with them
  //   componentDidMount(){
  //       let data = firebase.firestore().collection('users').doc()
  //   }

  render() {
    console.log("USERRRR", this);
    if (!this.state.collections.length) {
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
        <View>
          {this.state.collections.map(collection => (
            <Container>
              <Text>{collection.name}</Text>
            </Container>
          ))}
        </View>
      );
    }
  }
}

export default SavedCollections;
