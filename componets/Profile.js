import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/profile.jpg")} style={styles.picture} />
      <Text style={styles.name}>Rita Correia</Text>
      <Text style={styles.country}>London</Text>

      <View style={styles.insights}>
        <Text style={styles.insightsText}>80K Followers</Text>
        <Text style={styles.insightsText}>803K Likes</Text>
        <Text style={styles.insightsText}>1.4K Photos</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  country: {
    fontSize: 15,
    marginTop: 10,
  },
  insights: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  insightsText: {
    fontSize: 15,
  },
});
