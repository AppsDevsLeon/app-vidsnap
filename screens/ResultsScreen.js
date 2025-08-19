import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/common';

export default function ResultsScreen({ route, navigation }) {
  const { searchTerm = 'Bohemian Rhapsody', premiumMode = false } = route?.params ?? {};

  // Datos simulados; aquí luego conectas tu backend
  const results = [
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', premium: false },
    { id: 2, title: 'Shape of You', artist: 'Ed Sheeran', premium: false },
    { id: 3, title: 'Blinding Lights', artist: 'The Weeknd', premium: true },
    { id: 4, title: 'Dance Monkey', artist: 'Tones and I', premium: false },
  ];

  const filtered = premiumMode ? results.filter(r => r.premium) : results;

  return (
    <ImageBackground source={require('../assets/image.webp')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Resultados</Text>
          <Text style={styles.subtitle}>Búsqueda: {searchTerm}</Text>
        </View>

        <View style={{ gap: 12 }}>
          {filtered.map(item => (
            <View key={item.id} style={styles.resultCard}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultMeta}>{item.artist}</Text>
              {item.premium && <Text style={styles.badge}>Premium</Text>}
              <TouchableOpacity
                style={styles.smallButton}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.smallButtonText}>Volver</Text>
              </TouchableOpacity>
            </View>
          ))}
          {filtered.length === 0 && (
            <Text style={styles.subtitle}>No hay resultados en modo Premium.</Text>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 VidSnap | Todos los derechos reservados</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
