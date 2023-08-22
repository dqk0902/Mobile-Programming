import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  const buttonPressed = () => {
  Alert.alert('Hello', 'Button pressed');
  };
  
  return (
    <View style={styles.container}>
      <Button color='red' title="Aloha" onPress={buttonPressed}/>
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
