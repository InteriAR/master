import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Home from "./home";
import Categories from "./categories";
import AR from "./ar";
import Login from "./userAuth/Login.js";
import SignUp from "./userAuth/SignUp.js";
import Profile from "./userAuth/Profile.js";
import SavedCollections from "./userAuth/SavedCollections";
// import InsideOverlay from "./categories/inside-overlay";
// import DetailsScreen from "./categories/details-screen";

const Navigator = createAppContainer(
  createSwitchNavigator(
    {
      Home: { screen: Home },
      Categories: { screen: Categories, mode: "modal", header: "none" },
      AR: { screen: AR },
      // Details: {
      //   screen: DetailsScreen
      // },
      Profile: { screen: Profile },
      Login: { screen: Login },
      SignUp: { screen: SignUp },
      SavedCollections: { screen: SavedCollections }
    },
    {
      initialRouteName: "Home"
    }
  )
);

export default Navigator;
