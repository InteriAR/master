import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.title}
        source={require("../../public/HomeScreen.jpg")}
      >
        <View>
          <Button
            raised
            title="Begin Designing"
            titleStyle={{ color: "#563902" }}
            buttonStyle={{
              backgroundColor: "white"
            }}
            onPress={() => {
              this.props.navigation.navigate("AR");
            }}
          />
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
  }
});
