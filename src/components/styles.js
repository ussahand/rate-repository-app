import { StyleSheet, View, Text, Button as NativeButton } from "react-native"

const colors = {
  bg1st: '#1b1c25', // background dark
  bg2nd: '#292a2d', // light dark
  bg3rd: '#343434',
  c1st: '#0e639c',  // color blue;
  c2nd: '#8cdcf0', // light blue
  c3rd: 'white',
  c4th: 'gray',
  c5th: '#ce9178',
  c6th: '#b7dcaa',
}

const defaultFontSize = {
  h1: 32, h2: 24, h3: 18, h4: 16, h5: 14, h6: 12, h7: 10
}
//----------
const div = StyleSheet.create({
  container: {
    backgroundColor: colors.bg1st,
    borderColor: 'yellow',
    // borderWidth: 1,
    // padding: 11,
    margin:2,
  },
  bg2nd: { backgroundColor: colors.bg2nd, },
  bg3rd: { backgroundColor: colors.bg3rd, },
})

export const Div = ({ color, style, children, ...props }) =>
  <View style={[div.container, colors[color] && div[color], style]} {...props}>
    {children}
  </View>

//---------
const p = StyleSheet.create({
  parag: {
    color: colors.c1st,
    fontSize: defaultFontSize.h5, //react native default font size is 14 dp
    // borderColor: 'yellow',
    // backgroundColor: 'white',
    // borderWidth: 1,
  },
  bold: {fontWeight: '900'},
  c2nd: { color: colors.c2nd },
  c3rd: { color: colors.c3rd },
  c4th: { color: colors.c4th },
  c5th: { color: colors.c5th },
  c6th: { color: colors.c6th },
  h1: { fontSize: defaultFontSize.h1 },
  h2: { fontSize: defaultFontSize.h2 },
  h3: { fontSize: defaultFontSize.h3 },
  h4: { fontSize: defaultFontSize.h4 },
  h5: { fontSize: defaultFontSize.h5 },
  h6: { fontSize: defaultFontSize.h6 },
  h7: { fontSize: defaultFontSize.h7 },
})

export const P = ({ color, fontSize, bold, style, children, ...props }) =>
  <Text style={[
    p.parag,
    colors[color] && p[color],
    defaultFontSize[fontSize] && p[fontSize],
    bold && p.bold,
    style]} {...props}
    >
    {children}
  </Text>
//-------------------

const button = StyleSheet.create({
  box:{}
})
export const Button = ({ color, fontSize, style, children, ...props }) =>
  <NativeButton style={[
    button.box,
    colors[color] && p[color],
    defaultFontSize[fontSize] && p[fontSize],
    style]} {...props}
    >
    {children}
  </NativeButton>