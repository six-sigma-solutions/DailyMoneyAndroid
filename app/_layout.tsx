

import React from 'react';
import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        {/* Fixed Navbar at the top */}
        <Navbar />
  {/* Spacer to prevent content from going under the Navbar (reduce to 0 or minimal) */}
  <View style={{ height: 0 }} />
        {/* All routes rendered below the Navbar */}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </AuthProvider>
  );
}

