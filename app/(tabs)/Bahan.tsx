import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import safeView from "@/constants/saveView";

const BahanPage = () => {
  return (
    <View>
      <ScrollView>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
        <Text>banananana</Text>
      </ScrollView>
    </View>
  );
};

export default BahanPage;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
