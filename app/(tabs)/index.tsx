import { Text, StyleSheet, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import safeView from "@/constant/saveView";
import AddNew from "../AddNew";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const data = ["Produk 1", "Produk 2", "Produk 4", "Produk 5", "Produk 6"];
  const navigation = useNavigation();

  return (
    <SafeAreaView style={safeView}>
      <Pressable
        style={styles.AddNew}
        onPress={() => navigation.navigate("AddNew")}
      >
        <Ionicons name="add" size={40} color="black" />
        <Text>Add New</Text>
      </Pressable>
      <ScrollView style={safeView}>
        {data.map((item, index) => (
          <Pressable
            onPress={() =>
              navigation.navigate("DetailProduk/[id]", { id: item })
            }
            style={styles.child}
            key={index}
          >
            <Text>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  child: {
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    elevation : 6,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
  },
  buttonsContainer: {
    padding: 10,
  },
  AddNew: {
    position: "absolute",
    flexDirection: "row",
    bottom: 120,
    right: 15,
    zIndex: 10,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: .3,
  },
});
