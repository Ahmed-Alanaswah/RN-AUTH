import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [data, setData] = useState("");
  const { token } = useContext(AuthContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://react-native-course-2b9fe-default-rtdb.firebaseio.com/message.json?auth=${token}`
      );

      setData(response.data);
    };
    fetchData();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>{data}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
