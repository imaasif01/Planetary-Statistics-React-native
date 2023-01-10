import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Text, View } from "react-native";

const Picoftheday = () => {
  const [astronomy, setAstronomy] = useState({});

  useEffect(() => {
    getAstronomy();
  }, []);

  const getAstronomy = async () => {
    try {
      await axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=0Pjk8Neps3dUjKmauVhMYNuUIbyDJPyBFHP6eswA"
        )
        .then((res) => {
          //   console.log("getting from", res.data);
          setAstronomy(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View
        style={{ justifyContent: "center", alignItems: "center", bottom: 10 }}
      >
        <Image
          source={{ uri: astronomy?.url }}
          style={{
            width: 325,
            height: 188,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ position: "relative", bottom: 60, left: 34 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "800",
          }}
        >
          {astronomy?.title}
        </Text>
        <Text
          style={{
            color: "#adadad",
            fontSize: 12,
            fontWeight: "400",
            letterSpacing: 1,
            top: 5,
          }}
        >
          {astronomy?.date}
        </Text>
      </View>
    </View>
  );
};
export default Picoftheday;
