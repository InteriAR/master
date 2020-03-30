import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import styles from "../../public/styles";
import * as firebase from "firebase";
import firestore from "firebase/firestore";

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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  async signUp(email, password) {
    try {
      if (this.state.password < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      const data = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      const userId = data.user.uid;
      await firebase
        .firestore()
        .doc(`users/${email}`)
        .set({ userId: userId, email: email, password: password });
      this.props.navigation.navigate("Profile");
    } catch (error) {
      console.log(error.toString());
    }
  }

  render() {
    return (
      <ImageBackground
        style={styles.title}
        source={require("../../public/HomeScreen.jpg")}
      >
        <Container style={styles.loginPage}>
          <Form>
            <Item floatingLabel>
              <Label> Username </Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel>
              <Label> Email </Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
              />
            </Item>

            <Item floatingLabel>
              <Label> Password </Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
              />
            </Item>

            <Button
              style={{ marginTop: 10, backgroundColor: "#9f8a61" }}
              full
              rounded
              success
              onPress={() =>
                this.signUp(
                  this.state.username,
                  this.state.email,
                  this.state.password
                )
              }
            >
              <Text style={{ color: "white" }}> Sign Up</Text>
            </Button>
          </Form>
        </Container>
      </ImageBackground>
    );
  }
}

export default SignUp;
