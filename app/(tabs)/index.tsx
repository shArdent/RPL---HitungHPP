import { Text, StyleSheet, Pressable, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { initDb, showTable } from "@/lib/db";
import { FlatList } from "react-native-gesture-handler";

const Page = () => {
  const data = [
    "Produk 1",
    "Produk 2",
    "Produk 4",
    "Produk 5",
    "Produk 6",
    "produk 7",
    "produk 8",
  ];
  const navigation = useNavigation();
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<any[]>(data);

  const handleSearch = (e: string) => {
    const query = e.trim().toLowerCase();
    setFilteredData(data.filter((item) => item.toLowerCase().includes(query)));
  };

  useEffect(() => {
    initDb();
    showTable();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor : "transparent" }}>
      <Pressable
        style={styles.AddNew}
        onPress={() =>
          router.navigate({
            pathname: "/AddNew",
          })
        }
      >
        <Ionicons name="add" size={40} color="black" />
        <Text>Add New</Text>
      </Pressable>
      <View style={{  backgroundColor : "transparent", position : "absolute", top : 10, left : 10, flexDirection : "row", zIndex : 10, width : "100%" }}>
        <TextInput
          placeholder="Cari Produk"
          style={styles.filterInput}
          underlineColorAndroid={"transparent"}
          onChangeText={(e) => handleSearch(e)}
        />
        <Ionicons name="search" size={20} color="black" style={styles.icon} />
      </View>

      <FlatList
        data={filteredData}
        contentContainerStyle={{ gap: 12, paddingTop : 67 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={styles.child}
            onPress={() =>
              router.navigate({
                pathname: "/DetailProduct",
                params: {
                  name: item,
                },
              })
            }
          >
            <Text>{item}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  child: {
    gap: 10,
    backgroundColor: "#FFF",
    elevation: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
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
    borderWidth: 0.3,
  },
  filterInput: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 30,
    borderWidth: 0.3,
    paddingHorizontal: 27,
    width: "100%",
  },

  icon: {
    position: "absolute",
    right: 27,
    top: 13,
  },
});
