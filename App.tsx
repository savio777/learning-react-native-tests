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
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setIsDataLoaded(true);
    }, Math.floor(Math.random() * 200));
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
      />
      <TextInput
        testID="last-name"
        placeholder="Sobrenome"
        autoCorrect={false}
        value={lastName}
        onChangeText={setLastName}
      />

      <Button testID="button-save" title="Salvar" onPress={handleSubmit} />

      {isDataLoaded && (
        <Text testID="data-loaded">
          Dados carregados: {name} {lastName}
        </Text>
      )}
    </View>
  );
};

export default App;
