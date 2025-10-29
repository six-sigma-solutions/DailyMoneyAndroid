import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// Firebase removed
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  // Firebase removed
  const router = useRouter();

  // Firebase removed

  // Firebase removed

  return (
    <View style={styles.container}>
      {/* Header with Contact and Sign Out on top-left */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.iconButton} onPress={() => router.push('/contact')}>
          <Text style={styles.iconText}>📞</Text>
        </TouchableOpacity>

        {/* Sign Out removed */}
      </View>

  <Text style={styles.title}>Welcome to DM!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'flex-start', alignItems: 'flex-start' },
  headerRow: { flexDirection: 'row', gap: 12, marginTop: 6, marginBottom: 18 },
  iconButton: { width: 44, height: 44, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f6f8fa' },
  iconText: { fontSize: 20 },
  title: { fontSize: 20, marginBottom: 18 },
});
