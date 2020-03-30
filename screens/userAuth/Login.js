import React, { Component } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import styles from "../../public/styles";
import { getUser, getUserThunk } from "../../store/actions";
import * as firebase from "firebase";
import { connect } from "react-redux";

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

class DisconnectedLogin extends Component {
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
    const { loginUser } = this.props;
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
              style={{ marginTop: 10, backgroundColor: "#9f8a61" }}
              full
              rounded
              success
              onPress={() => {
                loginUser(this.state.email, this.state.password);
                this.props.navigation.navigate("Profile");
              }}
            >
              <Text style={{ color: "white" }}> Login</Text>
            </Button>
          </Form>
        </Container>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser(email, password) {
      try {
        firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch(getUserThunk(email));
      } catch (error) {
        console.log(error.toString());
      }
    }
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(DisconnectedLogin);

export default Login;
