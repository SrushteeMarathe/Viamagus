import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
const windowWidth = Dimensions.get('window').width;

const Prediction = ({navigation}) => {
  const route = useRoute();
  const modalVisible = route.params;
  console.log(modalVisible);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const initialSelectedIndex = 1;
  const windowWidth = Dimensions.get('window').width;
  const height = 300;
  const [isModalVisible, setModalVisible] = useState(modalVisible);

  useEffect(() => {
    setModalVisible(true);
  }, [isModalVisible]);

  const items = [
    {value: 1, label: '11'},
    {value: 2, label: '12'},
    {value: 3, label: '13'},
    {value: 4, label: '14'},
    {value: 5, label: '15'},
    {value: 6, label: '16'},
    {value: 7, label: '17'},
    {value: 8, label: '18'},
    {value: 9, label: '19'},
    {value: 10, label: '20'},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Games</Text>
      <View style={{borderWidth: 2, marginTop: 30, borderColor: '#8A8C8F'}}>
        <View
          style={{
            backgroundColor: '#0196FF',
            width: 233,
            height: 6,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}></View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.underOrOver}>UNDER OR OVER</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.startingAt}>Starts in</Text>
            <Icon name="clockcircle" size={13} color="#D2BAF5" />
            <Text style={styles.timeText}>03:23:12</Text>
          </View>
        </View>

        <Text style={[styles.subText1, {paddingHorizontal: 16, marginTop: 18}]}>
          Shifu predicts Bitcoin's value will reach
        </Text>

        <Text
          style={[
            styles.subText2,
            {paddingHorizontal: 16, marginTop: 15, marginBottom: 30},
          ]}>
          $24524
        </Text>
      </View>

      <View style={{borderWidth: 2, borderColor: '#8A8C8F'}}>
        <View
          style={{
            marginTop: 22,
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.timeText}>232 chose under</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.timeText}>232 chose over</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 16,
            marginBottom: 20,
          }}>
          <View style={styles.pinkBar}></View>
          <View style={styles.greenBar}></View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}>
          <Text style={styles.timeText}>
            {' '}
            <Icon name="user" size={12} color="#727682" /> 355
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.timeText}>
              {' '}
              <Icon name="linechart" size={12} color="#727682" /> View chart{' '}
              <Icon name="down" size={12} color="#727682" />
            </Text>
          </View>
        </View>
      </View>

      <View style={{borderWidth: 2, borderColor: '#8A8C8F'}}>
        <View
          style={{
            backgroundColor: '#0196FF',
            width: 233,
            height: 6,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}></View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.underOrOver}>UNDER OR OVER</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.startingAt}>Starts in</Text>
            <Icon name="clockcircle" size={13} color="#D2BAF5" />
            <Text style={styles.timeText}>03:23:12</Text>
          </View>
        </View>

        <Text style={[styles.subText1, {paddingHorizontal: 16, marginTop: 18}]}>
          Shifu predicts Bitcoin's value will reach
        </Text>

        <Text
          style={[
            styles.subText2,
            {paddingHorizontal: 16, marginTop: 15, marginBottom: 30},
          ]}>
          $24524
        </Text>
      </View>

      <View style={{borderWidth: 2, borderColor: '#8A8C8F'}}>
        <View
          style={{
            marginTop: 22,
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.timeText}>232 chose under</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={styles.timeText}>232 chose over</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            paddingHorizontal: 16,
            marginBottom: 20,
          }}>
          <View style={styles.pinkBar}></View>
          <View style={styles.greenBar}></View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 25,
          }}>
          <Text style={styles.timeText}>
            {' '}
            <Icon name="user" size={12} color="#727682" /> 355
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.timeText}>
              {' '}
              <Icon name="linechart" size={12} color="#727682" /> View chart{' '}
              <Icon name="down" size={12} color="#727682" />
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View
          style={{
            height: '58%',
            marginTop: 'auto',
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            zIndex: 999,
          }}>
          <Text style={styles.modalTitle}>Your Prediction is Under</Text>
          <Text style={styles.entryTickets}>ENTRY TICKETS</Text>
          <View
            style={{
              marginHorizontal: 16,
              marginTop: -20,
              backgroundColor: '#EFEAF7',
            }}>
            <DynamicallySelectedPicker
              items={items}
              onScroll={({index}) => setSelectedItemIndex(index)}
              initialSelectedIndex={initialSelectedIndex}
              fontSize={24}
              fontFamily="Montserrat-Bold"
              width={windowWidth - 32}
              height={208}
              selectedItemStyle={styles.selectedItem}
              itemStyle={styles.item}
              itemTextStyle={styles.itemText}
              selectedItemBorderColor="#EFEAF7"
              bottomGradientColors={[
                'rgba( 255, 255, 255, 0.7 )',
                'rgba( 255, 255, 255, 0.7 )',
                'rgba( 255, 255, 255, 0.7 )',
                'rgba( 255, 255, 255, 1 )',
              ]}
              topGradientColors={[
                'rgba( 255, 255, 255, 1 )',
                'rgba( 255, 255, 255, 0.7 )',
                'rgba( 255, 255, 255, 0.7 )',
                'rgba( 255, 255, 255, 0.7 )',
              ]}
            />
          </View>

          <Text style={styles.youCanWin}>You can win</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
            }}>
            <Text style={styles.money}>$2000</Text>
            <Text style={styles.total}>
              Total <Image source={require('../assets/coin.jpg')} />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 14,
                }}>
                {' '}
                5
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('BottomTab');
            }}>
            <Text style={styles.buttonText}>Submit my prediction</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B3B3B3',
    padding: 16,
    // alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
  },
  title: {
    // width: 111,
    // height: 22,
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 16,
    color: '#333333',
    //fontWeight: 'bold',
    //marginLeft: 16,
    marginTop: 20,
  },
  underOrOver: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    //lineHeight: 12,
    // marginRight: 8,
  },
  item: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedItem: {
    backgroundColor: '#EFEAF7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemText: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  startingAt: {
    color: '#8A8C8F',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    // fontStyle: 'normal',
    // fontWeight: '600',
    //  lineHeight: 12,
    // marginRight: 8,
  },
  timeText: {
    color: '#8A8C8F',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    // fontStyle: 'normal',
    // fontWeight: 'bold',
  },
  subText1: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  subText2: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    marginBottom: 20,
  },
  pinkBar: {
    backgroundColor: '#0196FF',
    width: '75%',
    height: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  greenBar: {
    backgroundColor: '#374AAF',
    width: '25%',
    height: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: -5,
  },

  modalTitle: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 40,
    paddingLeft: 16,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  entryTickets: {
    color: '#727682',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    zIndex: 9999,
    marginTop: 20,
    marginLeft: 16,
    backgroundColor:"#fff",
    borderWidth:2,
    borderColor:"#fff"
  },
  youCanWin: {
    color: '#B5C0C8',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,

    marginTop: 20,
    marginLeft: 16,
  },
  money: {
    color: '#03A67F',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  total: {
    color: '#727682',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  button: {
    width: windowWidth - 32,
    height: 40,
    backgroundColor: '#6231AD',
    borderRadius: 33,
    marginHorizontal: 16,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    // flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 468,
    backgroundColor: 'pink',
  },
});

export default Prediction;
