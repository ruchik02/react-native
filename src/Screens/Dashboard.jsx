import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Dashboard = ({ route }) => {
    const { username } = route.params;
  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Welcome, {username}!</Text>
  </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });
export default Dashboard