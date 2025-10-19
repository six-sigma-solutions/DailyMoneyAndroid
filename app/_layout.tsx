import React from 'react';
import { Stack } from 'expo-router';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

