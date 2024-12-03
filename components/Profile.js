import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.picture}
        />
        <Text style={styles.name}>Rita Correia</Text>
        <Text style={styles.country}>London</Text>

        <View style={styles.insights}>
          <Text style={styles.insightsText}>81K</Text>
          <Text style={styles.insightsText}>803K</Text>
          <Text style={styles.insightsText}>1.4K</Text>
        </View>
        <View style={styles.insights}>
          <Text style={styles.insightsLabel}>Followers</Text>
          <Text style={styles.insightsLabel}>Likes</Text>
          <Text style={styles.insightsLabel}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkcyan ",
  },
  profile: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  picture: {
    marginTop: 10,
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
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  insightsText: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
  },
  insightsLabel: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    color: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
