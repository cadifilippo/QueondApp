import React from 'react';
import moment from 'moment';
import { Image, Text, View } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';

const ChatListItem = ({ lastMessage, users }: ChatRoom) => {
  const user = users[1];
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user?.imageUri as string }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.lastMessage}>
            {lastMessage?.content}
          </Text>
        </View>
      </View>
      <Text style={styles.date}>
        {moment().diff(moment(lastMessage?.createdAt as string), 'days') > 1
          ? moment(lastMessage.createdAt as string).format('DD/MM/YYYY')
          : moment(lastMessage.createdAt as string).fromNow()}
      </Text>
    </View>
  );
};

export default ChatListItem;
