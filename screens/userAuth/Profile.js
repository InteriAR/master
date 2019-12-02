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
// import styles from "../../public/styles";
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
          <Text style={styles.textStyle}>Welcome!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              raised
              title="Begin Designing"
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("AR");
              }}
            >
              <Text>Begin Designing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    flex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9f8a61",
    // padding: 10,
    width: 100
    // borderRadius: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250
  },
  textStyle: {
    color: "white",
    fontSize: 50
  }
});
