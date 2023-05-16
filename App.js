import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = () => {
  const [type, setType] = useState({feed: true, rewards: false});
  const [data, setData] = useState([
    {
      title: 'Big Thanks for your help on the outage today',
      name: 'John',
      rewardedBy: 'James',
      time: 1,
    },
    {
      title: 'Thanks for rewarding',
      name: 'David',
      rewardedBy: 'Daniel',
      time: 3,
    },
    {
      title: 'Big Thanks for your help on the outage today',
      name: 'John',
      rewardedBy: 'Thimma Chowdary',
      time: 3.5,
    },
    {
      title: 'Big Thanks for your help on the outage today',
      name: 'John',
      rewardedBy: 'Thimma Chowdary',
      time: 5,
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  function NewModal() {
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState(null);
    const [message, setMessage] = useState('');

    function submit() {
      if (to.length == 0) {
        alert('Enter to name');
      } else if (amount <= 0) {
        alert('Enter valid amount');
      } else if (message.length == 0) {
        alert('Enter valid message');
      } else {
        let param = {
          title: message,
          name: to,
          rewardedBy: 'Thimma Chowdary',
          time: 5,
        };
        setData([...data, param]);
        setModalVisible(false);
      }
    }
    return (
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              height: '20%',
              width: '100%',
            }}></View>
          <View
            style={{
              height: '80%',
              width: '100%',
              backgroundColor: '#000',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 20,
            }}>
            <Text style={{color: '#fff', fontSize: 18, alignSelf: 'center'}}>
              Give Reward
            </Text>
            <View
              style={{
                height: 50,
                width: '100%',
                position: 'absolute',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Entypo
                size={20}
                color="#fff"
                name="cross"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <View style={{width: '100%'}}>
              <Text style={{color: '#fff', fontSize: 18, marginTop: 10}}>
                To
              </Text>
              <TextInput
                value={to}
                onChangeText={txt => {
                  setTo(txt);
                }}
                style={{
                  height: 45,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
            <View style={{width: '100%'}}>
              <Text style={{color: '#fff', fontSize: 18, marginTop: 20}}>
                Amount
              </Text>
              <TextInput
                value={amount}
                onChangeText={txt => {
                  setAmount(txt);
                }}
                keyboardType="numeric"
                style={{
                  height: 45,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
            <View style={{width: '100%'}}>
              <Text style={{color: '#fff', fontSize: 18, marginTop: 20}}>
                Message
              </Text>
              <TextInput
                value={message}
                onChangeText={txt => {
                  setMessage(txt);
                }}
                multiline
                numberOfLines={5}
                style={{
                  // height: 45,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                submit();
              }}
              style={{
                height: 45,
                width: '80%',
                backgroundColor: '#fff',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 50,
              }}>
              <Text style={{color: '#000', fontSize: 18}}>Give</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  function Header() {
    return (
      <View
        style={{
          height: (HEIGHT * 20) / 100,
          width: '100%',
          backgroundColor: '#ccc',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            height: (HEIGHT * 10) / 100,
            width: (HEIGHT * 10) / 100,
            backgroundColor: '#000',
            borderRadius: (HEIGHT * 10) / 100 / 2,
          }}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://movies-2ec44.web.app/static/media/thimma.a11544be0687717e2ef4.jpg',
            }}
            style={{height: '100%', width: '100%', borderRadius: 50}}
          />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#000', fontSize: 18}}>Thimma Chowdary</Text>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#000', fontSize: 14}}>Given</Text>
            <Foundation
              name="dollar"
              size={20}
              color="#000"
              style={{marginLeft: 10}}
            />
            <Text style={{color: '#000', fontSize: 14, marginLeft: 3}}>
              100 /{' '}
            </Text>
            <Text style={{color: '#000', fontSize: 14}}>Received</Text>
            <Foundation
              name="dollar"
              size={20}
              color="#000"
              style={{marginLeft: 10}}
            />
            <Text style={{color: '#000', fontSize: 14, marginLeft: 3}}>
              250
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function Body() {
    return (
      <View
        style={{
          height: (HEIGHT * 80) / 100,
          width: '100%',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              setType({feed: true, rewards: false});
            }}
            style={{
              height: 50,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: type.feed ? '#fff' : 'gray',
              borderTopLeftRadius: 10,
            }}>
            <Text style={{color: '#000'}}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType({feed: false, rewards: true});
            }}
            style={{
              height: 50,
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: type.rewards ? '#fff' : 'gray',
              borderTopRightRadius: 10,
            }}>
            <Text style={{color: '#000'}}>Rewards</Text>
          </TouchableOpacity>
        </View>

        <View>{type.feed ? <Feed /> : <Rewards />}</View>
        <NewModal />
      </View>
    );
  }

  function Feed() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}>
        <ScrollView>
          {data &&
            data.map((feed, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    borderBottomWidth: 1,
                    borderColor: '#ccc',
                    paddingBottom: 10,
                  }}>
                  <View
                    style={{
                      height: (HEIGHT * 7) / 100,
                      width: (HEIGHT * 7) / 100,
                      backgroundColor: '#000',
                      borderRadius: (HEIGHT * 7) / 100 / 2,
                    }}></View>
                  <View style={{marginLeft: 15, width: '80%'}}>
                    <Text style={{color: '#000', marginTop: 5}}>
                      {feed.title}
                    </Text>
                    <Text style={{color: '#a6a6a6', marginTop: 5}}>
                      {feed.name + 'Rewarded By' + feed.rewardedBy}
                    </Text>
                    <Text style={{color: '#a6a6a6', marginTop: 5}}>
                      {feed.time} hrs ago
                    </Text>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
  function Rewards() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}>
        <ScrollView>
          {data &&
            data
              .filter(data => data.rewardedBy == 'Thimma Chowdary')
              .map((feed, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginTop: 15,
                      borderBottomWidth: 1,
                      borderColor: '#ccc',
                      paddingBottom: 10,
                    }}>
                    <View
                      style={{
                        height: (HEIGHT * 7) / 100,
                        width: (HEIGHT * 7) / 100,
                        backgroundColor: '#000',
                        borderRadius: (HEIGHT * 7) / 100 / 2,
                      }}></View>
                    <View style={{marginLeft: 15, width: '80%'}}>
                      <Text style={{color: '#000', marginTop: 5}}>
                        {feed.title}
                      </Text>
                      <Text style={{color: '#a6a6a6', marginTop: 5}}>
                        {feed.name + 'Rewarded By' + feed.rewardedBy}
                      </Text>
                      <Text style={{color: '#a6a6a6', marginTop: 5}}>
                        {feed.time} hrs ago
                      </Text>
                    </View>
                  </View>
                );
              })}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ccc'}}>
      <Header />
      <Body />
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          height: 50,
          width: 50,
          borderRadius: 25,
          position: 'absolute',
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          bottom: 20,
          right: 20,
        }}>
        <AntDesign name="plus" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default App;
