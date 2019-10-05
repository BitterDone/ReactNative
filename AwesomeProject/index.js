import { Navigation } from "react-native-navigation";
// import Home from './src/screens/Home'; // inline require works
import SecondScreen from './src/screens/SecondScreen'; // import
import CaptureImage from './src/screens/CaptureImage'; // also works
import BasicPage from './src/screens/BasicPage';

Navigation.registerComponent(`WelcomeScreen`, () => require('./src/screens/Home').Home);
Navigation.registerComponent(`SecondScreen`, () => SecondScreen);
Navigation.registerComponent(`CaptureImage`, () => CaptureImage);
Navigation.registerComponent(`BasicPage`, () => BasicPage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        // component: { // for single-page
        //     name: "WelcomeScreen"
        //   },
        stack:{ // default stack for multi-page
            children: [
                {
                    component: {
                        name: "WelcomeScreen"
                      },
                },
            ]
        }
    }
  });
});