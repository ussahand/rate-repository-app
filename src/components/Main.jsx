import Constants from 'expo-constants';
import { View, StyleSheet, PixelRatio, Dimensions } from 'react-native';
import { Div } from './styles';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    // flexGrow: 1,
    // flexShrink: 1,    
  },
});

const layout = (e) =>{
  // const windim = useWindowDimensions();
  // console.clear();
  console.log('layout dim:', e.nativeEvent.layout);
  console.log('pixel ratio get:', PixelRatio.get());
  console.log('getFontScale:', PixelRatio.getFontScale());
  console.log('getPixelSizeForLayoutSize:', PixelRatio.getPixelSizeForLayoutSize(200));
  console.log('roundToNearestPixel:', PixelRatio.roundToNearestPixel(200));
  console.log('Dimensions.get screen', Dimensions.get('screen')) // Size of the device's screen
  console.log('Dimensions.get window',  Dimensions.get('window')) // Size of the visible Application window
  // console.log('Windo dims:', windim);
}

const Main = () => {
  console.log(20000)
  return (
    <Div style={styles.container} color='bg3rd' onLayout={layout}>
      <AppBar title='Repositories' />
      <RepositoryList />
    </Div>
  );
};

export default Main;