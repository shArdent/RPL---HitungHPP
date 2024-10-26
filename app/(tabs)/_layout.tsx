import { Tabs } from "expo-router"

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, title: 'List Produk' }} />
      <Tabs.Screen name="Bahan" options={{ headerShown: false, title: 'List Bahan' }} />
    </Tabs>
  )
}

export default TabLayout