import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import styles from "../../public/styles";
import * as firebase from "firebase";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser(email, password) {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.props.navigation.navigate("Profile"));
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
              style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={() =>
                this.loginUser(this.state.email, this.state.password)
              }
            >
              <Text style={{ color: "white" }}> Login</Text>
            </Button>
          </Form>
        </Container>
      </ImageBackground>
    );
  }
}

export default Login;
