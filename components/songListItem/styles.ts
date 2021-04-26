import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10
  },
  title: {
    color: 'white',
    fontSize: 18
  },
  artist: {
    color: 'lightgray'
  },
  image: {
    width: 70,
    height: 70
  },
  containerText: {
    justifyContent: 'space-between',
    padding: 10
  }
})

export default styles;