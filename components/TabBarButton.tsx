import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { icon } from "@/constants/icon";
const TabBarButton = ({
  onPress,
  onLongPress,
  routeName,
  color,
  label,
  isFocused,
}: {
  onPress: Function;
  onLongPress: Function;
  routeName: string;
  label: string;
  isFocused: boolean;
  color: string;
}) => {
  return (
    <Pressable
      onPress={onPress as any}
      onLongPress={onLongPress as any}
      style={styles.tabBarItem}
    >
      {icon[routeName]({
        color: isFocused ? "#001994" : "#000",
      })}
      <Text
        style={{
          color: isFocused ? "#001994" : "#000",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
