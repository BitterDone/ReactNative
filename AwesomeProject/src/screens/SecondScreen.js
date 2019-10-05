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
} from 'react-native/Libraries/NewAppScreen';

export function SecondScreen({ componentId }) {
  const loadRoot = useCallback(() => {
    console.log('loadRoot');
    Navigation.popToRoot(componentId, {
        component: {
            name: "WelcomeScreen"
        }
    });
  }, [componentId]);

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
            <Text
                style={styles.sectionTitle}
                onPress={loadRoot}
            >
                Step One
            </Text>
            <Text style={styles.sectionDescription}>
                Bacon ipsum dolor amet cupim pork belly ground round alcatra corned beef kevin. Fatback prosciutto picanha pork leberkas pork loin. Doner tri-tip shoulder leberkas, sirloin cupim prosciutto kielbasa pork chop turducken. Strip steak cow burgdoggen spare ribs salami ham hock rump doner, cupim turkey alcatra picanha ribeye.
                Cupim beef ribs pastrami, spare ribs corned beef shoulder t-bone tri-tip pork meatball tail ham hock. Cow kevin short loin filet mignon, andouille swine leberkas tongue capicola. Tenderloin leberkas tongue cupim tri-tip ribeye, shankle corned beef biltong doner chicken porchetta. Porchetta chicken jerky burgdoggen. Landjaeger tenderloin meatloaf filet mignon.
                Meatball kielbasa t-bone, landjaeger prosciutto cow hamburger tri-tip alcatra picanha boudin leberkas drumstick bacon. Salami swine leberkas pig buffalo sausage capicola short ribs rump. Fatback cupim meatball ham buffalo shank brisket. Spare ribs burgdoggen pork loin shankle strip steak boudin. Pork chop ribeye pancetta brisket short loin porchetta ground round alcatra, meatloaf kevin filet mignon frankfurter pork tenderloin hamburger.
                Landjaeger shoulder beef ribs sirloin ball tip jowl cow filet mignon picanha tail turkey swine pig kevin. Picanha pork salami flank. Bacon alcatra swine biltong prosciutto andouille chicken doner pork. Leberkas filet mignon pork loin, pork chop drumstick ground round turducken capicola venison kevin. Capicola spare ribs bresaola, beef kevin flank short ribs jerky short loin pork meatball shankle prosciutto pork loin. Alcatra spare ribs jowl, capicola brisket porchetta bacon beef picanha filet mignon frankfurter leberkas ribeye turducken. Shank strip steak flank tri-tip spare ribs pig shankle fatback venison.
                Tenderloin burgdoggen chuck cow. Ribeye chicken capicola, ham hock turducken short ribs shank jerky pancetta swine sirloin flank biltong. Andouille cow shankle bresaola drumstick capicola ham hock bacon pork loin ribeye. Tail drumstick chicken salami spare ribs ham t-bone tongue doner beef. Tenderloin pancetta hamburger t-bone, drumstick swine picanha boudin flank doner. Kevin biltong jowl meatball.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

// SecondScreen.passProps = () => ({
//   passProps: {
//     text: 'The second screen',
//   },
// });

SecondScreen.options = () => ({
  topBar: {
    title: {
      text: 'Second screen title',
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
