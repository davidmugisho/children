import { Link, Stack } from "expo-router";
import { View , StyleSheet } from "react-native";

export default function RootLayout() {
  return (
<Stack>
  <Stack.Screen options={{
    title:"Oops! Not Found"
  }}/>
  <View style={styles.container}></View>
  <Link href={"/"} style={styles.button}>Go back to Main Screen</Link>
</Stack>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#25292e'
      },
      button:{
        fontSize : 20,
        textDecorationLine:"underline",
        color:"#fff"
      },
})
