import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Login from "./components/Login";
import HomePage from './components/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
