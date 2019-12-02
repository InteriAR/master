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
// import styles from "../../public/styles";

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
              this.props.navigation.navigate("Login");
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

// export default withNavigation(Home)

export default connect(({ dispatch }) => ({ dispatch }))(Home);

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    flex: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    width: 100,
    borderRadius: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250
  },
  textStyle: {
    color: "#9f8a61"
  }
});
