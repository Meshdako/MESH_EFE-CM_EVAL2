import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TitleContainer from '../containers/TitleContainer';
import BodyContainer from '../containers/BodyContainer';
import React from 'react';


export default function HomeView() {

  return (
    <View style={styles.container}>
      <TitleContainer />
      <BodyContainer /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
