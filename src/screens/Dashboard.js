import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Modal,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SvgBit from '../assets/BitSvg.js';
import SvgDown from '../assets/Down.js';
import SvgUp from '../assets/Up.js';
const windowHeight = Dimensions.get('window').height;
const Dashboard = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Today’s Games</Text>

        <View>
          <LinearGradient
            colors={['#6231AD', '#FE4190']}
            start={{x: 1, y: 1}}
            end={{x: 1.5, y: 1}}
            style={styles.bitcoinInfoContainer}>
            <View style={styles.infoSubContainer1}>
              <View style={styles.infoSubContainer2}>
                <Text style={styles.underOrOver}>UNDER OR OVER</Text>
                <Ionicons
                  name="information-circle-outline"
                  color="#D2BAF5"
                  size={13}
                  style={{backgroundColor: 'transparent'}}
                />
              </View>

              <View style={styles.infoSubContainer2}>
                <Text style={styles.startingAt}>Starting in</Text>
                <Ionicons
                  name="time"
                  color="#D2BAF5"
                  size={13}
                  style={{backgroundColor: 'transparent'}}
                />
                <Text style={styles.timeText}>03:23:12</Text>
              </View>
            </View>

            <View style={styles.infoSubContainer3}>
              <View>
                <Text style={styles.subText1}>Bitcoin price will be under</Text>

                <Text
                  style={{
                    fontFamily: 'Montserrat-ExtraBold',
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 'bold',
                  }}>
                  $24,524{' '}
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 14,
                      color: '#fff',
                    }}>
                    at 7 a ET on 22nd Jan’21
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                position: 'absolute',
                bottom: 0,
                right: 0,
                // backgroundColor: '#5929A1',
                // width: 154,
                // zIndex: 0,
                // height:154,
                // borderRadius:100
              }}>
              <SvgBit />
            </View>
          </LinearGradient>

          <View style={styles.subContainer2}>
            <View>
              <Text style={styles.subContainerTitle}>PRIZE POOL</Text>
              <Text style={styles.subContainerValue}>$12,000</Text>
            </View>

            <View>
              <Text style={styles.subContainerTitle}>UNDER</Text>
              <Text style={styles.subContainerValue}>3.25x</Text>
            </View>

            <View>
              <Text style={styles.subContainerTitle}>OVER</Text>
              <Text style={styles.subContainerValue}>1.25x</Text>
            </View>

            <View>
              <Text style={styles.subContainerTitle}>ENTRY FEES</Text>
              <Text style={[styles.subContainerValue, {alignSelf: 'flex-end'}]}>
                5 <Image source={require('../assets/coin.jpg')} />
              </Text>
            </View>
          </View>

          <Text style={styles.subTitle}>What’s your prediction?</Text>

          <View style={styles.subContainer3}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  marginLeft: 16,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                },
              ]}>
              <SvgDown />

              <Text style={styles.buttonText}>{" "}Under</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: '#6231AD',
                  marginRight: 16,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                },
              ]}
              onPress={() => {
                navigation.navigate('Prediction', true);
              }}>
             
                <SvgUp /> 
                <Text style={[styles.buttonText,{ borderColor:"#6231AD"}]}>{" "}Over</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.subContainer4}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {' '}
                <Icon name="user" size={12} color="#727682" /> 355 Players
              </Text>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                {' '}
                <Icon name="linechart" size={12} color="#727682" /> View chart
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 14, marginBottom: 12}}>
              <View style={styles.pinkBar}></View>
              <View style={styles.greenBar}></View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                }}>
                232 predicted under
              </Text>
              <Text
                style={{
                  color: '#727682',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 12,
                }}>
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    height: windowHeight,
  },

  title: {
    // width: 111,
    height: 22,
    fontFamily: 'AvenirNextLTProMedium-It',
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 13,
  },
  bitcoinInfoContainer: {
    //width: 341,
    height: 104,
    paddingLeft: 16,
    paddingRight: 16,
    marginHorizontal: 16,
    marginTop: 16,
    //  marginBottom:16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingTop: 5,
  },
  underOrOver: {
    color: '#D2BAF5',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    //  fontStyle: 'normal',
    // fontWeight: '600',
    // lineHeight: 14,
    marginRight: 8,
  },
  infoSubContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoSubContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startingAt: {
    color: '#B296DC',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    // fontStyle: 'normal',
    // fontWeight: '500',
    // lineHeight: 12,
    marginRight: 8,
  },
  timeText: {
    color: '#D2BAF5',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    // fontStyle: 'normal',
    // fontWeight: '500',
    // lineHeight: 17,
    marginLeft: 8,
  },
  infoSubContainer3: {
    // width: 228,
    height: 38,
    marginTop: 12,
    flexDirection: 'row',
    zIndex: 99,
  },
  subText1: {
    color: '#D2BAF5',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    // fontStyle: 'normal',
    // fontWeight: '500',
    // lineHeight: 17,
  },
  subText2: {
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    // fontStyle: 'normal',
    // fontWeight: '500',
    lineHeight: 19,
  },
  subContainer2: {
    marginTop: 20,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginRight: 16,
  },
  subContainerTitle: {
    color: '#B5C0C8',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    // fontStyle: 'normal',
    // fontWeight: '500',
  },
  subContainerValue: {
    fontFamily: 'AvenirLTProHeavy',
    fontSize: 14,
    color: '#333333',
    marginTop: 5,
    fontWeight: '700',
  },
  subTitle: {
    color: '#727682',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 16,
    paddingLeft: 16,
    marginTop: 20,
  },
  subContainer3: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //  paddingHorizontal: 16,
    marginTop: 14,
  },
  button: {
    width: '40%',
    height: 40,
    backgroundColor: '#452C55',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor:"#452C55"
  },
  subContainer4: {
    marginHorizontal: 16,
    paddingTop: 21,
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#F6F3FA',
  },
  pinkBar: {
    backgroundColor: '#FE4190',
    width: '80%',
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  greenBar: {
    backgroundColor: '#2DABAD',
    width: '21%',
    height: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: -5,
  },
});
export default Dashboard;
