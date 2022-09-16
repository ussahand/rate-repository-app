import Constants from 'expo-constants';
import { StyleSheet, PixelRatio, Dimensions, Platform } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';
import { Div } from './styles';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './Signin';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: '100%'
  },
});

const layout = (e) =>{
  // const windim = useWindowDimensions();
  // console.clear();
  console.log('Platform:', Platform);
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
  return (
    <Div style={styles.container} onLayout={layout}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </Div>
  );
};

export default Main;