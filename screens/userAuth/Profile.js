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

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: firebase.auth().currentUser
    };
  }
  render() {
    const user = this.state.currentUser;
    console.log(user);
    return (
      <ImageBackground
        style={styles.title}
        source={require("../../public/Profile.jpeg")}
      >
        <View>
          <Text style={styles.profileTextStyle}>Welcome!</Text>
          <View style={styles.profileButtonContainer}>
            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => {
                this.props.navigation.navigate("AR");
              }}
            >
              <Text style={styles.profileButtonText}>Begin Designing</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.profileButton}
              onPress={() => {
                this.props.navigation.navigate("SavedCollections");
              }}
            >
              <Text style={styles.profileButtonText}>
                View Saved Collections
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Profile;
