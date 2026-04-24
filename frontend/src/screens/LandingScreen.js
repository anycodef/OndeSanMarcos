import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.brandName}>OndeSanMarcos</Text>
        </View>
        <Text style={styles.subtitle}>Your cute campus guide!</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MainApp')}
          >
            <Text style={styles.buttonText}>Continue as Guest 🌸</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff0f5', // Lavender blush for cute look
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#8b4513', // Saddle brown
  },
  brandName: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ff69b4', // Hot pink
    marginTop: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffb6c1', // Light pink
    marginBottom: 50,
    fontStyle: 'italic',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#ffb6c1', // Light pink
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#ff69b4',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});

export default LandingScreen;
