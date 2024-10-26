import { Ionicons } from "@expo/vector-icons";

export const icon : any = {
    index: (props: any) => (
      <Ionicons
        name={"list"}
        size={24}
        {...props}
      />
    ),
    Bahan: (props: any) => (
      <Ionicons
        name={"fast-food"}
        size={24}
        {...props}
      />
    ),
  };