import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const App: React.FC = () => {
  const [name, setName] = useState("João");
  const [lastName, setLastName] = useState("Silva");

  useEffect(() => {
    /*setTimeout(() => {
      setName("João");
      setLastName("Silva");
    }, 3000);*/
  }, []);

  return (
    <View style={styles.container}>
      <Text testID="title-screen">
        Aprendendo a realizar testes unitários no react-native
      </Text>

      <TextInput
        testID="name"
        placeholder="Nome"
        autoCorrect={false}
        value={name}
      />

      <TextInput
        testID="last-name"
        placeholder="Sobrenome"
        autoCorrect={false}
        value={lastName}
      />

      <Button testID="button-save" title="Salvar" onPress={() => {}} />
    </View>
  );
};

export default App;
