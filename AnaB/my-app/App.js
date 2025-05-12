import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/fotoCurriculo.jpg')}
        style={styles.image}
        resizeMode='contain'
        />
      <Text>Ana Beatriz</Text>
      <Text>Idade: 25</Text>
      <Text>Ocupação: Estudante</Text>
      <Text>Experiência: 3 anos de experiência 
        como analista de atendimento.</Text>
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
  image: {
    widht: 200,
    height: 200,
    borderRadius: 100,
  },
});
