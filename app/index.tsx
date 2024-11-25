import { Link } from "expo-router";
import { Text, View , StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.Text}>welcome children</Text>
      <Link href={"/about"} style={styles.button}>
      Go to A bout Screen</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#25292e'
  },
  Text:{
   color:'white'
  },
button:{
  fontSize : 20,
  textDecorationLine:"underline",
  color:"#fff"
}
})
