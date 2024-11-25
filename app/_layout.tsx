import { Stack } from "expo-router";

export default function RootLayout() {
  return (
<Stack>
  <Stack.Screen name="index" options={{
    headerTitle:"children",
   headerLeft : () => <></>,
  }}/>
  <Stack.Screen name="about" options={{
    headerTitle:"about"
  }}/>
  <Stack.Screen name="not-found" options={{headerShown:false, }}/>

</Stack>
  );
}
