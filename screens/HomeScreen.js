import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Picoftheday from "../api/Picofday";
import NewsApi from "../api/Newsapi";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 50 }}>
        <View style={styles.header}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 20,
              letterSpacing: 1.2,
            }}
          >
            Planet Statistics
          </Text>
          <Text
            style={{
              color: "#adadad",
              top: 5,
              fontWeight: "600",
              fontSize: 12,
              letterSpacing: 1,
            }}
          >
            Explore the universe
          </Text>
          <TouchableOpacity onPress={/>/}>
            <Feather
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                paddingLeft: 300,
                bottom: 32,
                opacity: 0,
              }}
              name="user"
              size={24}
              color="#8e8e8e"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text
            style={{
              color: "#fff",
              top: 10,
              left: 24,
              fontWeight: "800",
              fontSize: 18,
              letterSpacing: 0.2,
            }}
          >
            Astro pic of the day
          </Text>
        </View>
        <View style={{ top: 35 }}>
          <Picoftheday />
        </View>
        <View>
          <Text
            style={{
              color: "#d3d3d3",
              top: 5,
              left: 24,
              fontWeight: "800",
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            News Feed
          </Text>
        </View>
        <View style={{ top: 20 }}>
          <NewsApi navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
  },
  header: {
    position: "relative",
    top: "5%",
    left: 24,
    backgroundColor: "#252525",
  },
});
