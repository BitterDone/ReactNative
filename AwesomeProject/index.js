import { Navigation } from "react-native-navigation";
// import Home from './src/screens/Home';
import SecondScreen from './src/screens/SecondScreen';
import CaptureImage from './src/screens/CaptureImage';

// Navigation.registerComponent(`WelcomeScreen`, () => Home);
Navigation.registerComponent(`WelcomeScreen`, () => require('./src/screens/Home').Home);
// Navigation.registerComponent(`SecondScreen`, () => SecondScreen);
Navigation.registerComponent(`SecondScreen`, () => require('./src/screens/SecondScreen').SecondScreen);
// Navigation.registerComponent(`CaptureImage`, () => CaptureImage);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
        stack:{
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