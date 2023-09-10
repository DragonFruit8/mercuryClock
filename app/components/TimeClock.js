import React from 'react';
import {View, StyleSheet} from 'react-native';

const TimeClock = () => {
    return (
        <View style={styles.clock}>
          <Text style={styles.clockText}>Time Clock</Text>

          <View style={styles.clockButtons}>
            <Button
              mode="contained"
              onPress={() =>
                alert(`Clocked in at ${new Date().toLocaleTimeString()}`)
              }
              style={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Clock In
            </Button>
            <Button
              mode="contained"
              onPress={() =>
                alert(`Clocked OUT at ${new Date().toLocaleTimeString()}`)
              }
              style={{ backgroundColor: "teal", color: "white" }}
            >
              Clock Out
            </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    clock: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        gap: 20,
    },
    clockText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginBottom: 20,
    },
    clockButtons: {
        flex: 1,
        flexGrow: 1,
        flexShrink: 0,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        gap: 20,
    },
})

export default TimeClock;
