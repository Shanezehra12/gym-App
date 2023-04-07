import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {makeMutable} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Swiper
        /* autoplay={true} */
        dot={
          <View
            style={{
              backgroundColor: '#00000033',
              width: 4,
              height: 4,
              marginLeft: 5,
              marginRight: 5,
              marginVertical: -10,
              borderRadius: 5,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#FF5757',
              width: 40,
              height: 4,
              marginLeft: 5,
              marginRight: 5,
              borderRadius: 5,
            }}
          />
        }
        paginationStyle={{
          bottom: 60,
          marginLeft: -250,
        }}
        loop={false}>
        {/* ///////////////////////////////////  FIRST SLIDE  /////////////////////////////  */}

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/onboarding/1.png')}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/logo.png')}
            style={styles.swiperLogo}
          />
          <Text style={styles.swiperText1}> MEET YOUR COACH, </Text>
          <Text style={styles.swiperText2}> Start Your Journey. </Text>

          <Text style={[styles.Text, {marginHorizontal: 18}]}>
            Aut deserunt quo et amet vitae nihil consequatur voluptas. Quasi
            asperiores natus perferendis nostrum amet maxime. Facere sit id
            saepe id minima sed ullam est porro. Autem perferendis fuga
            praesentium. Ut et fuga. Quidem quas qui veniam est aut velit et
            possimus.
          </Text>
        </View>

        {/* ///////////////////////////////////  SECOND SLIDE  /////////////////////////////  */}

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/onboarding/2.png')}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/logo.png')}
            style={styles.swiperLogo}
          />
          <Text style={styles.swiperText1}> Create a workout plan</Text>
          <Text style={styles.swiperText2}> to stay fit.</Text>

          <Text style={[styles.Text, {marginHorizontal: 18}]}>
            Deserunt odit voluptates consequatur quia harum cum nihil ut aut. Et
            distinctio vel laudantium cumque ipsam. Vitae fugit ipsum. Maiores
            veniam natus quaerat vel hic eligendi.
          </Text>
        </View>

        {/* ///////////////////////////////////  THIRD SLIDE  /////////////////////////////  */}

        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../../assets/onboarding/3.png')}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/logo.png')}
            style={styles.swiperLogo}
          />
          <Text style={styles.swiperText1}> Action is the key of </Text>
          <Text style={styles.swiperText2}> all SUCCESS. </Text>

          <Text style={[styles.Text, {marginHorizontal: 18}]}>
            Eaque occaecati et iste cupiditate officia ullam et. Ipsum autem quo
            id est perspiciatis non. Ducimus exercitationem fuga non numquam
            eius officia. Sapiente beatae aut velit impedit consequatur
            asperiores. Quas aliquid similique qui mollitia.
          </Text>
        </View>
      </Swiper>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={[styles.button, {marginLeft: 15}]}>
          <Text style={styles.ButtonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, {marginRight: 15}]}>
          <Text style={styles.ButtonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Text: {
    position: 'absolute',
    fontSize: 14,
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 530,
  },

  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute',
  },

  image: {
    width: 390,
    height: 450,
  },

  swiperLogo: {
    width: 105,
    height: 120,
    top: -100,
  },

  swiperText1: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '800',
    marginTop: -110,
    marginHorizontal: 14,
  },

  swiperText2: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '800',
    marginHorizontal: 14,
    lineHeight: 30,
  },

  ButtonText: {
    color: '#1D4564',
    fontSize: 18,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 14
  },

  button: {
    width: 160,
    height: 50,
    backgroundColor: '#FF5757',
    borderRadius: 30,
    top: -30,
  },
});
