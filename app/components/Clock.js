import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Button } from 'react-native';
import Clock from 'react-live-clock';

const currentDateTime = new Date();
const timeText = currentDateTime;
const [time, setTime] = useEffect(timeText);


function TimeClock() {
    const date = new Date().toLocaleTimeString("en-US");
    

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm});

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({ currentDay: item.toUpperCase()});
      }
    })
  }

    daysArray = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];
    
    const [currentDay, setCurrentDay] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        getCurrentTime();
    }, []);

    setInterval(() => {
        getCurrentTime();
    }, 1000);
        return (
        <View style={(StyleSheet.create(
            {
                container: {
                    flex: 1,
                    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                headerText: {
                    fontSize: 50,
                    textAlign: "center",
                    margin: 10,
                    color: 'black',
                    fontWeight: "bold"
                },
                timeText: {
                    fontSize: 50,
                    color: 'grey'
                },
                daysText: {
                    color: '#2196f3',
                    fontSize: 25,
                    paddingBottom: 0,
                    marginLeft: 150,
                }
            })).container}>
            <View>

                <Text style={(StyleSheet.create(
                    {
                        container: {
                            flex: 1,
                            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        headerText: {
                            fontSize: 50,
                            textAlign: "center",
                            margin: 10,
                            color: 'black',
                            fontWeight: "bold"
                        },
                        timeText: {
                            fontSize: 50,
                            color: 'grey'
                        },
                        daysText: {
                            color: '#2196f3',
                            fontSize: 25,
                            paddingBottom: 0,
                            marginLeft: 150,
                        }
                    })).daysText}>{currentDay}</Text>
                <Text style={(StyleSheet.create(
                    {
                        container: {
                            flex: 1,
                            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        headerText: {
                            fontSize: 50,
                            textAlign: "center",
                            margin: 10,
                            color: 'black',
                            fontWeight: "bold"
                        },
                        timeText: {
                            fontSize: 50,
                            color: 'grey'
                        },
                        daysText: {
                            color: '#2196f3',
                            fontSize: 25,
                            paddingBottom: 0,
                            marginLeft: 150,
                        }
                    })).timeText}>
                        
                        <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
                        </Text>
            </View>
        </View>
        );
    }

export default Clock;