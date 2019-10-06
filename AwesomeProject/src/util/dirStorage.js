import { Platform } from 'react-native';
const RNFS = require('react-native-fs');

const getDirHome = () => {
    const loc = '/DCIM/AwesomeApp';
    const dir = Platform.select({
        ios: `${RNFS.DocumentDirectoryPath}`.concat(loc),
        android: `${RNFS.ExternalStorageDirectoryPath}`.concat(loc)
      });

    console.log('dir',dir);
    return dir;
};

export const dirHome = () => getDirHome();

export const dirPicutures = `${dirHome}/Pictures`;
