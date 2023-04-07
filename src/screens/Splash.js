import React from 'react';
import {StyleSheet, View, Image, StatusBar, Text} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imageLogo}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={styles.text1}>BE ALL </Text>
          <Text style={styles.text2}>YOU. </Text>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageLogo: {
    width: 286,
    height: 255,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 200,
  },

  text1: {
    color: '#1D4564',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 430,
  },

  text2: {
    color: '#FF5757',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 430,
  },
});
