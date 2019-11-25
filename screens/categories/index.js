import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
// var request = require("request");
import request from "request";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    // var request = require("request");
    console.log("INSIDE COMPONENT");
    var options = {
      method: "GET",
      url: "https://api.wayfair.com/v1/3dapi/models",
      headers: {
        "cache-control": "no-cache",
        Connection: "keep-alive",
        "Content-Length": "11",
        "Accept-Encoding": "gzip, deflate",
        Host: "api.wayfair.com",
        "Postman-Token":
          "6ad93e2d-1ae4-40b5-a897-14005abcca6a,7c08f127-1a46-4f65-a947-9696993880cb",
        "Cache-Control": "no-cache",
        Accept: "*/*",
        "User-Agent": "PostmanRuntime/7.19.0",
        Authorization:
          "Basic c3RlZmFuaWVyZXllczIyQGdtYWlsLmNvbTo1ZGRjNDdiMmFjMGZl",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: { price: "32500" }
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      this.setState({ products: "HELLO" });
      console.log("BODYYYY", body);
    });
  }
  render() {
    console.log("PRODUCTS=>>>>>>", this.state.products);
    return (
      <View style={styles.container}>
        <Text>Categories</Text>
      </View>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
