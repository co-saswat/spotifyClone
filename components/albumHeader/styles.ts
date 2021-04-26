import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  }, 
  images: {
    width: 200,
    height: 200,
    margin: 15
  }, 
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: "bold"
  },
  creatorContainer:{
    flexDirection: 'row',
    margin: 5
  },
  creator:{
    color: 'lightgray',
    margin: 5,
    fontSize: 16
  },
  likes:{
    color: 'lightgray',
    margin: 5,
    fontSize: 16
  },
  play:{
    marginTop: 5,
    backgroundColor: '#1CD05D',
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPlay:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default styles