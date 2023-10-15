import { AppRegistry } from "react-native";
import App from "./App";
import app from "./app";

AppRegistry.registerComponent("App", () => app);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
