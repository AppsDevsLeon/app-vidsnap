import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000000" />
      <SafeAreaView style={styles.safeArea}>
        <StackNavigator />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: 'lightblue' },
});
