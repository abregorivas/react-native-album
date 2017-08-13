import React, { Component } from 'react'
import {View, Text, Image } from 'react-native'
import Card from './Card'
import CardItem from './CardItem'
import Button from  './Button'

const AlbumDetail = ({album}) => {

const {title, artist, thumbnail_image, image} = album;

  return (
    <Card>

      <CardItem>
        <View style={styles.thumbnailContainerStyle}>
          <Image source={{uri: thumbnail_image}} style={styles.thumbnailStyle}/>
        </View>
        <View style={styles.albumHeaderStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image source={ {uri: image} } style={styles.albumCoverStyles}/>
      </CardItem>

      <CardItem>
        <Button text={'Click Me!'} ></Button>
      </CardItem>

    </Card>
  )
}

const styles = {
  albumHeaderStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumCoverStyles: {
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetail
