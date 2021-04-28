import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor: '#131313',
    padding: 10,
    width:'100%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  artist: {
    color: 'lightgray'
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  containerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  progress: {
    height: 3,
    backgroundColor: '#bcbcbc'
  },
  row: {
    flexDirection: 'row',
  }
})

export default styles;