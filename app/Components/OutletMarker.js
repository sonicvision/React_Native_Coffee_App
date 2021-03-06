import React from "react";
import { Marker } from "react-native-maps";
import { Image } from "react-native";

const OutletMarker = ({ outlet, navigation }) => (
  <Marker
    onPress={() =>
      navigation.navigate("OutletDetail", outlet, { title: "Hello" })
    }
    coordinate={outlet.coordinates}
    title={outlet.name}
    description={outlet.name}
  >
    <Image
      style={{ height: 50, width: 50 }}
      source={require("../Assets/coffee-icon.png")}
    />
  </Marker>
);

export default OutletMarker;
