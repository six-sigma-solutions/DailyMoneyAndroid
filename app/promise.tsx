import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import AutoScrollView from "../components/AutoScrollView";
import { useRouter } from "expo-router";
import { Platform } from 'react-native';

const Mypromises = () => {
  const router = useRouter();

  const handleCtaClick = () => {
    router.push('/bio'); // Navigate to Gratitude page
  };

  return (
    <AutoScrollView contentContainerStyle={styles.container}>
      <View style={styles.wrapper}>
        {/* Image */}
        <Image
          source={require("../assets/promise1.png")}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={handleCtaClick}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>

    
    </AutoScrollView>
  );
};

export default Mypromises;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#08143aff',
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  image: {
    width: "98%",
    height: 310,
  },
  button: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#ffcc00",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    ...Platform.select({
      web: { boxShadow: '0px 4px 6px rgba(0,0,0,0.3)' },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
      },
      android: { elevation: 5 },
    }),
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

});