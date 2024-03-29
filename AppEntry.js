import "expo/build/Expo.fx";
import { Platform } from "react-native";
// import { AppRegistry } from 'react-native'; // for rn

import { registerRootComponent } from "expo";
// import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from "expo-keep-awake";
import { createRoot } from "react-dom/client";

import App from './App'; /* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  // AppRegistry.registerComponent('main', () => withExpoRoot(App)); // better for rn only
  registerRootComponent(App); // for expo
}
