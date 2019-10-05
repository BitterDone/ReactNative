import React, { useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Navigation } from "react-native-navigation";
import {
  Header,
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export function Home({ componentId }) {
  const loadSecondScreen = useCallback(() => {
    console.log('loadSecondScreen');
    Navigation.push(componentId, {
      component: {
        name: 'SecondScreen',
      },
    });
  }, [componentId]);

  const loadCaptureImage = useCallback(() => {
    console.log('loadCaptureImage');
    Navigation.push(componentId, {
      component: {
        name: 'CaptureImage',
      },
    });
  }, [componentId]);

  // onPress={testOnPress} // passes React obj
  // onPress={() => testOnPress()} // prints default param
  const testOnPress = (msg = 'Step One onPress') => console.log(msg);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Text
                style={styles.sectionTitle}
                onPress={loadSecondScreen} // this works
              >
              loadSecondScreen
            </Text>
            <Text
                style={styles.sectionTitle}
                onPress={() => loadCaptureImage()} // this also works
              >
              loadCaptureImage
            </Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text
                style={styles.sectionTitle}
                // onPress={loadSecondScreen}
                onPress={()=>testOnPress('parmPassed')}
              >
                  See Your Changes
                </Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

// Home.passProps = () => ({
//   passProps: {
//     text: 'The second screen',
//   },
// });

Home.options = () => ({
  topBar: {
    title: {
      text: 'Welcome Home',
    },
  },
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
