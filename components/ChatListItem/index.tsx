import React from 'react';
import { Image, Text, View } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';

const ChatListItem = ({ lastMessage, users }: ChatRoom) => {
  const user = users[1];
  console.log(user?.imageUri);
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user?.imageUri as string }} style={styles.avatar} />
        <View style={styles.midContainer}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.lastMessage}>{lastMessage.content}</Text>
        </View>
      </View>
      {/* <Text>{lastMessage.createdAt}</Text> */}
      <Text style={styles.date}>Yesterday</Text>
    </View>
  );
};

export default ChatListItem;
