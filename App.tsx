import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aprendendo a realizar testes unitários no react-native</Text>

      <TextInput placeholder="Nome" autoCorrect={false} testID="name" />

      <TextInput
        placeholder="Sobrenome"
        autoCorrect={false}
        testID="lastName"
      />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
