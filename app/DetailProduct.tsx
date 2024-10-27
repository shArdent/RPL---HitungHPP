import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import safeView from "@/constants/saveView";

const DetailProduct = () => {
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default DetailProduct;
