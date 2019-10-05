'use strict';
import React, { useCallback } from 'react';
import {
    PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const CaptureImageBasic = () => (<Text>Ready for RN Camera</Text>);

const requestReadPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App READ_EXTERNAL_STORAGE Permission',
          message:
            'Msg READ_EXTERNAL_STORAGE',
          buttonNeutral: 'Ask Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can READ_EXTERNAL_STORAGE');
      } else {
        console.log('READ_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

const requestWritePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App WRITE_EXTERNAL_STORAGE Permission',
          message:
            'Msg WRITE_EXTERNAL_STORAGE',
          buttonNeutral: 'Ask Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can WRITE_EXTERNAL_STORAGE');
      } else {
        console.log('WRITE_EXTERNAL_STORAGE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

export function CaptureImage({ componentId}) {
    let camera;

    const loadRoot = useCallback(() => {
        console.log('loadRoot');
        Navigation.popToRoot(componentId, {
            component: {
                name: "WelcomeScreen"
            }
        });
    });
    
    const takePicture = async() => {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            const data = await camera.takePictureAsync(options)
                .then(data => console.log(data.uri))
                .catch(err => console.log('err', err));
        }
    };
    // file:///data/user/0/com.awesomeproject/cache/Camera/e4ad21dc-323c-4af4-b711-d96e49d61dad.jpg
    return (
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                    camera = ref;
                }}
                style={styles.preview}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20,
    },
  });
