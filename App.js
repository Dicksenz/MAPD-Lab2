import React from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = React.useState("Placeholder");
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [theme, setTheme] = React.useState("white");
  const toggleSwitch = (previousState) => {
    setIsEnabled((previousState) => !previousState);

    if (previousState) {
      setTheme("black");
      console.log("black");
    } else {
      setTheme("white");
      console.log("white");
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme }]}>
      // Task 1
      <TextInput
        style={styles.input}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text>{text}</Text>
      // Task 2
      <Button color="blue" title="Clear" onPress={() => setText("")} />
      // Task 3
      <Switch
        trackColor={{ false: "white", true: "green" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="grey"
        onValueChange={(value) => toggleSwitch(value)}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 20.0,
    color: "black",
    borderWidth: 3,
    borderColor: "red",
  },

  input: {
    width: "90%",
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    backgroundColor: "blue",
  },
});
