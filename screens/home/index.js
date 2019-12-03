import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import styles from "../../public/styles";

class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.title}
        source={require("../../public/HomeScreen.jpg")}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
          >
            <Text style={styles.textStyle}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("SignUp");
            }}
          >
            <Text style={styles.textStyle}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default connect(({ dispatch }) => ({ dispatch }))(Home);
