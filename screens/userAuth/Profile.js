import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  FlatList
} from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";
import * as firebase from "firebase";
import styles from "../../public/styles";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: firebase.auth().currentUser
    };
  }
  render() {
    const user = this.state.currentUser;
    return (
      <View style={styles.title}>
        <Text>Welcome, {user["displayName"]}</Text>
      </View>
    );
  }
}

export default Profile;
