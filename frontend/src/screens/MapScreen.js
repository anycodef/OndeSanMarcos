import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import * as Location from 'expo-location';
import Toast from 'react-native-toast-message';

Mapbox.setAccessToken('YOUR_MAPBOX_ACCESS_TOKEN_HERE');

const UNMSM_COORDS = [-77.0844, -12.0560]; // Longitude, Latitude

const MapScreen = () => {
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Toast.show({
          type: 'error',
          text1: 'Oops! 😿',
          text2: 'We need your location to show you around campus!',
          position: 'bottom',
          visibilityTime: 4000,
        });
        return;
      }
      setHasPermission(true);

      let loc = await Location.getCurrentPositionAsync({});
      setLocation([loc.coords.longitude, loc.coords.latitude]);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={15}
          centerCoordinate={UNMSM_COORDS}
          animationMode="flyTo"
          animationDuration={2000}
        />
        {hasPermission && location && (
          <Mapbox.PointAnnotation
            id="user-avatar"
            coordinate={location}
          >
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>🦊</Text>
            </View>
          </Mapbox.PointAnnotation>
        )}
      </Mapbox.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  avatarContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: '#ff69b4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  avatarText: {
    fontSize: 20,
  }
});

export default MapScreen;
