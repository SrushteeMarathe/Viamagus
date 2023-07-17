import React, {useState,useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Data from '../data';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Prediction',true);
      return true;
    };

    // Add event listener for the hardware back button
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    // Clean up the event listener when the component unmounts
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <Image
          source={require('../assets/ProfileRight.jpg')}
          style={{width: 30, height: 30}}
        />
        <Text style={styles.profileText}>Profile</Text>
        <View style={{marginLeft: 0}}>
          <Image
            source={require('../assets/comment-alt.jpg')}
            style={{width: 30, height: 30}}
          />
          <Text style={styles.badge}>1</Text>
        </View>
      </View>

<ScrollView>

      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../assets/ProfilePicture.jpg')}
          style={styles.profileImage}
        />
      </View>

      <View style={{alignItems: 'center', marginTop: 12}}>
        <Text style={styles.nameText}>Jina Simons</Text>
        <Text style={styles.pointsText}>6000 Pts</Text>
        <Text style={styles.info}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
      </View>

      <View style={styles.logoutContainer}>
        <Image
          source={require('../assets/SignOut.jpg')}
          style={styles.signout}
        />
        <Text style={styles.logoutText}>Logout</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 44}}>
        <View style={styles.pointsContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.subText}>Under or Over</Text>
            <View style={{flexDirection: 'row', marginTop: 14}}>
              <Image
                source={require('../assets/UpArrow.jpg')}
                style={styles.arrow}
              />
              <Text style={styles.percent}>81% </Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.subText}>Top 5</Text>
            <View style={{flexDirection: 'row', marginTop: 14, marginLeft: 0}}>
              <Image
                source={require('../assets/DownArrow.jpg')}
                style={styles.arrow}
              />
              <Text style={styles.percent}>-51% </Text>
            </View>
          </View>
        </View>
        <Image
          source={require('../assets/Star.jpg')}
          style={styles.starImage}
        />
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity style={styles.toggleButton}>
          <Text style={styles.toggleButtonText}>Games played</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            {borderBottomWidth: 4, borderColor: '#6231AD'},
          ]}>
          <Text style={styles.toggleButtonText}>Badges</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.flatlistContainer}>
        {Data.map((item, index) => {
          return (
            <View key={item.id} style={styles.flatlistSubContainer}>
              <Image
                source={require('../assets/Scroll.jpg')}
                style={styles.flatlistImage}
              />
              <View style={styles.flatlistSubContainer1}>
                <Text style={styles.flatlistTitle}>{item.title}{" "}<Text style={{color:"#FFA600"}}>{item.times}</Text></Text>
                <Text style={styles.flatlistDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent:"space-between"
  },
  badge: {
    fontSize: 11,
    fontWeight: '400',
    width: 14,
    height: 14,
    backgroundColor: '#6231AD',
    color: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 100,
    position: 'absolute',
    right: -5,
    top: -6,
  },
  profileText: {
    // width: 47,
    // height: 17,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
   // fontWeight: '500',
   // marginLeft: 120,
  },
  profileImage: {
    marginTop: 20,
    width: 75,
    height: 75,
  },
  nameText: {
    // width: 86,
    // height: 17,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#333',
   // fontWeight: '500',
    marginBottom: 8,
  },
  pointsText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#333',
   // fontWeight: '500',
    marginBottom: 8,
  },
  info: {
    marginHorizontal: 16,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
    //fontWeight: '500',
    lineHeight: 20,
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signout: {
    width: 18,
    height: 14,
  },
  logoutText: {
    marginLeft: 9,
   // width: 51,
    //height: 17,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
   // fontWeight: '500',
  },
  pointsContainer: {
    width: windowWidth-32,
    height: 103,
    borderWidth: 1,
    borderColor: '#EEEAF3',
    borderRadius: 5,
    paddingBottom: 23,
    flexDirection: 'row',
    justifyContent:"space-around",
    //paddingLeft:20
  },
  starImage: {
    width: 27,
    height: 31,
    position: 'absolute',
    right: 180,
    top: -14,
  },
  subContainer: {
    marginTop: 20,
   
    paddingBottom: 23,
  },
  subText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#727682',
    fontWeight: '600',
  },
  arrow: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  percent: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#4F4F4F',
   fontWeight: '700',
  },
  toggleContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 4,
    borderColor: '#F3F2F7',
    marginTop: 28,
  },
  toggleButton: {
    height: 60,
    width: windowWidth/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButtonText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
   // fontWeight: '500',
  },
  flatlistContainer: {
    backgroundColor:"#F6F3FA",
   
  },
  flatlistSubContainer: {
    backgroundColor:"#fff",
    marginHorizontal:16,
    width:windowWidth-32,
    height:105,
    marginTop:16,
    flexDirection: 'row',
  },
  flatlistSubContainer1: {
    marginTop:20,
  },
  flatlistImage: {
    width:60,
    height:60,
    marginHorizontal:16,
    marginTop:20
  },
  flatlistTitle: {
   
    height:17,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#333',
   fontWeight: 'bold',
  },
  flatlistDescription: {
    width:231,
    height:40,
    marginTop:5,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#727682',
   
  },
  flatlistContenet: {},
});

export default Home;
