import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Profile from "./components/Profile";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfcfcf",
    alignItems: "center",
    paddingTop: 80,
    padding: 12,
    gap: 8,
  },
  input: {
    height: 50,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

const App: React.FC = () => {
  const [name, setName] = useState("João");
  const [lastName, setLastName] = useState("Silva");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, Math.floor(Math.random() * 500));
  };

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
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        testID="last-name"
        placeholder="Sobrenome"
        autoCorrect={false}
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />

      <Button testID="button-save" title="Salvar" onPress={handleSubmit} />

      {isDataLoaded && (
        <Text testID="data-loaded">
          Dados carregados: {name} {lastName}
        </Text>
      )}

      <Profile userName="savio777" />
    </View>
  );
};

export default App;
