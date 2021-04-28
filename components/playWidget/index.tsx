import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Song } from '../../types';
import styles from './styles'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Sound } from "expo-av/build/Audio/Sound";

const song = {
  id: '1',
  uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  title: 'Music Beats',
  artist: 'Saswat'
}

const PlayWidget = () => {


  const [sound, setSound] = React.useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
  const [isLike, setIsLike] = React.useState<boolean>(false)

  const onPlayerStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
  }

  const playCurrentSong = async () => {

    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlayerStatusUpdate
    )

    setSound(newSound);

  }

  React.useEffect(() => {

    playCurrentSong();
  }, [])


  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }

    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  }


  const onLikePress = () => {
    if(!sound) {
      return
    }

    if(isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    } 

  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.containerText}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{song.title} </Text>
          <Text style={styles.artist}>{song.artist} </Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onLikePress}>
          <AntDesign name={isLike ? 'heart' : 'hearto'} size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlayPausePress}>
            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default PlayWidget
