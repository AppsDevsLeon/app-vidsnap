import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, ImageBackground, Alert
} from 'react-native';
import { styles } from '../styles/common';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [premiumMode, setPremiumMode] = useState(false);

  const goSearch = () => {
    const q = query.trim();
    if (!q) {
      Alert.alert('Campo vacío', 'Escribe algo para buscar.');
      return;
    }
    // Navega y pasa parámetros al Results
    navigation.navigate('Results', { searchTerm: q, premiumMode });
  };

  return (
    <ImageBackground source={require('../assets/image.webp')} style={styles.backgroundImage}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>VidSnap</Text>
            <Text style={styles.subtitle}>Descarga música y video al instante</Text>
          </View>

          <View style={styles.searchContainer}>
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Pega la URL o escribe qué quieres buscar"
              placeholderTextColor="#bbb"
              style={styles.input}
              autoCapitalize="none"
            />

            <TouchableOpacity style={styles.button} onPress={goSearch}>
              <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.toggle, premiumMode ? styles.toggleOn : styles.toggleOff]}
              onPress={() => setPremiumMode(v => !v)}
            >
              <Text style={styles.toggleText}>
                {premiumMode ? 'Premium: ON' : 'Premium: OFF'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 VidSnap | Todos los derechos reservados</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
